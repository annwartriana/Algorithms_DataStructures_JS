function quickSort(arr) {
    // Caso base: si la lista tiene 0 o 1 elementos, ya está ordenada
    if (arr.length <= 1) {
        return arr;
    }

    // Elegir el pivote (aquí usamos el último elemento)
    let pivot = arr[arr.length - 1];
    
    // Crear dos sublistas para los elementos menores y mayores que el pivote
    let left = [];
    let right = [];

    // Recorrer el array (excepto el pivote) y dividir en left y right
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);  // Elementos menores al pivote
        } else {
            right.push(arr[i]); // Elementos mayores o iguales al pivote
        }
    }

    // Ordenar recursivamente las sublistas y combinarlas con el pivote
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Ejemplo de uso:
let arr = [9, 3, 7, 6, 2, 8, 5];
let sortedArr = quickSort(arr);
console.log(sortedArr); // Salida: [2, 3, 5, 6, 7, 8, 9]
