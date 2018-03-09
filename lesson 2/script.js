// Задача 1(2)

svar str1 = inputString("Input string:")
var str2 = inputString("Input string:")

isAnagrams(str1, str2)


function inputString(message) {
	var str  = prompt(message)
	return str
}

function isAnagrams(str1, str2) {
	if (str1.length != str2.length && str1.length == 0) {
		return false
	}

	var sorted1 = strToSortedStr(str1)
	var sorted2 = strToSortedStr(str2)
	var isAnagrams = true

	for (var i = 0; i < sorted1.length; i++) {
		if (sorted1[i] != sorted2[i]) {
			isAnagrams = false
			break
		}
	}

	alert(isAnagrams)
}

function strToSortedStr(str) {
	var arr = Array(str.length)

	for (var i = 0; i < str.length; i++) {
		arr[i] = str[i]
	}

	return arr.sort().join("")
}


// Задача 2(6)

var arr = fillArr()

var counter = 0, sum = 0

for (var i = 0; i < arr.length; i++) {
	var num = arr[i]
	var div = num / 3
	if (div == Math.trunc(div) & num >= 3) {
		counter++
		sum += num
	}
}

alert(counter + " elements. Sum is " + sum)

function fillArr() {
	var arr = Array()
	var counter = 0, exit = true 
	do {
		var inputVar = prompt("Input number to push into array or other symbol to exit:")
		if (!isNaN(Number(inputVar))) {
			arr[counter] =  Number(inputVar)
			counter++
		} else {
			exit = false
		}

		console.log(arr)
	} while (exit)

	return arr
}





