function bubbleSort(arr){
    let temp=0;
    let noSwaps=true;
    for(let i=arr.length; i>0;i--){
        for(let j=0; j<i-1; j++){
            console.log(arr[j],arr[j+1],arr)
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noSwaps=false;
            }
        }
        if(noSwaps)break;
    }
    return arr;
}
console.log(bubbleSort([ 5, 3, 4, 1, 2 ])) ;
console.log(bubbleSort([8,1,2,4,3,5]));