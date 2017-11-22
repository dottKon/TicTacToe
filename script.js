var sig = 'X';
var oh = 'O';
var ex = 'X';

var winsOh = 0;
var winsEx = 0;

function topleft(s){
	if(document.getElementById('tl').innerHTML == ''){
		document.getElementById('tl').innerHTML = sig;
		changeFlag();
		winFun();

	}
}

function topcenter(s){
	if(document.getElementById('tc').innerHTML == ''){
		document.getElementById('tc').innerHTML = sig;
		changeFlag();
		winFun();
	}
}

function topright(s){
	if(document.getElementById('tr').innerHTML == ''){
		document.getElementById('tr').innerHTML = sig;
		changeFlag();
		winFun();
	}
}

function middleleft(s){
	if(document.getElementById('ml').innerHTML == ''){
		document.getElementById('ml').innerHTML = sig;
		changeFlag();


		winFun();
	}
}

function middlecenter(s){
	if(document.getElementById('mc').innerHTML == ''){
		document.getElementById('mc').innerHTML = sig;
		changeFlag();

		winFun();
	}
}

function middleright(s){
	if(document.getElementById('mr').innerHTML == ''){
		document.getElementById('mr').innerHTML = sig;
		changeFlag();

		winFun();
	}
}

function bottomleft(s){
	if(document.getElementById('bl').innerHTML == ''){
		document.getElementById('bl').innerHTML = sig;
		changeFlag();

		winFun();
	}
}

function bottomcenter(s){
	if(document.getElementById('bc').innerHTML == ''){
		document.getElementById('bc').innerHTML = sig;

		changeFlag();

		winFun();
	}
}

function bottomright(s){
	if(document.getElementById('br').innerHTML == ''){
		document.getElementById('br').innerHTML = sig;
		changeFlag();
		
		winFun();

	}

}

function changeFlag(){
	if(sig==oh){
		sig=ex;
	}else if(sig==ex){
		sig=oh;
	}
}


//Winning function: a function to verify wheather either of the signs is three in a row. There are 7 possible winning positions so function needs to verify after each move if this is the winning condition.

function winFun(){
	//check EXes
	if(document.getElementById('tl').innerHTML==ex &&
		document.getElementById('tc').innerHTML==ex &&
		document.getElementById('tr').innerHTML==ex){
		console.log('winX');
	}
	if(document.getElementById('tl').innerHTML==ex &&
		document.getElementById('ml').innerHTML==ex &&
		document.getElementById('bl').innerHTML==ex){
		console.log('winX');
	}
	if(document.getElementById('tl').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('br').innerHTML==ex){
		console.log('winX');
	}
	if(document.getElementById('bl').innerHTML==ex &&
		document.getElementById('bc').innerHTML==ex &&
		document.getElementById('br').innerHTML==ex){
		console.log('winX');
	}
	if(document.getElementById('tr').innerHTML==ex &&
		document.getElementById('mr').innerHTML==ex &&
		document.getElementById('br').innerHTML==ex){
		console.log('winX');
	}
	if(document.getElementById('tr').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('bl').innerHTML==ex){
		console.log('winX');
	}
	if(document.getElementById('ml').innerHTML==ex &&
		document.getElementById('mc').innerHTML==ex &&
		document.getElementById('mr').innerHTML==ex){
		console.log('winX');
	}

	//check oh
	if(document.getElementById('tl').innerHTML==oh &&
		document.getElementById('tc').innerHTML==oh &&
		document.getElementById('tr').innerHTML==oh){
		console.log('winOh');
	}
	if(document.getElementById('tl').innerHTML==oh &&
		document.getElementById('ml').innerHTML==oh &&
		document.getElementById('bl').innerHTML==oh){
		console.log('winOh');
	}
	if(document.getElementById('tl').innerHTML==oh &&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('br').innerHTML==oh){
		console.log('winOh');
	}
	if(document.getElementById('bl').innerHTML==oh&&
		document.getElementById('bc').innerHTML==oh &&
		document.getElementById('br').innerHTML==oh){
		console.log('winOh');
	}
	if(document.getElementById('tr').innerHTML==oh&&
		document.getElementById('mr').innerHTML==oh &&
		document.getElementById('br').innerHTML==oh){
		console.log('winOh');
	}
	if(document.getElementById('tr').innerHTML==oh&&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('bl').innerHTML==oh){
		console.log('winOh');
	}
	if(document.getElementById('ml').innerHTML==oh&&
		document.getElementById('mc').innerHTML==oh &&
		document.getElementById('mr').innerHTML==oh){
		console.log('winOh');
	}
}

//Draw function will be casted when there are 9 moves and winning function has not returned true
