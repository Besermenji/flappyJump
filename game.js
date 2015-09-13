function game()
{
	"use strict";
	
	var WIDTH = 600;
	var HEIGHT = 800;
	var FPS = 25;
		
	var txt = "";	
	
	var canvas = null;
		
	(function main()
	{
		init();
	})();
	
	function init()
	{
		var canvasElem = $("<canvas width='" + WIDTH + "' height='" + HEIGHT + "'></canvas>");
		canvas = canvasElem.get(0).getContext("2d");
	    
		$("#game_canvas").append(canvasElem);
		
		if(annyang)
		{
			var commands = {"jump" : function(){player.y += 6;}};
			
			annyang.addCommands(commands);
			annyang.start();
		}
		
	}
	
var player = {
	color: "#00A",
	x: 220,
	y: 270,
	width: 32,
	height: 32,
	draw: function() 
	{
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x, this.y, this.width, this.height);
	}
};
	
	function gameLoop()
	{
		draw();
		update();
	}
	
	function draw()
	{
		canvas.clearRect(0, 0, WIDTH, HEIGHT);
  		player.draw();
	}
	
	function update()
	{
		
	}
	
	//call the game loop FPS(25) time each second
	setInterval(gameLoop, 1000/FPS);
	
};