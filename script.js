function parseData ()
{
  for (day in bitchart){
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
  if('webkitAudioContext' in window)
    {
      window.myAudioContext = new webkitAudioContext();
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
