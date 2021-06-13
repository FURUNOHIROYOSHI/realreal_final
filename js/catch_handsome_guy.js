var score = -1;
var tds;
var img;

function set() { 
	createTable(5);
	tds = document.getElementsByTagName("td");
	img = document.createElement("img");	
	img.setAttribute("src", './images/ohmygirl.jpg');		
	img.style.display = "block";
	img.style.margin = "0 auto";
	img.width = "140";
	img.height = "140";
	img.onclick = moveImageAndUpScore;
	moveImageAndUpScore();
}

function createTable(size) {
	var table = document.createElement("table");
	table.style.border = "1px solid black";
	table.style.borderCollapse = "collapse"; 
	document.body.appendChild(table);
	
	for(var i=0; i<size; i++) {
		var tr = document.createElement("tr");
		table.appendChild(tr);
		for(var j=0; j<size; j++) {
			var td = document.createElement("td");
			td.style.border = "1px solid black";
			td.style.width = "150px";
			td.style.height = "150px";
			td.style.padding = 0;
			tr.appendChild(td);
		}
	}
}

function moveImageAndUpScore() { 
	var td1 = tds[Math.floor(Math.random()*25)];
	td1.appendChild(img);
	var Vscore = document.getElementById("score");
	score++;
	Vscore.innerHTML = score;
	if(score>=10){
		var link = 'https://www.youtube.com/watch?v=P3ln1nmbf3o';
		window.open(link);
	}
}
