var s = 115, p = 97.3

generateAndSortArray()

function randomNumber(maxMinusMin, min) {
	
	return Math.random() * maxMinusMin + min
}

function generateAndSortArray() {
	var arr = Array()
	var maxMinusMin = (2 * p * s / 100), min = s - p*s/100

	for (var i = 0; i < 1000; i++) {
		arr[i] = randomNumber(maxMinusMin, min)
	}

	console.log(arr)

	arr.sort(function(a,b){
		return (a%10) - (b%10)
	})

	console.log(arr)
}
