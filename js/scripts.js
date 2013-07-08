/*$(document).on('ready',function(){
	var musica = $("#musica");
	$("#play")
	.on('click',function() {
		musica.play();
	});
})*/
$(document).ready(function(){
  $('#dale').audioeffects({

            theTrigger : "click",
            //theStop : "mouseleave"
            audioId : "musica",
            volume: 0.6

    });
/*
  $('#exampleTwo').audioeffects({
            theTrigger: "keydown",
            audioId: "beep3",
            volume: 1,
            keycode: 38,
            callback: function(){alert('this triggered an audio effect when I pressed the "up" arrow key.')}
  })*/
  });
