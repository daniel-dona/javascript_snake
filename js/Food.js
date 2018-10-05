function Food(game){
	this.game = game

	this.food = [];
	
}

Food.prototype.generateFood = function(){
	
	x = Math.floor((Math.random() * 25) + 1);
	y = Math.floor((Math.random() * 25) + 1);	
	this.food.push({x:x,y:y,d:null});
	
}

Food.prototype.isFood = function(position){
	
	for (i=0;i<this.food.length;i++	){
		
		if(this.food[i].x == position.x && this.food[i].y == position.y){
			
			return true;
					
		}
	}
	
	return false;
	
}

