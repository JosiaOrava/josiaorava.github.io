var generateBtn = document.getElementById("newArrayBtn");
var sortBtn = document.getElementById("sortBtn");
sortingArray = [];
generateBtn.onclick = function(){
    newArray();
}
sortBtn.onclick = function(array){
    var sortedArray = quickSort(sortingArray, 0, sortingArray.length -1);
    removeElementsByClass("arrChildNew");
    for(i in sortedArray){
        var y = document.createElement("div");
        y.className = "arrChildNew"
        var calcHeight = sortingArray[i] * 5 + "px";
        y.style.height = calcHeight;
        y.innerHTML = sortingArray[i];
        document.getElementById("arrChild").appendChild(y);
    }
}
function newArray(){
    
    removeElementsByClass("arrChildNew");
    sortingArray = [];
    
    for(i=0; i<100; i++){
        sortingArray.push(getRandomInt(5, 150));
        console.log(sortingArray[i]);
    }
    
    //const map = sortingArray.map(x => x);
    //console.log(map);
    for(i in sortingArray){
        var y = document.createElement("div");
        y.className = "arrChildNew"
        var calcHeight = sortingArray[i] * 5 + "px";
        y.style.height = calcHeight;
        y.innerHTML = sortingArray[i];
        document.getElementById("arrChild").appendChild(y);
    }

}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Added Math.floor to round numbers to int
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  