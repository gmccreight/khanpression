(function() {
  exports.Editor = (function() {
    var _;
    _ = require('underscore')._;
    function Editor() {
      this._edits = [];
      this._sequences = [];
    }
    Editor.prototype.test = function() {
      var h;
      h = {
        key1: "hello",
        key2: "foo"
      };
      return _.keys(h);
    };
    Editor.prototype.add_cut = function(start, duration) {
      return this._edits.push({
        type: "cut",
        start: start,
        end: this.time_add(start, duration)
      });
    };
    Editor.prototype.time_add = function(time, duration) {};
    Editor.prototype.time_to_frames = function(time) {};
    return Editor;
  })();
}).call(this);
