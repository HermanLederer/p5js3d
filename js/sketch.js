function setup() {
    //create a canvas that's 400px in width and 400px in height
    createCanvas(400, 400); 
}




function draw() {
   
  
  
  
 loop(background(66-0.25*mouseY, 206-0.25*mouseY, 245));
  
    

   fill(0)
   text(mouseX, 350 , 20);
   text(mouseY, 350 , 40);
   
   fill(50, 168, 82);
   rect(0, 300, 400, 100);


   fill(242, 235, 24);
   noStroke();
   circle(mouseX, mouseY,50);
  
  
   

   fill(61, 40, 0);
   rect(300, 150, 30, 150);
  
   fill(0, 61, 25);
   circle(315,125,100);

}

