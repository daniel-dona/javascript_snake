function Snake(){
	
	this.turn_queue = [];
	this.segments = [];
	
	this.segments.push({x:6,y:4,d:1});
	this.segments.push({x:5,y:4,d:1});
	this.segments.push({x:4,y:4,d:1});
	this.segments.push({x:3,y:4,d:1});
	this.segments.push({x:2,y:4,d:1});
	this.segments.push({x:1,y:4,d:1});

}

Snake.prototype.moveStep = function(){
	
	for(i = 0; i < this.segments.length; i++){  // recorre todos los segmentos (los lee)
		
		for(j = 0; j < this.turn_queue.length; j++){ // recorre los movimientos para comprobar si hay alguno que tiene que aplicarse a ese segmento
			
			
			if(this.turn_queue[j] != null && this.segments[i].x == this.turn_queue[j].x && this.segments[i].y == this.turn_queue[j].y){
				
				this.segments[i].d = this.turn_queue[j].d;
				
				if(i == (this.segments.length - 1)){
					
					this.turn_queue[j] = null;
				
					
				}
				
				break;
			}
		
		
		}
		if (this.segments[i].d == 0 ){		
			this.segments[i].y--;
		}
		if (this.segments[i].d == 1 ){		
			this.segments[i].x++;
		}
		if (this.segments[i].d == 2 ){		
			this.segments[i].y++;
		}
		if (this.segments[i].d == 3 ){		
			this.segments[i].x--;
		}
		/*  
 * if (this.snake.segments[i].x > 24){
 *      this.snake.segments[i].x = 0;
 * }
  
 * */
		
			
			
		
	}
	
}


Snake.prototype.getHeadPosition = function(){
	
	return this.segments[0];
	
}

Snake.prototype.addTurn = function(turn_element){
	
	for(j = 0; j < this.turn_queue.length; j++){
		
		console.log(turn_element);
		
		if(this.turn_queue[j] != null){
		
			if(turn_element.x == this.turn_queue[j].x && turn_element.y == this.turn_queue[j].y){
				
				return;
				
				console.log("Wrong movement");
		 
			}
			
		}
		
	}
	if(Math.abs(this.getHeadPosition().d - turn_element.d) != 2){
			this.turn_queue.push(turn_element);

}else{
	console.log("giro erroneo");
	}
		
}

Snake.prototype.isSnake = function(position){
			
	for (i=0;i<this.segments.length;i++	){
		
		if(this.segments[i].x == position.x && this.segments[i].y == position.y){
			
			return true;	
					
		}
	}
	
	return false;
	
}

Snake.prototype.grow = function(){
	
	last = this.segments[this.segments.length - 1];
	
//	this.segments.push({x: last.x);
	
}
Snake.prototype.isTouchingHimself = function(){
	for(i = 1 ; i < this.segments.length ; i++){
		
		if(this.getHeadPosition().x == this.segments[i].x
		    && this.getHeadPosition().y == this.segments[i].y){
						return true;
}
		
}	
	return false;
}

