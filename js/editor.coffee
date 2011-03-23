class exports.Editor

  _ = require('underscore')._

  constructor: ->
    @_edits = []
    @_sequences = []

  test: ->
    h = {key1:"hello", key2:"foo"}
    _.keys h

  add_cut: (start, duration) ->
    @_edits.push({type: "cut", start: start, end: this.time_add(start, duration)})

#############################################################################
# Time
#############################################################################

  time_add: (time, duration) ->

  time_to_frames: (time) ->

