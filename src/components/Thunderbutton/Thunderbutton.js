import React from'react'
//import img from './img.svg';


const Thunderbutton = () => {
    return (
        <div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
        <button id="home_button" onClick={() => { lightning(); timer(); lightning2(); timer2();}}></button>
        </div>
)
};


let x = 0
let xx = 0
let myInterval = -1
let myInterval2 = -1

function reset() {
    x = 0
}

function reset2() {
    xx = 0
}

function lightning(){
 if (myInterval === -1) {
     myInterval = setInterval(function(){
         let displayNumbers = x++;
        console.log(displayNumbers)}
, 1000)

 }
    else {
    clearInterval(myInterval);
    myInterval = -1;
		reset ()
}
}

var displayNumbers = 0;
	function timer ()
  	{
			setInterval ( count(), 1000);
		}
	function count()
		{
			document.getElementById('home_button').value = displayNumbers;
		}







function lightning2(){
if (myInterval2 === -1) {
   myInterval2 = setInterval(function(){
       let displayNumbers2 = xx++;
      console.log(displayNumbers2)}
, 1000)
}
 else {
  clearInterval(myInterval2);
  myInterval2 = -1;
	reset2 ()
}
}


var displayNumbers2 = 0;
	function timer2 ()
  	{
			setInterval ( count2(), 1000);
		}
	function count2()
		{
			document.getElementById('home_button').value = displayNumbers2;
		}
//
// function timedOut() {
// 	setTimeout(() => {
// 		     counter2++
// 				 console.log(counter2)
// }, 1000);
// }

let theSeconds = displayNumbers2

function enoughTime() {
    if (theSeconds >= 0 && theSeconds <= 2){
          alert("storms here");
      }
  else if (theSeconds >= 3 && theSeconds <=5) {
          alert ("storms not too far off")
      }
  else {
          alert ("storms far away")
      }
}

/*function timedOut11() {
	setTimeout(function() {
		let timeCaptured = x++;
}, 1000);
}*/

/*myInterval = setInterval(function(){
		let displayNumbers = x++;
	 console.log(displayNumbers)}
, 1000)*/
export default Thunderbutton;
 /* if (myInterval >= 0 || myInterval <= 1){
 		alert("storms here");
 	}
 	else if (myInterval >= 2 || myInterval <=5) {
 		alert ("storms not too far off")
 	}
 	else {
 		alert ("storms far away")
 	}
	console.log(myInterval)
	reset()
}; */


//className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'
 //<img src={img} alt='thunder' width='300' height='300' />

//<img src={img} alt='thunder' width='300' height='300' />
	//<button id="home_button" onClick={clickMe()}></button>
