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



$(document).on("click", "#submitBtn",function()
{
	var input = $("#input").val();
	console.log(input);
	var s = $("<input type='button' class='buttons' value='"+input+"'>");
	$('#buttons').append(s);
	$("#input").val("");

});


$(document).on("click", ".buttons", function () 
	{

		$("#giphyme").html("");

	
		
	var a = this.value;
	q = a; // search query
	
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q='+q+'&limit=10&api_key=dc6zaTOxFJmzC', true);
	


	request.onload = function() {
		if (request.status >= 200 && request.status < 400){

			
			for (j=0;j<10;j++)
			{
			var data = (JSON.parse(request.responseText).data[j].images.original_still.url);
			
			console.log(data);
			var duh = $('<span><center><img src = "'+data+'"  title="GIF via Giphy"></center></span>');
			$("#giphyme").append(duh);
			}

		
	
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