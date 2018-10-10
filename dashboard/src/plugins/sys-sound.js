let sound = document.createElement('audio')
function play(source) {
  sound.currentTime = 0
  sound.src = require(`@root/public/sound/${source}.mp3`)
  sound.play()
}
export default {
  play
}
