function bubblesort(array) {
    let temp;
    let n = array.length;
    let was_swapped = true;
    while (was_swapped) {
        was_swapped = false;
        for (var i = 0; i <= n - 1; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                was_swapped = true;
            }
        }
        n = n - 1;
    }
    return array;
}