var parseData = function ()
{
  for (var day in bitchart) {
    day = bitchart[day];
    day[0] = moment.unix(day[0]);
  }
  return bitchart;
}

var queryData = function (blob)
{
  console.log(blob);
}

var playData = function (input, cb)
{
  bitcharttotal = bitchart.length
  var playNote = setInterval(function() {
    var bitvalue = bitchart.shift();
    var index = bitcharttotal-bitchart.length-1;
    plot.unhighlight();
    if (bitvalue != undefined){
      $('p').text(bitvalue[0].format("dddd, MMMM Do YYYY"));
      for (var i=1;i<8;i++)
      {
        plot.highlight(i-1, index);
        osc[i].noteOn(0);
        osc[i].frequency.value = bitvalue[i]*10;
      }
    }else{
      for (var i=1;i<8;i++)
      {
        osc[i].noteOff(0);
      }
      rec.stop();
      //cb;
      clearInterval(playNote);
    }
  },400);
}

var initAudio = function ()
{
  if('webkitAudioContext' in window)
    {
      window.myAudioContext = new webkitAudioContext();
      window.gain = myAudioContext.createGainNode();
      gain.gain.value = 0.4;
      gain.connect(myAudioContext.destination);
      var recorder = new Recorder(gain);
      window.osc = {};
      for (var i=1;i<8;i++)
      {
        osc[i] = myAudioContext.createOscillator();
        osc[i].type = 0; // sine wave
        osc[i].connect(gain);
      }
      rec = new Recorder(gain, {workerPath: "js/Recorderjs/recorderWorker.js"});
      rec.record();
      playData(parseData(), queryData("boo"));
    };
}

function init ()
{
  initAudio();
}

window.onload = function()
{
  init();
};
