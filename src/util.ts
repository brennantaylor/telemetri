const binarySearch = (items: number[], searchElement: number) => {
    let minIndex = 0;
    let maxIndex = items.length - 1;
    let currentIndex;
    let currentElement;
 
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = items[currentIndex];
 
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
 
    return -1;
}

export { binarySearch };
