var video;
var volume;
var speed;
var range;
var volText;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	volume = 1.0;
	speed = 1.0;
	range = document.querySelector('#slider');
	video.volume = volume;
	video.playbackRate = speed;
	volText = document.querySelector('#volume');


document.querySelector("#play").addEventListener("click", function() {
  	console.log("Play Video");
	video.play();
	video.volume = volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
  	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video Down");
  	speed -= 0.1;
	video.playbackRate = speed;
	console.log(speed); 
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video Up");
  	speed += 0.1;
	video.playbackRate = speed;
	console.log(speed); 
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead 10 Seconds");
  	if (video.currentTime+10 >= video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute");
  	if (video.muted == true){
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
	console.log("Current time: " + video.currentTime);
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume from Slider");
	volume = this.value/100;
	video.volume = volume;
	console.log(volume);
	volText.textContent = volume*100; 
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply Old School Class");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School Class");
	video.classList.remove("oldSchool");
});
});

