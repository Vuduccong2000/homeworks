function getMultiplication() {
    for(let i = 0; i < 10; i++) {
        console.log(6 * i)
    }
}

// Bài 1
const printMultiplication = number => {
    for(let i = 0; i < 10; i++) {
        console.log(6 * i)
    }
}

// Bài 2
const printEvenNumbers = number => {
    if (number >= 1 && number <= 30) {
        for(let i = 1; i <= number; i++) {
            if (i % 2 === 0) console.log(i)
    } 
    } else console.log('n chỉ nhận giá trị từ 1 đến 30')
}

// Bài 3
const getSum = number => {
    let sum = 0
    if (number >= 1 && number <= 30) {
        for(let i = 1; i <= number; i++) {
             sum += i
    } console.log(sum)
    } else console.log('n chỉ nhận giá trị từ 1 đến 30')
}

// Bài 4
const getFactorial = number => {
    let factorial = 1
    if (number >= 1 && number <= 30) {
        for(let i = 1; i <= number; i++) {
            factorial *= i
    } console.log(factorial)
    } else console.log('n chỉ nhận giá trị từ 1 đến 30')
}

// Bài 5
const countEvenNumbers = array => {
    let count = 0
    for (let i = 0; i < array.length ; i++) {
      if (array[i] % 2 === 0) {
        count += 1
      }
    } return count
} 

//Bài 6
const getUniqArray = array => {
    const uniqArr = [] 
    for (let i = 0; i < array.length; i++) {
      if (uniqArr.indexOf(array[i]) === -1) {
        uniqArr.push(array[i])
      }
    }
    return uniqArr;
}

//Bài 7
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]
const getStudents = (studentNames, studentScores) => {
    const student = []
    studentNames.forEach(studentName => {
      studentScores.forEach(studentScore => {
        if (studentName.id === studentScore.id) {
          studentName.score = studentScore.score
          student.push(studentName)
        }
      })
    })
    return console.log(student)
}

//Bài 8
