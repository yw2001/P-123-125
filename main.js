function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=creatCanvas(550,550);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
  
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
  
      console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
  }
  
  function draw() {
  background('#6C91C2');
  
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
  textSize(difference);
  fill('#FFE787');
  text('Yahvi', 50, 400);
  }