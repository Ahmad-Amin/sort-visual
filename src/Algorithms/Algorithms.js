export function bubbleSort(array){

    const animations = [];
    doBubbleSort(array,animations);

    return animations;
    
}


function doBubbleSort(array,animations){
    
    for(let i=0;i<array.length;i++){
          
        let valueToCompare = 0;

        const animation = {};
        for(let j=0;j<array.length-i;j++){


            if(array[valueToCompare] > array[j]){
                let temp = array[valueToCompare];
                array[valueToCompare] = array[j];
                array[j] = temp;
                animation.swap = [valueToCompare, j];
                animations.push(animation.swap);

                valueToCompare++;

            }else if(array[valueToCompare] <= array[j]){
                valueToCompare = j;

                animation.swap = [valueToCompare, j];
                animations.push(animation.swap);

            }

        }
        
    }

}

export function mergeSort(array){

    const animationsMerge = [];
    if(array.length <= 1){
        return array;
    }
    const auxillaryArray = array.slice();
    doMergeSort(array,0,array.length-1,animationsMerge,auxillaryArray);
    return animationsMerge;

}

function Merge(mainArray, startIndex, midIndex, endIndex, animationsMerge, auxillaryArray){

    let i=startIndex;
    let k=startIndex;
    let j=midIndex+1;

    const animation = {};
    while(i <= midIndex && j<= endIndex){
        const animation={};
        if(auxillaryArray[i] <= auxillaryArray[j]){
            animation.swap = [k , auxillaryArray[i]];
            mainArray[k++] = auxillaryArray[i++];
        }else{
            animation.swap = [k , auxillaryArray[j]];
            mainArray[k++] = auxillaryArray[j++];
        }
        animationsMerge.push(animation.swap);
    }

    while(i <= midIndex){
        animation.swap = [k,auxillaryArray[i]];
        animationsMerge.push(animation.swap);
        mainArray[k++] = auxillaryArray[i++];
    }

    while(j <= endIndex){
        animation.swap = [k,auxillaryArray[j]];
        animationsMerge.push(animation.swap);
        mainArray[k++] = auxillaryArray[j++];
    }

}


function doMergeSort(mainArray, startIndex, endIndex, animationsMerge, auxillaryArray){

    if(startIndex === endIndex) return;

    // console.log("array-length: "+arrayLength);
    let midIndex = Math.floor((startIndex + endIndex)/2);

    doMergeSort(auxillaryArray, startIndex, midIndex, animationsMerge, mainArray);
    doMergeSort(auxillaryArray,midIndex+1, endIndex,animationsMerge,mainArray);
    Merge(mainArray, startIndex, midIndex, endIndex, animationsMerge, auxillaryArray);


}

