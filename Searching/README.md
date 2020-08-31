# SEARCHING

## Searching Algorithms

1. Linear Search
2. Binary Search

## LINEAR SEARCH

Works on both sorted and unsorted arrays.

### Pseudocode

* Write a function that accepts and array and the element you want to find.
* Loop through the entire array and check if the current array element is equal to the value.
* If it is, then return the index at which the element is found.
* If the value is not found then return -1

### Time complexity (BIG 0) of linear search.

> - Best Case     = O(1)
> - Average Case  = O(n)
> - Worst Case    = O(n)


## BINARY SEARCH

Much faster than linear search
Rather than eliminating one element at a time, you can eliminate half of the elements in the array at a time.
**NB**: Only works on ***SORTED DATA !!!***

Uses the *Divide and Conquer* approach. That is, it only works on portions of the dataset instead of iterating over the whole dataset.

### Pseudocode

- Write a function that accepts a ***sorted array*** and the element you want to find.
- Create a *start pointer* that indexes the beginning of the array.
- Create an *end pointer* that indexes the end of the array.
- Create a *mid pointer* that indexes the middles of the array. Round down the average of the start pointer and end pointer.
- While the start pointer comes before the end pointer.
    - If the the mid pointer is the the element you are looking for then return the index of the mid pointer
    - If the value of the mid pointer is less than the value of the element you are looking for then move the start pointer to the index of the mid pointer + 1 while the end pointer stays intact 
    - If the value of the mid pointer is more than the value of the element you are looking for then move the end pointer to the index of the mid pointer - 1 while the start pointer stays intact
    - Update the mid pointer.
- Return the mid pointer.
- If the value is never found then return -1

### Time complexity (BIG(O)) of binary search.

> - Best Case     = O(1)
> - Average Case  = O(log n)
> - Worst Case    = O(1)



# Directory Structure.

```
.
├── binary_search
│   ├── binary_search.js
│   └── binary_search.py
├── linear_search
│   ├── linear_search.js
│   └── linear_search.py
└── README.md

2 directories, 5 files

```
