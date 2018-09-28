function Game(){
	this.size = 25;
	this.speed = 10;
	this.score = 0;
	
	// Initial state
	
//	this.board = new Board(this.size);
	this.snake = new Snake();
	this.food = new Food();
	
}

Game.prototype.move = function(direction){
	
	pos = cloneObj(this.snake.getHeadPosition());
	
	pos.d = direction;
	
	console.log(pos);
	
	this.snake.addTurn(pos);
	
}

Game.prototype.isTouchingHimself = function(){
	
	
	
	
	return true/false;
	
}

Game.prototype.isTouchingFood = function(){
	
	
	return true/false;
	
}
