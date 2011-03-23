require.paths.unshift '.'

fs = require 'fs'
sys = require 'sys'
exec = require('child_process').exec
puts = (error, stdout, stderr) -> sys.puts stdout
_ = require('underscore')._

editor = require 'editor'
e = new editor.Editor
console.log e.test()


#fs.unlink '../videos/out/orig_length.avi', (err) -> throw err if err
#exec "ffmpeg -i ../videos/source/simple-equations.flv -vcodec copy -acodec copy -ss 00:00:00:00 -t 00:00:43:00 ../videos/out/orig_length.avi", puts

#data = [
#  {type: "cut", start:"00:00:05:00", end:"00:00:06:00"},
#]
