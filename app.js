$(document).ready(function(){
	

	$('.menuToggle').click(function(){
		$('#home').addClass('displayHide');
		$('.navbutton').addClass('displayShow');
		$('#page1').addClass('displayShow');
		$('#home').removeClass('displayShow');
		$('#page1').removeClass('displayHide');
		$('#pagenav1').addClass('active');
		$('.cal').removeClass('displayShow');
	})
	$('.homeBtn').click(function(){
		$('#home').addClass('displayShow');
		$('#page1').addClass('displayHide');
		$('#page2').addClass('displayHide');
		$('.navbutton').removeClass('displayShow');
		$('#home').removeClass('displayHide');
		$('#page1').removeClass('displayShow');
		$('#page2').removeClass('displayShow');
		$('.cal').removeClass('displayShow');
		$('.menu').removeClass('displayHide');

	})
	$('#pagenav1').click(function(){
		
		$('#page1').addClass('displayShow');
		$('#page2').addClass('displayHide');
		$('#pagenav1').addClass('active');
		$('#pagenav2').removeClass('active');
				
		$('#page1').removeClass('displayHide');
		$('#page2').removeClass('displayShow');
		$('.cal').removeClass('displayShow');
		
	})
	$('#pagenav2').click(function(){
		$('#page1').addClass('displayHide');
		$('#page2').addClass('displayShow');
		$('#pagenav2').addClass('active');
		$('#pagenav1').removeClass('active');

		$('#page1').removeClass('displayShow');
		$('#page2').removeClass('displayHide');
		$('.cal').removeClass('displayShow');
	})
	$('.Calculator').click(function(){
		$('#page1').addClass('displayHide');
		$('#page2').addClass('displayHide');
		$('#home').addClass('displayHide');
		$('#home').removeClass('displayShow');
		$('.menu').addClass('displayHide');
		$('.cal').addClass('displayShow');
		$('.navbutton').addClass('displayHide');



	})


	
})

  setInterval(function(){ 
    document.getElementById("meter").innerHTML = Math.floor(Math.random() * (400 - 50)) + 50;;
  }, 1000);







function calNumberValue(value){
	var inputValue = document.querySelector('#result').value;
	document.querySelector('#result').value = inputValue + value;
}

function calssssNumberequal() {
    var inputValue = document.querySelector("#result").value;
    var finalValue = (inputValue = eval(inputValue));
    var finalValue = parseFloat(finalValue).toFixed(2);

    document.querySelector("#result").value = finalValue;
}


setInterval(function(){
		
		

			let time = new Date(); 
			let hour = time.getHours(); 
			let min = time.getMinutes(); 
			let sec = time.getSeconds(); 
			am_pm = "AM"; 

			if (hour > 12) { 
				hour -= 12; 
				am_pm = "PM"; 
			} 
			if (hour == 0) { 
				hr = 12; 
				am_pm = "AM"; 
			} 

			hour = hour < 10 ? "0" + hour : hour; 
			min = min < 10 ? "0" + min : min; 
			sec = sec < 10 ? "0" + sec : sec; 

			let currentTime = hour + ":" 
				+ min; 

			document.getElementById("clock").innerHTML = currentTime  + ":" + sec + am_pm; 
			document.getElementById("clock2").innerHTML = currentTime  + "<span>" + am_pm + "</span>"; 
		}, 1000);
