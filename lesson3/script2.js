var names = ["Alex", "John", "Paul", "Mathew", "Jane", "Chris"]

let people = generatePeople()
people.forEach(function(elem) {
	elem.sayHi()
})


function generatePeople() {
	var objects = Array()
	for (var i = 0; i < 100; i++) {
		var human = {
			name: randomName()
			,age: randomAge()
		}

		var say = function() {
			var greeting = String("Hey, my name is " + this.name + ". I'm " + this.age + " years old.")
			console.log(greeting)
		}

		human.sayHi = say

		objects[i] = human
	}

	return objects
}




function randomName() {
	var index = Math.floor(Math.random() * names.length)
	return names[index]
}

function randomAge() {
	 return Math.floor(Math.random() * 100)
}