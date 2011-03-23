#run this using "nodeunit test_editor.js"

new_editor = ->
  editor = require 'editor'
  new editor.Editor

exports.testSomething = (t) ->
  e = new_editor()
  t.expect(1)
  t.deepEqual(e.test(), ["key1", "key2"], "keys are right")
  t.done()
