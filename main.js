img= "";
stat = "";
objects = [];
objectDetector = "";


function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    stat = true;
    objectDetector.detect(img , gotResult);

}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img ,0, 0 ,640 , 420);
    
    if(stat != ""){

        for(i = 0 ; i<objects.lenght ; i++){
        document.getElementById("status").innerHTML = "Status - Object Detected";

        fill("lightslategray");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + percent + "%" , objects[i].x+15 , objects[i].y+15);
        noFill()
        stroke("lightslategray")
        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}



function gotResult(error , results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}