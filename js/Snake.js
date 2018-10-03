function Snake(){
	
	this.turn_queue = [];
	this.segments = [];
	
	this.segments.push({x:6,y:4,d:1});
	this.segments.push({x:5,y:4,d:1});
	this.segments.push({x:4,y:4,d:1});

}

Snake.prototype.moveStep = function(){
	
	for(i = 0; i < this.segments.length; i++){  // recorre todos los segmentos (los lee)
		
		for(j = 0; j < this.turn_queue.length; j++){ // recorre los movimientos para comprobar si hay alguno que tiene que aplicarse a ese segmento
			
			
			if(this.segments[i].x == this.turn_queue[j].x && this.segments[i].y == this.turn_queue[j].y){
				this.segments[i].d = this.turn_queue[j].d;
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
		
	}
	
}


Snake.prototype.getHeadPosition = function(){
	
	return this.segments[0];
	
}

Snake.prototype.addTurn = function(turn_element){
	 
	 this.turn_queue.push(turn_element);
	
	
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
