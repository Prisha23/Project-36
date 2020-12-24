//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);

  foodStock = database.ref('Food');
  foodStock.on("value" ,readStock);
}


function draw() {  
background(46, 139, 87);

noStroke();
 textSize(35)
 fill("black")
 text("Score  " + 300, 50)

 text("note:press up_arrow key to feed drago " + 200, 200)

if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here

}

function readStock(data){
  food = data.val();
}

