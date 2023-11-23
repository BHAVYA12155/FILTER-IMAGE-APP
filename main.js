function preload()
{
    
}
 
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(135, 350);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw()
{
    
    tint(tint_color);
    image(video, 150, 125, 320, 240);
    fill(255,215,0 );
    stroke(249, 196, 125);
    circle(50,50,50);
    circle(590,50,50);
    circle(50,430,50);
    circle(590,430,50);
    
    rect(50, 40, 550, 22);
    rect(50, 40, 20,400);
    rect(570, 39, 20,400);
    rect(50, 417, 540, 22);
    
}

function take_snapshot()
{
    save('student.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

