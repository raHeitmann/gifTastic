$(document).ready(function()
{
	console.log("ready!");



var creatures = ["shark","octopus","whale","starfish","manta ray","eel","clownfish",
				"dolphin","squid","sea turtle"];

for (var i = 0; i < creatures.length; i++) 
	{
		console.log(i);
		var r = $("<input type='button' class='buttons' value='"+creatures[i]+"'>");

		$('#buttons').append(r);
	}


// function add(q)
// 	{
// 	//q = $('#input').val().trim(); // search query
	
// 	request = new XMLHttpRequest;
// 	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
// 	data = JSON.parse(request.responseText).data.image_url;
// 			console.log(data);
// 			$("#gifs").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');


// 	}




// $(document.body).on("click", ".buttons", function() {

//       // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
//       var value = $(this).attr("value");
//       add(value);
//       // Select and Remove the specific <p> element that previously held the to do item number.
     
//     });

$(".buttons").on("click", function () {
	q = "finger guns"; // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
});






});