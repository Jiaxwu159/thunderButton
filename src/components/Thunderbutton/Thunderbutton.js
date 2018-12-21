import React from'react'
//import img from './img.svg';


const Thunderbutton = () => {
	return (
		<div className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
		<button id="home_button" onClick={clickMe}></button>
		</div>
)
};


let x = 0

function clickMe(){
	setInterval(lightning, 1000);
}

function lightning(){

	let displayNumbers = x++
	console.log(displayNumbers)
}
//className='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'
 //<img src={img} alt='thunder' width='300' height='300' />

//<img src={img} alt='thunder' width='300' height='300' />
	//<button id="home_button" onClick={clickMe()}></button>

export default Thunderbutton;
