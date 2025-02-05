// Romanian Sort
// Romanians are the best at stealing!
// This async algorithm uses a three-step approach:
// 1. Partition: Walk through the array, “stealing” any element that is out of order.
// 2. Sort the stolen part.
// 3. Merge the two sorted parts (honest and stolen) in place.


async function romanianSort(elements) {
    const n = elements.length;
    let stolenCount = 0; // Count of elements that have been "stolen"
    
    // === Step 1: Partition the array into a sorted “honest” prefix and a “stolen” suffix.
    // The honest part is kept in place (indices 0..n-stolenCount-1) and is already in order.
    // We assume the first element is honest.
    let lastHonestValue = getValue(elements[0]);
    let i = 1;
    while (i < n - stolenCount) {
        if (getValue(elements[i]) >= lastHonestValue) {
            // This element obeys the order—update lastHonestValue and move on.
            lastHonestValue = getValue(elements[i]);
            i++;
        } else {
            // This element is out-of-order: Romanian style, we "steal" it!
            // Swap it with the element at the end of the unsorted portion.
            await swap(i, n - stolenCount - 1);
            stolenCount++;
            // Do not increment i: the new element at position i must be checked.
        }
    }
    // At this point:
    // - The "honest" sorted part is at indices [0, n - stolenCount - 1].
    // - The "stolen" part is at indices [n - stolenCount, n - 1].
    
    // === Step 2: Sort the stolen part.
    if (stolenCount > 0) {
        await sortStolen(elements, n - stolenCount, n - 1);
    }
    
    // === Step 3: Merge the two sorted subarrays (honest and stolen) in place.
    await mergeInPlace(elements, 0, n - stolenCount - 1, n - 1);
}

// ---------
// Sorting the stolen part
// ---------

async function sortStolen(elements, low, high) {
    if (low < high) {
        const pivotIndex = await partition(elements, low, high);
        await sortStolen(elements, low, pivotIndex - 1);
        await sortStolen(elements, pivotIndex + 1, high);
    }
}

async function partition(elements, low, high) {
    const pivot = getValue(elements[high]);
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (getValue(elements[j]) <= pivot) {
            i++;
            await swap(i, j);
        }
    }
    await swap(i + 1, high);
    return i + 1;
}

// ---------
// In-Place Merge
// ---------
// Merge two contiguous sorted subarrays:
//   left part: indices [start, mid]
//   right part: indices [mid+1, end]
// We use a simple insertion-style merge (efficient when the right part is small).
async function mergeInPlace(elements, start, mid, end) {
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
        // If element at i is already in order relative to element at j, move i.
        if (getValue(elements[i]) <= getValue(elements[j])) {
            i++;
        } else {
            // Element at j is smaller and must be inserted at position i.
            // Save the index of the smaller element.
            let tempIndex = j;
            // Swap it leftwards until it reaches index i.
            while (tempIndex > i) {
                await swap(tempIndex, tempIndex - 1);
                tempIndex--;
            }
            // Now the inserted element is at i.
            i++;
            mid++; // The honest block has grown.
            j++;   // And the right block shrinks.
        }
    }
}
