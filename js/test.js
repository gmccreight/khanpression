(function() {
  var e, editor, exec, fs, puts, sys, _;
  require.paths.unshift('.');
  fs = require('fs');
  sys = require('sys');
  exec = require('child_process').exec;
  puts = function(error, stdout, stderr) {
    return sys.puts(stdout);
  };
  _ = require('underscore')._;
  editor = require('editor');
  e = new editor.Editor;
  console.log(e.test());
}).call(this);
