const numbers = [1,2,3,4,5,6,7,8,9];
const names = ['Serena', 'Ami', 'Rei'];

for (lets i=0; i<numbers.lenght; i++){
	if(i==1){
		break;
	}
		console.log(names[i]);
}

0 == '0'
0 === '0'

function logItems(item,index,arregloOriginal){
  console.log(`Name ${item} at index: ${index}`);
  console.log(arregloOriginal);
}

const myFunction=function(name){
  console.log('oliii'+name)
}
//Arrow definition
const sum = (a,b) => {
  const value = a+b;
  return value;
}

//Arrow implict return
const resta =  (a,b) => a-b; //arrow function para retornar solo un valor

const fullNames = [];
const output names.forEach(item => fullNames.push(item + 'Rodriguez' ));
console.log(output);

const output2 = names.map(item => item='Rodriguez'):
console.log(output2);

names.forEach(item=> console.log(item));