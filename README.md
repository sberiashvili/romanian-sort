# Romanian Sort 🧑‍💻✨

## What's this? 🤔
Romanian Sort is a **badass** sorting algorithm that steals your problems and sorts them the Romanian way. It's not your average sort – it doesn’t wait for everything to be perfect before it fixes it. It’s quick, it’s dirty, and it gets the job done. We’re taking elements that are out of order, **stealing** them, sorting them on the fly, and then slapping everything back together like it’s no big deal.

## Why is this awesome? 🚀
- **Fast:** Steals the out-of-order elements and sorts them with some quick and dirty algorithms.
- **Async:** Because waiting is for the weak, and this algorithm doesn't want to keep you waiting.
- **In-place Merge:** We don't need no extra memory! We merge stuff back in place, like a pro.

## Features ✨
- **Romanian Style:** Steal the unordered elements.
- **Async Sorting:** Quicksort that works in the background.
- **Merge in Place:** We don’t waste space, we just keep merging like a champ.

## How to Use It 🔥
1. **Install it** (just kidding, it’s on GitHub, no npm install needed).
2. Copy-paste that bad boy into your project.
3. Call `romanianSort(elements)` and watch it work its magic.

### Example:

```javascript
const romanianSort = require('romanian-sort');  // Don't forget to import it!

let unsortedArray = [4, 2, 9, 3, 5, 1];
romanianSort(unsortedArray).then(sorted => {
  console.log(sorted);  // [1, 2, 3, 4, 5, 9]
});
```
Boom. Sorted. 💥

## How It Works 🤓
- **Partition:** Walks through the array and “steals” anything that’s out of order.
- **Sort the stolen part:** We’ve got a quicksort ready to go for when we steal stuff.
- **Merge everything back:** We put everything back together with some slick in-place merging.

## Wanna Contribute? 🙌
Feel free to fork this repo and make it better. If you’re into making things faster, cleaner, or more fun, we welcome all kinds of contributions – even if it’s just adding a dumb emoji or a funny comment in the code. 😎

## License 🔓
This is open source, so **do whatever the hell you want with it**. Just don’t sue me if it doesn’t work the way you expect. 😅

