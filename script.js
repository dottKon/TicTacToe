var sig = 'X';
var asig = '?';

function topleft(s){
	if(document.getElementById('tl').innerHTML = '' || asig){
		document.getElementById('tl').innerHTML = sig;
		changeFlag();

	}
}

function topcenter(s){
	if(document.getElementById('tc').innerHTML = '' || asig){
		document.getElementById('tc').innerHTML = sig;
		changeFlag();
	}
}

function topright(s){
	if(document.getElementById('tr').innerHTML = '' || asig){
		document.getElementById('tr').innerHTML = sig;
		changeFlag();
	}
}

function middleleft(s){
	if(document.getElementById('ml').innerHTML = '' || asig){
		document.getElementById('ml').innerHTML = sig;
		changeFlag();
	}
}

function middlecenter(s){
	if(document.getElementById('mc').innerHTML = '' || asig){
		document.getElementById('mc').innerHTML = sig;
		changeFlag();
	}
}

function middleright(s){
	if(document.getElementById('mr').innerHTML = '' || asig){
		document.getElementById('mr').innerHTML = sig;
		changeFlag();
	}
}

function bottomleft(s){
	if(document.getElementById('bl').innerHTML = '' || asig){
		document.getElementById('bl').innerHTML = sig;
		changeFlag();
	}
}

function bottomcenter(s){
	if(document.getElementById('bc').innerHTML = '' || asig){
		document.getElementById('bc').innerHTML = sig;
		console.log(sig);
		changeFlag();
		console.log(sig);
	}
}

function bottomright(s){
	if(document.getElementById('br').innerHTML = '' || asig){
		document.getElementById('br').innerHTML = sig;
		console.log(sig);
		changeFlag();	
		console.log(sig);	
	}
}


function changeFlag(){
	if(sig='X'){
		sig = "O";
	}
}