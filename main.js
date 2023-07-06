noseX=0;
noseY=0;

function preload() 
{
    mustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    nose = loadImage("https://i.postimg.cc/bJMfhcgP/googles.jpg");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(nose, noseX-40, noseY-25, 80,30);
    image(mustache, noseX-40,noseY+10,80,20);
}

function take_snap()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet is Loaded...');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x; 
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}