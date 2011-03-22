(function() {
  var exec, fs, puts, sys;
  fs = require('fs');
  sys = require('sys');
  exec = require('child_process').exec;
  puts = function(error, stdout, stderr) {
    return sys.puts(stdout);
  };
  fs.unlink('../videos/out/orig_length.avi', function(err) {
    if (err) {
      throw err;
    }
  });
  exec("ffmpeg -i ../videos/source/simple-equations.flv -vcodec copy -acodec copy -ss 00:00:00:00 -t 00:00:43:00 ../videos/out/orig_length.avi", puts);
}).call(this);
