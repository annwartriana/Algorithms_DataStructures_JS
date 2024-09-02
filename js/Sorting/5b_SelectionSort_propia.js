function selectionSort(arr){   
    for (let i = 0; i < arr.length-1; i++) {
    let temp=arr[i];
    let minimum=arr[i];
    let indexTemp=i;
        for (let j = i+1; j < arr.length-1; j++) {
            if(arr[j+1]<arr[j]){
                minimum=arr[j+1]
                indexTemp=j+1;
            }
        } 
        if(temp!==minimum){
            arr[i]=minimum;
            arr[indexTemp]=temp;
        }        
    }
    return arr;
}

console.log('Final',selectionSort([ 5, 3, 4, 1, 2 ]));
console.log('Final',selectionSort([ 25, 23, 34, 1, 2 ]));