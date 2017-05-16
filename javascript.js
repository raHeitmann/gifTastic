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


function add()
	{
	q = $('#input').val().trim(); // search query
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
	data = JSON.parse(request.responseText).data.image_url;
			console.log(data);
			$("#gifs").html('<center><img src = "'+data+'"  title="GIF via Giphy"></center>');


	}

});