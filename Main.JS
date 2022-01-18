canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
image_width = 300;
image_height = 100;

var image_image;

image_x = 100;
image_y = 100;

function add() {
	image_imageTag = new Image();
	image_imageTag.onload = uploadimage;
	image_imageTag.src = image_image;
}

function uploadimg() {

	ctx.drawImage(image_imageTag, image_x, image_y, image_width, image_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
{
	aplhabetkey();
	document.getElementById("d1").innerHTML="you pressed Alphabet Key";
	console.log("alphabet key");
}
    if(keyPressed >=48 && keyPressed<=57)
    {
    numberkey();
	document.getElementById("d1").innerHTML="you pressed Number Key";
	console.log("number key");
    }
    if(keyPressed >=37 && keyPressed<=40)
    {
	arrowkey();
	document.getElementById("d1").innerHTML="you pressed Arrow Key";
	console.log("arrow key");
    }
    if(keyPressed==17 && keyPressed==18 && keyPressed==27) 
	{
	specialkey();
	document.getElementById("d1").innerHTML="you pressed Special Key";
	console.log("special key");
	}
     if(keyPressed==Symbols)
	{
	otherkey();
	document.getElementById("d1").innerHTML="you pressed Other Key";
	console.log("other key");
	}

	
function aplhabetkey(){
	image_image="Alpkey.png";
	add();	

}
function numberkey(){
	image_image="numkey.png";
	add();	
}
function arrowkey(){
 	image_image="Arrkey.png";
 	add();
}
function specialkey(){
 	image_image="spkey.png";
 	add();
}
function otherkey(){}
    image_image="otherkey.png";
    add();
}