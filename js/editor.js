(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  exports.Editor = (function() {
    var _;
    _ = require('underscore')._;
    function Editor() {
      this._edits = [];
      this._sequences = [];
      this._framerate = 24;
      this._start = 0;
      this._end = this.time_to_frames("23:59:59:23");
    }
    Editor.prototype.set_framerate = function(r) {
      return this._framerate = r;
    };
    Editor.prototype.set_start = function(t) {
      return this._start = this.time_to_frames(t);
    };
    Editor.prototype.set_end = function(t) {
      return this._end = this.time_to_frames(t);
    };
    Editor.prototype.get_sequences = function() {
      var sequences;
      sequences = [[this._start, this._end]];
      _.each(this._edits, __bind(function(e) {
        if (e.type === "cut") {
          return _.each(sequences, __bind(function(s, index) {
            if (s[0] < e.start && s[1] > e.end) {
              sequences.splice(index, 1, [s[0], e.start], [e.end, s[1]]);
              return true;
            }
          }, this));
        }
      }, this));
      return _.map(sequences, __bind(function(seq) {
        return [this.frames_to_time(seq[0]), this.frames_to_time(seq[1])];
      }, this));
    };
    Editor.prototype.add_cut = function(start, duration) {
      start = this.time_to_frames(start);
      duration = this.time_to_frames(duration);
      return this._edits.push({
        type: "cut",
        start: start,
        end: start + duration
      });
    };
    Editor.prototype.time_to_frames = function(time) {
      var frames, v;
      frames = 0;
      v = [1, 1 * this._framerate, 60 * this._framerate, 3600 * this._framerate];
      _.each(time.split(/:/).reverse(), function(val, index) {
        return frames += parseInt(val) * v[index];
      });
      return frames;
    };
    Editor.prototype.frames_to_time = function(frames) {
      var hmsf, rates;
      hmsf = [];
      rates = [3600 * this._framerate, 60 * this._framerate, this._framerate, 1];
      _.each(rates, function(r) {
        var v;
        v = Math.floor(frames / r);
        if (v < 10) {
          v = "0" + v;
        }
        hmsf.push(v);
        return frames = frames % r;
      });
      return hmsf.join(":");
    };
    return Editor;
  })();
}).call(this);
