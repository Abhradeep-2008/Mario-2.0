noseX = "";
noseY = "";


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1000,300);
	canvas.parent('canvas');

	instializeInSetup(mario);

  video = createCapture(VIDEO);
  video.size(700,400);
  video.parent('game_console');

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotResults);
}



function modelLoaded(){
	console.log("MODEL LOADED!");
}

function gotResults(results){

	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}

}

function draw() {
	game();
}










