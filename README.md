[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

For my implementation, 
Initialize variables, stack, and set up for iteration = constant time.
Checking for base case and returning = constant time.

While loop - this while loop runs unil the stack containing the sections of the array needing to be sorted is empty. It splits the sections down into two pieces every time. 
In the worst case, the array passed to the function is already sorted in ascending order. The pivot positions don't move from their starting position in the beginning because they are the smallest
element in the section, and every element greater than it is already to the left of it. When the pivotPosition function returns the index, the first if statement will always be ignored because the pivot
position is already the lowest index. So instead of being split into two sections, the section is shortened by 1. The while loop will iterate n-1 times in this worst case.

The program will also compare each element to the pivot position with a for loop that iterates n-1 times. The for loop is inside the while loop, so the time complexity for this is (n-1) x (n-1).
This would give us $\ n^2 $ when disregarding constant time. So the time complexity for this implementation would be $\Theta(n^2)\$. 
