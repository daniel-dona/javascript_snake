
var G;

function init(){

document.addEventListener("keydown", capture_keypress);

G = new Game();

setInterval(function(){ draw_board(); }, 100);

setInterval(function(){ G.run(); }, 100);

}

function reset(){


}

function capture_keypress(event){

	const LEFT_KEY = 37;
	const RIGHT_KEY = 39;
	const UP_KEY = 38;
	const DOWN_KEY = 40;


	if (event.keyCode === UP_KEY){
  
		G.move(0);

	}
	
	if (event.keyCode === RIGHT_KEY){
  
		G.move(1);

	}

	if (event.keyCode === DOWN_KEY){
  
		G.move(2);

	}
	
	if (event.keyCode === LEFT_KEY){
  
		G.move(3);

	}
}



function draw_board(){
	
	if(document.getElementById('board') == undefined){
	
		table = document.createElement('table');
		table.id = "board";
		
		tr = [];
		
		for(i = 0; i < G.size; i++){
			
			tr[i] = document.createElement('tr');
		
			for(j = 0; j < G.size; j++){
				
				td = document.createElement('td');
				
				td.id = i + "x" + j;
			
				
				tr[i].appendChild(td);
				
			}
			
			table.appendChild(tr[i]);
			
		}
		
		document.body.appendChild(table);
		
	}
	
	
	
	
	for(yy = 0; yy < G.size; yy++){
		
		for(xx = 0; xx < G.size; xx++){
			
		
			if(G.snake.isSnake({x: yy, y: xx})){
				
				document.getElementById(xx + "x" + yy).style.backgroundColor = "#000";
				
			}else if(G.food.isFood({x: yy, y: xx})){
				
				document.getElementById(xx + "x" + yy).style.backgroundColor = "#0F0";
				
			}else{
				
				document.getElementById(xx + "x" + yy).style.backgroundColor = "#EEE";
				
			}
			
			
			
		}
		
	} 
	
	

}

function cloneObj(src) {
  return JSON.parse(JSON.stringify(src));
}
