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

var clickable = [];

$(document).on("click", "#submitBtn",function()
{
	var input = $("#input").val();
	console.log(input);
	var s = $("<input type='button' class='buttons' value='"+input+"'>");
	$('#buttons').append(s);
	$("#input").val("");

});


$(document).on("click", ".playing", function()
{

	//changes it back to still and its class back to giffyGifs

		$(this).attr("class","giffyGifs");
					var something = $(this).attr("src");
					console.log(something+"something");
					var word = "";
					console.log(word);
					word = something.toString();

					var newWord = word.split("");

					newWord.splice((newWord.length-4),0,"_s");
					var lol = "";
					for (var k = 0; k < newWord.length; k++)
					{
						lol+=(newWord[k]);

					}


					console.log(lol+" lol");

					console.log($(this));

					

					$(this).attr("src", lol);



});




$(document).on("click", ".giffyGifs", function()
{

		//when clicked, the gif starts and its class changes to "playing"
					$(this).attr("class","playing");
					var something = $(this).attr("src");
					console.log(something+"something");
					var word = "";
					console.log(word);
					word = something.toString();

					var newWord = word.split("");

					newWord.splice((newWord.length-6),2);
					var lol = "";
					for (var k = 0; k < newWord.length; k++)
					{
						lol+=(newWord[k]);

					}


					console.log(lol+" lol");

					console.log($(this));

					

					$(this).attr("src", lol);
			});


$(document).on("click", ".buttons", function () 
	{

		clickable = [""];

		$("#giphyme").html("");

	
		
	var a = this.value;
	q = a; // search query
	
	console.log(q);
	
	request = new XMLHttpRequest;
	request.open('GET', 'http://api.giphy.com/v1/gifs/search?q='+q+'&limit=10&api_key=dc6zaTOxFJmzC', true);
	


	request.onload = function() {
		if (request.status >= 200 && request.status < 400){


			
			for (var j=0;j<10;j++)
			{
			var data = (JSON.parse(request.responseText).data[j].images.fixed_height_still.url);
			clickable.push((JSON.parse(request.responseText).data[j].images.fixed_height.url));
			var rating = (JSON.parse(request.responseText).data[j].rating);
			console.log(rating);
			console.log(data);
			var duh = $('<span id="pics"><center><img src = "'+data+'" class = "giffyGifs" id = "'+j+'" title="GIF via Giphy"><p id="rate">Rating: '+rating+'</p></center></span>');
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

//end of button click function








});