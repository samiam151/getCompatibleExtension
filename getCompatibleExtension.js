var getCompatibleExtension = function(){

  // Declare some variables
  var formats = [
    'audio/mpeg',
    'audio/wav',
    'audio/ogg'
    ],
    ext = '', 
    results = [],
    i = 0, j = formats.length,  
    audio = new Audio();
  
  // Make the function that test for browser compatibility
  function canPlay(type){
    return audio.canPlayType(type);
  }
  
  // Loop through the sound formats to see which ones are good
  for(; i < j; i++){
    if(canPlay(formats[i]) === "maybe"){
      results.push(formats[i]);
    }
  }
  
  // Get the appropriate extension
  switch(results[0]) {
    case "audio/mpeg":
      return '.mp3';
    case "audio/wav":
    case "audio/wave":
      return '.wav';
    case "audio/ogg":
      return '.ogg';
  }
}