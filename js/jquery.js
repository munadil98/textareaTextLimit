$(document).ready(function() {

	$(".textclass").keyup(function(){

		var	charnumber=$(".textclass").val().length;
		var remainingchar=60-charnumber;
		
		if(remainingchar <=-1){

			$(".limit").text(remainingchar).addClass("red");
		}
		else{
			$(".limit").text(remainingchar).removeClass("red");
		}


	});	


});


