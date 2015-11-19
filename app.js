var context;
var i=1.0,j=0.0;
var k=0;
var value1=0;
var value=0;

var mainFunction = function()
{
	var canvas = document.getElementById("mycanvas");
	
	canvas.height = 1920;
	canvas.width = 1440;
	
	context = canvas.getContext("2d");
}


var secondaryWave = function()
{
	var cos = 0.0;
	cos = Math.cos(value);
	j = cos*50*-1;
	context.fillStyle = "rgba(0,0,255,1)";
    context.fillRect(k, j+300, 5, 5);
	if (value>2*Math.PI)
	{
		value=0;
	}
	else
	{
		value=value+0.1;
	}
}

var primaryWave = function()
{
	var cos = 0.0;
	cos = Math.cos(value1);
	j = cos*50*-1;
	context.fillStyle = "rgba(0,255,0,1)";
    context.fillRect(k, j+300, 5, 5);
	if (value1>2*Math.PI)
	{
		value1=0;
	}
	else
	{
		value1=value1+0.01;
	}
}
var value2=0;
function centerX()
{
	var cos = 0.0;
	cos = 1;
	j = cos//*50;
	context.fillStyle = "rgba(0,0,0,1)";
    context.fillRect(k, j+300, 5, 5);
	if (k % (200) == 0)
		context.fillText("(" + (k-Math.PI/2*300) + ", 0)", k, j+515);
}

function centerY()
{
	var cos = 0.0;
	cos = value2++;
	j = cos//*50;
	context.fillStyle = "rgba(0,0,0,1)";
    context.fillRect(Math.PI/2*300, j, 5, 5);
	if (j % 100 == 0)
		context.fillText("(0, " + ((j-300.0)*-1) + ")",Math.PI/2*300+15, j );
}
function mainLoop()
{
	//context.clearRect(0,0,800,600);
	secondaryWave()
	primaryWave();
	centerX();
	centerY();
	k=k+1;
}

mainFunction();
setInterval(mainLoop, 1);


