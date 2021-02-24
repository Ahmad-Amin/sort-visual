import React,{Component, Fragment} from 'react';
import './SortingVisualizer.css';
import * as SortingAlgos from '../../Algorithms/Algorithms';

class SortingVisualizer extends Component{

    state={
        arrayToSort:[]
    }
    
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const arrayGiven=[];
        for (let i = 0; i < 500; i++) {
            arrayGiven.push(randomIntFromInterval(5,700));
        }    
        this.setState({arrayToSort: arrayGiven});
    }


    BubbleSort(){
        const animations = SortingAlgos.bubbleSort(this.state.arrayToSort);
        const arrayBars = document.getElementsByClassName('arrayBar');            

        for(let i = 0; i<animations.length;i++){

            setTimeout(()=>{
                const [barOneId, barTwoId] = animations[i];
                // const tempHeight = arrayBars[barOneId].style.height;

                const barOneHeight = arrayBars[barOneId].style.height;
                const barTwoHeight = arrayBars[barTwoId].style.height;
                
                arrayBars[barOneId].style.height = barTwoHeight;
                arrayBars[barTwoId].style.height = barOneHeight;

            }, i*1);

        }

    }

    MergeSort(){
        // const a = [2,4,1,6,8,5,3,7];
        const animationsMergeSort = SortingAlgos.mergeSort(this.state.arrayToSort);
        const arrayBars = document.getElementsByClassName('arrayBar'); 

        // console.log(arrayBars);
        console.log(animationsMergeSort);
        for(let i = 0; i<animationsMergeSort.length;i++){

            setTimeout(()=>{
                const [barOneId, newHeight] = animationsMergeSort[i];
                const barOneStyle = arrayBars[barOneId].style;

                barOneStyle.height = `${newHeight}px`;

            }, i*5);

        }
    }

    render(){

        const {arrayToSort} = this.state;
        return(
            <Fragment>
                <div className="container">
                {arrayToSort.map((value,idValue) => {
                    return(
                        <div className="arrayBar" 
                            style={{
                                    width: `calc(100% / ${arrayToSort.length})`,
                                    height: `${value}px`,
                                }} 
                            key={idValue}
                            // id={value}
                            >
                            <p style={{display: 'none'}}>{value}</p>
                            
                        </div>  
                        
                    );
                })}
                </div>
                <button onClick={()=> this.resetArray()}>Generate New Array</button>
                <button onClick={()=>this.BubbleSort()}>Bubble Sort</button>
                <button onClick={()=>this.MergeSort()}>Merge Sort</button>
                
            </Fragment>
        );
    }
}

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

export default SortingVisualizer;

