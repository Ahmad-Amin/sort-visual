export function bubbleSort(array){

    const animations = [];
    doBubbleSort(array,animations);

    return animations;
    
}
function doBubbleSort(array,animations){
    
    for(let i=0;i<array.length;i++){
          
        let valueToCompare = 0;
        // console.log(i);
        const animation = {};
        for(let j=0;j<array.length-i;j++){

            // animation['compare'] = [valueToCompare , j];
            // console.log("COMPARE-> "+animation.compare);            

            if(array[valueToCompare] > array[j]){
                let temp = array[valueToCompare];
                array[valueToCompare] = array[j];
                array[j] = temp;
                animation.swap = [valueToCompare, j];
                animations.push(animation.swap);

                // console.log("SWAP-> " +animation.swap);
                valueToCompare++;

            }else if(array[valueToCompare] < array[j]){
                valueToCompare = j;
                // console.log("valueToCompare: "+valueToCompare);
                animation.swap = [valueToCompare, j];
                animations.push(animation.swap);
                // console.log("SWAP-> (Less Than): "+animation.swap);
            }

            // console.log(animation.compare);
            // console.log(animation.swap);
            // console.log(animation);


            // console.log(array);

            // console.log(animation);
            // console.log("Compare Animation" +animation.compare);
            // console.log("Swap Animation: "+animation.swap);

            // console.log(animations);

            // console.log(array);
            // if(valueToCompare !== j){
            //     animations.push({
            //         compare : [valueToCompare, j],
            //         swap: [valueToCompare, j]
            //     })
            // }
         
            // console.log(array);
        }
        // console.log(animations);

        

        
    }

}