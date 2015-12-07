#Get Compatible Audio Extension
## The Web Audio API Version of canPlayType() function

###What This Is
This little function I wrote helped me, so I figured it might help someone else as well. This is a simple function that, when run, returns the extension of most compatible audio codec for the browser in which it is run. For example, when run in Firefox, ".mp3" is returned. 

###Why Use It
The Web Audio API has no methods for testing whether a specific audio codec is supported by the implementing browser. <!-- What I wanted was an Web Audio equivalent to the HTML5 <audio> canPlayType() function. -->

###How To Use It
The problem of loading the right file using <audio> is to indicate multiple source files, like so:

```
 <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio> 
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis soluta nostrum dolor, perspiciatis dicta nemo nulla ea doloribus. Optio, officia.