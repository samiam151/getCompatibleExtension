#Get Compatible Audio Extension
####The Web Audio API Version of canPlayType() function

###What This Is
This little function I wrote helped me, so I figured it might help someone else as well. This is a simple function that, when run, returns the extension of most compatible audio codec for the browser in which it is run. For example, when run in Firefox, ".mp3" is returned. 

###Why Use It
The Web Audio API has no methods for testing whether a specific audio codec is supported by the implementing browser. What I wanted was an Web Audio equivalent to the HTML5 <audio> canPlayType() function, or an alternative to the multiple sources.

###How To Use It
The problem of loading the right file using <audio> is to indicate multiple source files, like so:

```
 <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio> 
```

Instead, we can use this function to FIND OUT what extension we need, and just grab that, usually through an XMLHttpRequest.

Let's say we have our audio files on the ready,
* handclap.mp3
* handclap.wav
* handclap.ogg

Here's what we can do:
```
var url = 'assets/handclap' + getCompatibleExtension();

var request = new XMLHttpRequest();
request.open('GET', url, someFunction);
```
In Chrome, if we `console.log(url)`, we would get back `assets/handclap.wav`. Simple, but helpful! 