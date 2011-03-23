khanpression

I'd like to make the videos on Khan Academy more pithy, wouldn't you?

khanpression is a tool for doing just that.  By describing certain video and
audio transformations in an easy to read and edit grammar, my hope is to be
able to cut the length of the Khan academy videos substantially while
maintaining their pedagogical value.

I'm very early in the process, and the API is exceptionally unstable, but if
you stumble across this and are interested in helping, shoot me a note.

The bulk of the tool is written in node.js.  It uses FFmpeg to do the actual
video transformations.  Currently the edit grammar is unwritten, though it will
likely be a CoffeeScript-based DSL.
