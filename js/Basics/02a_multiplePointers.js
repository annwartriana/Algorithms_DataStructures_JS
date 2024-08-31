/*
MULTIPLE POINTERS
*/

function sumZero(array){
    let right  = array.length-1;
    let left = 0;

    while(array[left] < array[right]){
        let sum = array[left] + array[right];
        if( sum === 0){
            return [array[left], array[right]];
        }else if(sum>0){
            right--;
        }else{
            left--;
        }
    }return undefined;
}
console.log( sumZero([-3,-2,-1,0,1,2,3,5,6,7,9])); // [-3,3] 
console.log( sumZero([-2,0,1,,2,3])); // undefined
console.log( sumZero([1,2,3])); // undefined
