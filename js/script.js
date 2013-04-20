function parseData ()
{
  for (var day in bitchart) {
    day = bitchart[day];
    day[0] = moment.unix(day[0]);
  }
  return bitchart;
}

function playData (input)
{
  setInterval(function() {
    bitvalue = bitchart.shift();
    if (bitvalue != undefined){
      $('p').text(bitvalue[0].format("dddd, MMMM Do YYYY"));
      for (var i=1;i<3;i++)
      {
        osc[i].noteOn(0);
        osc[i].frequency.value = bitvalue[i]*10;
      }
    }else{
      for (var i=1;i<3;i++)
      {
        osc[i].noteOff(0);
        rec.stop();
      }
    }
  },400);
}

function initAudio()
{
  if('webkitAudioContext' in window)
    {
      window.myAudioContext = new webkitAudioContext();
      window.gain = myAudioContext.createGainNode();
      gain.gain.value = 5.0;
      gain.connect(myAudioContext.destination);
      var recorder = new Recorder(gain);
      window.osc = {};
      for (var i=1;i<6;i++)
      {
        osc[i] = myAudioContext.createOscillator();
        osc[i].type = 0; // sine wave
        osc[i].connect(gain);
      }
      rec = new Recorder(gain, {workerPath: "js/Recorderjs/recorderWorker.js"});
      rec.record();
      playData(parseData());
    }
;
}

function init ()
{
  initAudio();
}

window.onload = function()
{
  init();
};
