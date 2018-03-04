//Задача 1

var str = prompt("Input string with brackets")
var strLength = str.length

var openBracket = 0, closeBracket = 0
var result = true

for (var i = 0; i < strLength; ++i) {
	openBracket += str[i] == "("
	closeBracket += str[i] == ")"

	if (closeBracket > openBracket) {
		result = false
		break
	}
}

result = openBracket == closeBracket

alert(result)



// Задача 2 - В процессе 
/*
var x = input("Input point's 'x' value:")
var n = input("Input accuracity 'n':")



function input(str) {
	var num = 0
	var correct = true

	do {
		num = Number(prompt("str"))
		console.log(num)
		correct = !Number.isNaN(num)

		if (!correct) {
			alert("It's not a number, try again.")
		}
	} while (!correct)

	return num
}

*/



// Задача 3

var num1 = inputNumber()
var sym =  inputSymbol()
var num2 = inputNumber()

alert(count(num1, num2, sym))


function inputNumber() {
	var num = 0
	var correct = true

	do {
		num = Number(prompt("Input number:"))
		console.log(num)
		correct = !Number.isNaN(num)

		if (!correct) {
			alert("It's not a number, try again.")
		}
	} while (!correct)

	return num
}

function inputSymbol() {
	var sym = ""
	var correct = true

	do {
		sym = prompt("Input arithmetical symbol:")

		switch (sym) {
			case '+':
			case '-':
			case '/':
			case '*':
			correct = true
			break

			default:
			correct = false
			alert("It's not arithmetical symbol. Try again.");
			break
		}

	} while (!correct)

	return sym
}

function count(a, b, operation) {
	var result
	console.log(a, operation, b)
	switch (operation) {
		case '+':
		return a + b

		case '-':
		return a - b

		case '*':
		return a * b

		case '/':
		return a / b
	}
}




