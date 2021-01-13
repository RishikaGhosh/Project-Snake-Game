

//context=canvas.getContext('2d')
//context.fillRect(20,20,50,50)

function init(){
  canvas=document.getElementById("mycanvas");
  W=canvas.height=700;
  H=canvas.width=700;

  context=canvas.getContext('2d')

  rect={
    x:20,
    y:20,
    w:40,
    h:40,
    speed:20,
  }


}

function draw(){
  context.clearRect(0,0,W,H)
 context.fillRect(rect.x,rect.y,rect.w,rect.h)
 context.fillStyle="#d32626"
}

function update(){
  rect.x+=rect.speed;
  if(rect.x>W-rect.w||rect.x<0){
    rect.speed*=-1;
  }
}

function gameloop(){
  draw();
  update();
}
init();
setInterval(gameloop,100);
