function Game(){
	this.size = 25;
	this.speed = 10;
	this.score = 0;
	
	this.snake = new Snake(this);
	this.food = new Food(this);
	
}

Game.prototype.run = function(){
	
	this.snake.moveStep();

	if(this.isTouchingFood()){
		
		alert("Ñ");
		
	}
	
}

Game.prototype.move = function(direction){
	
	pos = cloneObj(this.snake.getHeadPosition());
	
	pos.d = direction;
	
	console.log(pos);
	
	this.snake.addTurn(pos);
	
}

Game.prototype.isTouchingHimself = function(){
	
	//TO DO
	
}

Game.prototype.isTouchingFood = function(){
	
	return this.food.isFood(this.snake.getHeadPosition());
	
}
