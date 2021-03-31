const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var car,carImg;
var road, roadImg;
var diamond,diamondImg,diamondGroup;
var corona,coronaImg,coronaGroup;
var score=0;
function preload()
{
	carImg = loadImage("images/car.png");
  roadImg = loadImage("images/road.png");
  diamondImg= loadImage("images/diamond.png")
  coronaImg= loadImage("images/corona.png")
}

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
world = engine.world;

car= createSprite(100,250)
car.addImage(carImg);
car.scale=0.2;

road = createSprite(250,250,500,700);
road.addImage(roadImg);
road.scale = 2;

diamondGroup=new Group();
coronaGroup=new Group();

Engine.run(engine);
  
}


function draw() {
  background(255);
  
  rand = Math.round(random(400,600));
  if(frameCount%80===0){
      diamond = createSprite(random(10,700), random(10,500), 10, 10);
    diamond.addImage(diamondImg);
    diamond.scale= 0.07;
    diamond.velocityX = -2;
   diamondGroup.add(diamond);
}

rand = Math.round(random(450,550));
if(frameCount%80===0){
    corona= createSprite(random(10,690), random(10,490), 10, 10);
  corona.addImage(coronaImg);
  corona.scale= 0.5;
  corona.velocityX = -2;
  coronaGroup.add(corona);
}
     textSize(30);
    fill("red");
        text("Score: "+score , width-400 , 30);


  road.depth = car.depth 
  car.depth+=2;

  road.velocityX = -3 ;

//For the effect of car driving in the road
    if (road.x < 20){
      road.x = road.width/2;
    }

//For the car to move up and down  
if(keyDown(UP_ARROW)){
  car.y-=10;
}

if(keyDown(DOWN_ARROW)){
  car.y+=10;
}

//Scoring(If car is touching diamond,the immunity stone they will get more score) 
if(diamondGroup.isTouching(car)){
diamondGroup.destroyEach();
score+=1;
}

//Scoring(If the car touches the corona virus their score will get reduced)
if(coronaGroup.isTouching(car)){
  coronaGroup.destroyEach();
  score-=1;
  }

  //Scoring and messages
  textSize(25);
  fill("blue");
  if(score>4 && score<6){
    text("Keep going!",300,70);
  }
  if(score>9 && score<11){
    text("Good!",300,70);
  }
  if(score>14 && score<16){
    text("Amazing!",300,70);
  }
  if(score>19 && score<21){
    text("Excellent!",300,70);
  }
  if(score>24 && score<26){
    text("Marvellous!",300,70);
  }
  if(score>29 && score<31){
    text("OutStanding!",300,70);
  }

  drawSprites();
 
}
// About the game
//This game is called 'Improve your immunity, get away from corona!'
// The game is based on corona
// You have to escape from corona and gain more immunity stone(diamond) to get more power and points
// You are the car in the game
// You should press up and down arrow key to move the car
// Messages would pop up when you do good
// Increase your immunity
// All the best!


