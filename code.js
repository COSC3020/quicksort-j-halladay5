function quicksort(array)
{
    if(array.length < 2)
    {
        return array;
    }
    /*to make quicksort iterative, you need to simulate the recursive stack.
      This array will work as the recursive stack that holds the unsorted sections hi and low 
      bounds of my array.*/ 
    var unsorted = [array.length];
    var lo = 0;
    var hi = array.length -1;
    var top = -1;
    var pivotIndex;
    unsorted[++top] = lo;
    unsorted[++top]= hi;

    //while stack has something in it, pop indexes to use for pivot function
    while(top >= 0)
    {
        hi = unsorted[top--];
        lo = unsorted[top--];

        pivotIndex = pivotSwitch(lo, hi, array);
        
        //if the pivotposition is at least at index one, this means that the section has at least two elements and can be sorted.
        if (pivotIndex > lo){
            unsorted[++top] = lo;
            unsorted[++top] = pivotIndex-1;
        }

        //if the pivot position is less than hi, then it can be sorted. 
        if(pivotIndex < hi)
        {
            unsorted[++top] = pivotIndex+1;
            unsorted[++top] = hi;
        }

    }
  return array;
}

//function based off of actual quicksort shown in slides, but instead this returns the pivot position to push onto the "stack" for a start/end index to sort.
function pivotSwitch(start, end, array)
{
    var pivot = start;
    for(var i = start+1; i <= end; i++)
    {
        if(array[start] > array[i])
        {
            let temp = array[i];
            array[i] = array[++pivot];
            array[pivot] =temp;
        }
    }
    temp = array[start];
    array[start] = array[pivot];
    array[pivot] = temp;

    return pivot;
}
