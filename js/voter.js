/* voter.js
	Alexander Rutan
	Basic Voting Test Page
*/

function Votes(){
	this.votes = [];
}

function Voter(){
	this.location = 0;
	this.vote = 0;
	this.id = 0;
}


function Candidate(color){
	this.color = color;
	this.votes = 0;
}


//find the canvas on our page.
var canvas;
var ctx;
var count = 0;

function Main(){
	//find the canvas on our page.
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	blueCandidate = new Candidate(BLUE);
	redCandidate = new Candidate(RED);
	
	votes = new Votes();
	
	display();
}

function vote(voteValue){
	count++;
	votes.votes.push(voteValue);
	
	if(count == 4){
		tally();
		count = 0;
	}
	
	display();
}

function tally(){
	blueCandidate.votes = 0;
	redCandidate.votes = 0;
	for(i = 0; i < votes.votes.length; i++){
		if (votes.votes[i] == BLUE){
			blueCandidate.votes++;
		}
		else if (votes.votes[i] == RED){
			redCandidate.votes++;
		}
	}
}

function display(){
	ctx.clearRect(0,0,800,600);
	ctx.font = "20px Arial";
	ctx.fillStyle = 'white';
	ctx.fillText("Blue: " + blueCandidate.votes, 100, 100);
	ctx.fillText("Red: " + redCandidate.votes, 100, 200);
}

BLUE = 0; RED = 1;