
import React from'react'
//import img from './img.svg';


const Thunderbutton = () => {
	return (
		<div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
		<button id="home_button" onClick={lightning}></button>
		</div>
)
};


let x = 0
let myInterval = -1

function reset() {
	x = 0
}

function lightning(){
 if (myInterval === -1) {
 	myInterval = setInterval(function(){
 		let displayNumbers = x++
		console.log(displayNumbers)}
, 1000)
 	return(myInterval)
 }
	else {
	clearInterval(myInterval);
	myInterval = -1;
}

 if (myInterval === 0){
 		alert("storms here");
 	}
 	else if (myInterval >= 1 && myInterval <=3) {
 		alert ("storms not too far off")
 	}
 	else {
 		alert ("storms far away")
 	}
	reset()
};


//className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'
 //<img src={img} alt='thunder' width='300' height='300' />

//<img src={img} alt='thunder' width='300' height='300' />
	//<button id="home_button" onClick={clickMe()}></button>

export default Thunderbutton;