(function() {
  var new_editor;
  new_editor = function() {
    var editor;
    editor = require('editor');
    return new editor.Editor;
  };
  exports.testSomething = function(t) {
    var e;
    e = new_editor();
    t.expect(1);
    t.deepEqual(e.test(), ["key1", "key2"], "keys are right");
    return t.done();
  };
}).call(this);
