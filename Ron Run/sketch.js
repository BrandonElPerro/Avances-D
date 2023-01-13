let city, ron, points,pinchos,ground;
let ronImage, cityImage,pointsImage, pinchosImage, groundImage, gameOverImage;

let gameOver;
let pointsGroup, pinchosGroup;

let pointsValue = 0;
let gameState = true;

function preload(){
    ronImage = loadImage("CubePlayer.png");
    cityImage = loadImage("City.png");
    pointsImage = loadImage("Money.png");
    pinchosImage = loadImage("pinchos.png");
    groundImage = loadImage("Ground.png");
    gameOverImage = loadImage("GameOver.png");
}

function setup() {
    createCanvas(800,600);

    city = createSprite(400,400,900,1250);
    city.addImage(cityImage);
    city.scale = 1.25;

    ground = createSprite(400,600,800,80);
    ground.addImage(groundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -4;

    ron = createSprite(50,520,250,250);
    ron.addImage(ronImage);
    ron.scale = 0.25;

    pointsGroup = new Group();
    pinchosGroup = new Group();
}

function draw() {
    background("black");

    if (gameState) {
        
        if (keyDown("space") && ron.y >= 520) {
            ron.velocityY -= 18;
        }

        if (ground.x <= 5) {
            ground.x = ground.width / 2;
        }

        if (pointsGroup.isTouching(ron)) {
            pointsValue += 1;
        }

        ron.velocityY += 0.8;
        ron.collide(ground);

        spawnMoneyPoints();
        spawnPinchos();
        textSize(20);
        fill(255);
        text("Score: " + pointsValue, 10,30);
    }

    drawSprites();
}

function spawnPinchos() {
    let num = Math.round(random(680, 900));

    if (World.frameCount % 60 === 0) {
        let pi = createSprite(num,535,64,32);
        pi.addImage(pinchosImage);
        pi.shapeColor = "red";
        pi.scale = 1;
        pi.velocityX = -5;
        pi.lifeTime = 150;
        pinchosGroup.add(pi);
    }
}

function spawnMoneyPoints() {
    let num1 = Math.round(random(500, 900))

    if (World.frameCount % 60 === 0) {
        let m = createSprite(num1, 535, 64, 64);
        m.addImage(pointsImage);
        m.shapeColor = "yellow";
        m.scale = 0.5;
        m.velocityX = -5;
        m.lifeTime = 100;
        pointsGroup.add(m);
    }
}