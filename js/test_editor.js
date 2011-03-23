(function() {
  var new_editor;
  new_editor = function() {
    var editor;
    editor = require('editor');
    return new editor.Editor;
  };
  exports["should make frames from time"] = function(t) {
    var e;
    e = new_editor();
    t.expect(4);
    t.equal(e.time_to_frames("00:00:00:10"), 10, "frames");
    t.equal(e.time_to_frames("00:00:01:10"), 34, "seconds");
    t.equal(e.time_to_frames("00:10:01:10"), 14434, "minutes");
    t.equal(e.time_to_frames("02:10:01:10"), 187234, "hours");
    return t.done();
  };
  exports["should make time from frames"] = function(t) {
    var e;
    e = new_editor();
    t.expect(4);
    t.equal(e.frames_to_time(10), "00:00:00:10", "frames");
    t.equal(e.frames_to_time(34), "00:00:01:10", "seconds");
    t.equal(e.frames_to_time(14434), "00:10:01:10", "minutes");
    t.equal(e.frames_to_time(187234), "02:10:01:10", "hours");
    return t.done();
  };
  exports["should make a simple cut"] = function(t) {
    var e;
    e = new_editor();
    t.expect(1);
    e.add_cut("00:02:01:00", "00:00:01:00");
    t.deepEqual(e._edits, [
      {
        type: "cut",
        start: 2904,
        end: 2904 + 24
      }
    ], "cut");
    return t.done();
  };
  exports["should get sequence with no edits"] = function(t) {
    var e;
    e = new_editor();
    t.expect(1);
    t.deepEqual(e.get_sequences(), [['00:00:00:00', '23:59:59:23']]);
    return t.done();
  };
  exports["should get sequence with one cut"] = function(t) {
    var e;
    e = new_editor();
    t.expect(1);
    e.add_cut("00:02:01:00", "00:00:01:00");
    t.deepEqual(e.get_sequences(), [['00:00:00:00', '00:02:01:00'], ['00:02:02:00', '23:59:59:23']]);
    return t.done();
  };
  exports["should get sequence with multiple cuts"] = function(t) {
    var e;
    e = new_editor();
    t.expect(1);
    e.add_cut("00:02:01:00", "00:00:01:00");
    e.add_cut("01:00:00:00", "00:01:00:00");
    t.deepEqual(e.get_sequences(), [['00:00:00:00', '00:02:01:00'], ['00:02:02:00', '01:00:00:00'], ['01:01:00:00', '23:59:59:23']]);
    return t.done();
  };
}).call(this);
