function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){ 
            if(arr[j] < arr[lowest]){
                lowest = j;
            }            
        }
        if(i !== lowest){
            //SWAP!
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }    
    }
    return arr;
}

console.log('Final',selectionSort([0,2,34,22,10,19,17]));
console.log('Final',selectionSort([ 25, 23, 34, 1, 2 ]));