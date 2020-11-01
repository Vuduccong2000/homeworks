// Exercise 1:
const compareArray = (array1, array2) => {
  return array1.every((value,index) => value === array2[index])
}

// Exercise 2:
const isEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length && compareArray(arr1, arr2)) {
    return true
  } else {
    return false
  }
}

// Exercise 3:
const chunkArray = (array, n) => {
  const newArray = []
  while (array.length) {
    newArray.push(array.splice(0, n))
  }
  return newArray
}

// Exercise 5:
const getDates = (date) => {
  const time = 'Oct 30, 2020 12:30:32'
  if (Date.parse(date) <= Date.parse(time)) {
    return true
  } else return false
}

// Exercise 6:
const regexEmail = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm
const getEmail = (email) => {
  return regexEmail.test(email)
}

const regexUserName = /^[a-zA-Z_]{1}[\w_]+/
const getUserName = (useName) => {
  if (userName.length <=10 && userName.indexOf('__') === -1) {
    return regexUserName.test(userName)
  }
  return false;
}
