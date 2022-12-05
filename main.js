/**Function to clear terminal when called. */
const clear = () => {
  process.stdout.write("\x1Bc");
};

clear();

const sourceJSON = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

//Json convert
const regularJS = JSON.parse(sourceJSON) ;
console.log(regularJS) ;

//First Function
function getData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj.data)
  })
}

let getDataVariable = await getData(regularJS) ;
console.log(getDataVariable);

//Second Func
function sortData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj.sort((a, b) => a - b))
  })
}

let sortDataVariable = await sortData(getDataVariable) ;
console.log(sortDataVariable);

//Third Func
function sumData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj.reduce((a, b) => a + b))
  })
}

let sumDataVariable = await sumData(sortDataVariable) ;
console.log(sumDataVariable);

//Forth Function 
function checkData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj % 2 === 0)
  })
}

let checkDataVariable = await checkData(sumDataVariable) ;
console.log(checkDataVariable);

//All in one Function
async function all() {
  let getDataVariable = await getData(regularJS) ;
  let sortDataVariable = await sortData(getDataVariable) ;
  let sumDataVariable = await sumData(sortDataVariable) ;
  let checkDataVariable = await checkData(sumDataVariable) ;

  return new Promise((resolve, reject) => {
    resolve(checkDataVariable)
  })
}

console.log(await all());
// ----------------------------------------------------------------------------------

//DATA CLASS
class Data {
  static async process(arr) {
    return new Promise(async (resolve, reject) => {
      let getDataVariable = await getData(arr) ;
      let sortDataVariable = await sortData(getDataVariable) ;
      let sumDataVariable = await sumData(sortDataVariable) ;
      let checkDataVariable = await checkData(sumDataVariable) ;

      resolve(checkDataVariable)
    })
  }

  //Extracting Odd Numbers
  static getOdd(arr) {
    return new Promise(async (resolve, reject) => {
      let getDataVariable = await getData(arr) ;
      let sortDataVariable = await sortData(getDataVariable) ;

      resolve(sortDataVariable.filter((num) => num % 2 === 0))
    })
  }

  //Extracting Even Numbers
  static getEven(arr) {
    return new Promise(async (resolve, reject) => {
      let getDataVariable = await getData(arr) ;
      let sortDataVariable = await sortData(getDataVariable) ;

      resolve(sortDataVariable.filter((num) => num % 2 === 1))
    })
  }

  //Returning the array with greatest value
  static getBiggestSumArray(arrO, arrE) {

    //Sum of each array
    let sumO = arrO.reduce((a,b) => a + b) ;
    let sumE = arrE.reduce((a,b) => a + b) ;

    console.log("Odd Number Sum: " + sumO) ;
    console.log("Even Number Sum: " + sumE) ;

    //Sum condition
    if(sumO > sumE) {
      return arrO
    } else if (sumE > sumO) {
      return arrE
    } else {
      return arrO + arrE
    }
  }
}


let oddArray = await Data.getOdd(regularJS);
let evenArray = await Data.getEven(regularJS);
let getBArray = await Data.getBiggestSumArray(oddArray, evenArray);

console.log(getBArray)