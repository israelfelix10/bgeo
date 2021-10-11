var x= false, i=0, w=0, y,segundo = 0 + "0", minuto = 0 + "0", hora = 0 + "0";
									 
function setup() {
  createCanvas(1300, 700);
  posX = 800;
  posY = 600;
  posEx = 0;
  posEy = 0;
  posEy2=800
  posEx2=0
  //início
alert("Bem-Vindo!"+"Acerte o quadrado 50 vezes antes de 1 minuto para ir a próxima fase!") 
 

}

function draw() {
  background(0)
  tempo()
  textSize(19); // define o tamanho da fonte
  fill(255);
  text("Você acertou: "+ i + "   Computador:"+w +" Tempo: "+y, 250, 15);  
  //Gamer Over
  if(i<50 && hora==01){
	  alert("fim de jogo");
	  hora=00
	  i=0
  }
  else{
	  if(w>i || hora==02){
		  alert("fim de jogo");
	      hora=00
	      i=0
	      w=0
		  }
		  else{
			  if(i==100){
				  alert("Você ganhou")
				  i=0
				  
				  hora=00
				  minuto=00
			  }
		  }
  }
   
// Colisão
posEx = constrain(posEx, 40, width - 40);

  if (dist (posX+40, posY+40, posEx, posEy) <= (40+40) ) {
      fill (255, 0, 0);
      i++
    }
    else {
      fill (0, 255, 0);
      if (dist (posX+40, posY+40, posEx2, posEy2) <= (40+45) ) {
          fill (0, 0, 255);
          w++
        }
        else {
          fill (0, 255, 0);
        }
    }


    //controle da bola
  if (keyIsDown(LEFT_ARROW)) {
      posEx -= 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
  posEx += 5;
  }
  //animação do cubo
  if (posX < 1300){
  	posX = posX + 15;
                 }
                 else{
  	                   posX = 0;
                      }
                      
    rect(posX,posY, 80, 80);
    // animação da elipse
                    if (posEy < 700){
                                      posEy = posEy + 5;
                                    }
                                    else{
                                          posEy = 0;
                                        }
                                        ellipse(posEx,posEy, 80, 80);
                                   //Segunda Fase: Bola 2
                                  
		
                                        if(i>50){
											if(x==false){
												alert("Parabéns! Você está na segunda fase! O Desafio agora é acertar primeiro que o computador! Se você acertar 100 vezes antes de 2 minuto ganha!")
												x=true
											}
																						
                                          if(posEx2 < 1300){
                                            posEx2= posEx2+2
                                          }
                                          else{
                                            posEx2 = 0
                                          }
                                          if (posEy2 < 700){
                                                            posEy2 = posEy2 + 5;
                                                          }
                                                          else{
                                                                posEy2 = 0;
                                                              }
                                                              ellipse(posEx2, posEy2, 90, 90)
                                        }


                                              }

function tempo() {
  if (segundo < 59) {
    segundo++
    if (segundo < 10) {
      segundo = "0" + segundo
    }
  } else
  if (segundo == 59 && minuto < 59) {
    segundo = 0 + "0";
    minuto++;
    if (minuto < 10) {
      minuto = "0" + minuto
    }
  }
  if (minuto == 59 && segundo == 59 && hora < 23) {
    segundo = 0 + "0";
    minuto = 0 + "0";
    hora++;
    if (hora < 10) {
      hora = "0" + hora
    }
  } else
  if (minuto == 59 && segundo == 59 && hora == 23) {
    segundo = 0 + "0";
    minuto = 0 + "0";
    hora = 0 + "0";
  }
  y = hora + ":" + minuto + ":" + segundo

}

