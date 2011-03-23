class exports.Editor

  _ = require('underscore')._

  constructor: ->
    @_edits = []
    @_sequences = []
    @_framerate = 24

    @_start = 0
    @_end = this.time_to_frames("23:59:59:23")

  set_framerate: (r) -> @_framerate = r

  set_start: (t) -> @_start = this.time_to_frames(t)
  set_end: (t) -> @_end = this.time_to_frames(t)

  get_sequences: ->
    sequences = [[@_start, @_end]]
    _.each @_edits, (e) =>
      if e.type == "cut"
        _.each sequences, (s, index) =>
          if s[0] < e.start && s[1] > e.end
            sequences.splice(index, 1, [s[0], e.start], [e.end, s[1]])
            return true
    _.map sequences, (seq) => [this.frames_to_time(seq[0]), this.frames_to_time(seq[1])]

  add_cut: (start, duration) ->
    start = this.time_to_frames(start)
    duration = this.time_to_frames(duration)
    @_edits.push({type: "cut", start: start, end: start + duration})

  #02:10:01:10 becomes 187234 at 24fps
  time_to_frames: (time) ->
    frames = 0
    v = [1, 1 * @_framerate, 60 * @_framerate, 3600 * @_framerate]
    _.each time.split(/:/).reverse(), (val, index) ->
      frames += parseInt(val) * v[index]
    frames

  #187234 becomes 02:10:01:10 at 24fps
  frames_to_time: (frames) ->
    hmsf = []
    rates = [3600 * @_framerate, 60 * @_framerate, @_framerate, 1]
    _.each rates, (r) ->
      v = Math.floor(frames / r)
      v = "0" + v if v < 10
      hmsf.push v
      frames = frames % r
    hmsf.join(":")
