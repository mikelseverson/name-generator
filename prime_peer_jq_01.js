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
	}
	else {
		this.sex = "Female";
	}
	this.weight = weight;
}

	$("#babyMaker").on('click', function(){
		var baby = new Person(randomNumber(1, 100), randomNumber(1, 2), randomNumber(0,300));
		$("#people").prepend("<p>" + "Age: " + baby.age + ", Sex: " + baby.sex + ", Weight: " + baby.weight + "</p>");
	});
});
