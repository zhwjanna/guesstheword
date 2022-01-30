function getLocalStream() {
  navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
  }).catch( err => {
      console.log("u got an error:" + err)
  });
}
getLocalStream();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
