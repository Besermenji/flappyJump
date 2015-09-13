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
			var commands = {"jump" : function(){txt = "jump";}};
			
			annyang.addCommands(commands);
			annyang.start();
		}
		
	}
	
	function gameLoop()
	{
		draw();
		update();
	}
	
	function draw()
	{
		canvas.fillStyle = "#000";
		canvas.fillText(txt, 100, 100);
	}
	
	function update()
	{
		
	}
	
	//call the game loop FPS(25) time each second
	setInterval(gameLoop, 1000/FPS);
	
};