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
  console.log(input);
}

function initAudio()
{
  if (typeof AudioContext !== "undefined") {
    myAudioContext = new AudioContext();
  } else if (typeof webkitAudioContext !== "undefined") {
    myAudioContext = new webkitAudioContext();
  } else {
    throw new Error('AudioContext not supported. :(');
  }

  window.source = myAudioContext.createOscillator();
  source.type = 0; // sine wave

  source.connect(myAudioContext.destination);
}

function init ()
{
  initAudio();
  playData(parseData());
}

window.onload = function()
{
  init();
};
