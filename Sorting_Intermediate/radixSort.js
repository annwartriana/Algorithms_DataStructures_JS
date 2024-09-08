// Función auxiliar para obtener el dígito en la posición especificada
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Función para obtener el número de dígitos en un número
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Función para obtener el número con más dígitos en una lista
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

// Función principal de Radix Sort
function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    
    for (let k = 0; k < maxDigitCount; k++) {
        // Crear 10 cubetas (0-9) para cada dígito
        let digitBuckets = Array.from({ length: 10 }, () => []);
        
        // Colocar los números en las cubetas según su dígito actual
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        
        // Aplanar las cubetas en un solo array
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

// Ejemplo de uso
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
let sortedArr = radixSort(arr);
console.log(sortedArr); // Salida: [2, 24, 45, 66, 75, 90, 170, 802]