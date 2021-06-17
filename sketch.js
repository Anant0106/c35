var ball, database, position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(300,400,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('Car/Position');
    ballPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Car/Position').set({
        x:ball.x+x,
        x:ball.y+y
    });
    
}

function readPosition(data){
position = data.val();
ball.x = position.x
ball.y = position.y
}

function showError(){
    console.log("showError");
}