var mNames = ["Jim", "Mikel", "Josh", "Suren", "PR", "Matt", "Brandon", "Bob", "Eric", "Huck"];
var fNames = ["Cat", "Cena", "Corina", "Lisa", "Maria", "Sarah", "Skyler", "Cassey"];
var lNames = ["Peters", "Hicks", "Mayo", "Brock", "Stafki", "Daniels", ];

$(document).ready(function() {


//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function Person(age, sex, weight) {
	this.age = age;
	if(sex == 1) {
		this.sex = "Male";
		this.name1 = mNames[randomNumber(0, mNames.length-1)] + " " + lNames[randomNumber(0, lNames.length-1)];
	}
	else {
		this.sex = "Female";
		this.name1 = fNames[randomNumber(0, fNames.length-1)] + " " + lNames[randomNumber(0, lNames.length-1)];
	}
	this.weight = weight;
}

	$("#babyMaker").on('click', function(){
		var baby = new Person(randomNumber(1, 100), randomNumber(1, 2), randomNumber(0,300));
		$("#peopleNames").append("<p>" + baby.name1 + "</p>");
		$("#peopleAge").append("<p>" + baby.age + " yrs.</p>");
		$("#peopleSex").append("<p>" + baby.sex + "</p>");
		$("#peopleWeight").append("<p>" + baby.weight + " lbs.</p>");
	console.log(baby.name1);
	});
});



