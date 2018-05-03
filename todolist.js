

// select & manipulated with queryselector 
// selecting ALL li's
var lis = document.querySelectorAll('li'); 


//loop to target all the elements (3)
for(var i = 0; i < lis.length; i++) {

	//mouseover turns the text into pink using a separate css
	// class. Also could be done using style.color
	lis[i].addEventListener("mouseover", function() { 
		 //this.style.color = "pink";
		this.classList.add("mouseon");

	});
     
     //mouseout turns the text back to black using separate
     // css class. Also could be done by style.colr
	lis[i].addEventListener("mouseout", function() { 
     //this.style.color = "black";
     this.classList.remove("mouseon");
	});
    
    // added eventlistener done and class finished
	lis[i].addEventListener("click", function() { 
		this.classList.toggle("finished");

	});
}