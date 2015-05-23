gameCanvas.addEventListener('mousemove', function(e){
	rect = gamecanvas.getBoundingClientRect(); //get bounding rectangle
	mouseX = e.clientX - rect.left;
	mouseY = e.clientY - rect.top;
});