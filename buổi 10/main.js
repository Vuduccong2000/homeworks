// Bài 1:
// Cách 1:
const getArray = (string, lengthArray) => {
  const arr = []
  for(let i = 0; i < lengthArray; i++ ) {
      arr.push(string)
  }
  return arr
}

//Cách 2:
const getArray = (string, lengthArray) => {
	let i = 0 
	const arr = []
	do {
		arr.push(string)
		i++
	} while(i < lengthArray)
	return arr
}

//Bài 2:
const reArr = array => {
  const newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(arr[i])
  }
  return newArr
}

//Bài 3:
const deleteArray = (array = []) => {
  const trueValues = []
  for(let i = 0; i < array.length; i++) {
    if(typeof(array[i]) == 'number' && array[i] !=0) {
      trueValues.push(array[i])
    }
  }
  return trueValues
}

//Bài 5:
function sortArr(arr = []) {
	arr.sort(function (a, b) { return a - b })
}

//Bài 6:
const checkObject = obj => {
	if (Array.isArray(obj) || typeof obj !== 'object') {
		return false
	} else {
		return true
	}
}

//Bài 7:
const getKeys = (object, arr) => {
  arr.forEach(element => {
    for (let key in object) {
      if (key === element) {
        delete(object[key])
      }
    }
  })
  return object
}

//Bài 8:
const deleArr = arr => {
  const element =  arr.splice(1,2)
  return arr
}

//Bài 9:
const students = [
	{ id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
	{ id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
	{ id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
	{ id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
	{ id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
	{ id: 6, name: 'Phí Duy Quân', score: 9.6 },
	{ id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const findStudent = students => {
	const arr = []
	students.map(student => {
		if (student.score > 5 && student.name.indexOf('Duy') !== -1) {
			arr.push('Pass')
		} else {
			arr.push('Fail')
		}
	})
	return arr
}



