/*
/* Library that spins the html body
/*
/* Call function barrel_roll(speed,direction,i)
/* speed can be fast, normal(default) or slow 
/* direction can be r / right (default) or l / left
/* i is starting angle default : 0
/* e.g. barrel_roll()
*/

var barrel_roll_speed = 'normal' ; // can be fast , normal or slow
var barrel_roll_direction = 'right' ; // can be right or left

// add onload event
function addOnloadEvent(fnc){
  if ( typeof window.addEventListener != "undefined" )
    window.addEventListener( "load", fnc, false );
  else if ( typeof window.attachEvent != "undefined" ) {
    window.attachEvent( "onload", fnc );
  }
  else {
    if ( window.onload != null ) {
      var oldOnload = window.onload;
      window.onload = function ( e ) {
        oldOnload( e );
        window[fnc]();
      };
    }
    else 
      window.onload = fnc;
  }
}

// the roll itself
function barrel_roll(speed,direction,i){
if (i == undefined){i=0;} // default i
switch (speed){ // set speed
case 'fast': 	increase = 13 ;
break
case 'slow':	increase = 3  ;
break
default:		increase = 7  ;
}
if (direction == 'l' || direction == 'left'){increase = -increase}//backwards
i += increase ;
if (i >= 360 || i <= -360){i = 0} //stop
else{setTimeout(function() {barrel_roll(speed,direction,i)},1);}// do it again
document.getElementsByTagName('body')[0].style.transform = 'rotate('+i+'deg)' ;
document.getElementsByTagName('body')[0].style.WebkitTransform = 'rotate('+i+'deg)' ;
document.getElementsByTagName('body')[0].style.MozTransform = 'rotate('+i+'deg)' ;
document.getElementsByTagName('body')[0].style.OTransform = 'rotate('+i+'deg)' ;
document.getElementsByTagName('body')[0].style.msTransform = 'rotate('+i+'deg)' ;
}

// check the text
function barrel_roll_test() {
if (/barrel roll$/i.test(this.value) == true ){
		/* Do the roll - Yippee! */
		barrel_roll(barrel_roll_speed,barrel_roll_direction,0);		
		/* Then remove the event listener */
		barrel_roll_tag_list = document.getElementsByTagName("input");
		for (i=0;i< barrel_roll_tag_list.length;i++) {
		barrel_roll_tag_list[i].removeEventListener('keyup',barrel_roll_test,false);
		};
		barrel_roll_tag_list = document.getElementsByTagName("textarea");
		for (i=0;i< barrel_roll_tag_list.length;i++) {
		barrel_roll_tag_list[i].removeEventListener('keyup',barrel_roll_test,false);
		};
	}
}

function barrel_roll_initial(){
// addeventlistener
barrel_roll_tag_list = document.getElementsByTagName("input");
	for (i=0;i< barrel_roll_tag_list.length;i++) {
	barrel_roll_tag_list[i].addEventListener('keyup',barrel_roll_test,false);
	}
barrel_roll_tag_list = document.getElementsByTagName("textarea");
	for (i=0;i< barrel_roll_tag_list.length;i++) {
	barrel_roll_tag_list[i].addEventListener('keyup',barrel_roll_test,false);
	}
}

addOnloadEvent(barrel_roll_initial);