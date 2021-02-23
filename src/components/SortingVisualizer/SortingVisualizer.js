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
        for (let i = 0; i < 150; i++) {
            arrayGiven.push(randomIntFromInterval(5,730));
        }    
        this.setState({arrayToSort: arrayGiven});
    }


    BubbleSort(){
        const arrayToTest=[10,9,11,6,15,2];
        const animations = SortingAlgos.bubbleSort(this.state.arrayToSort);
        // console.log(animations);
        const arrayBars = document.getElementsByClassName('arrayBar');
        
        // const newAnimations=[];
        // for(const animation of animations){
        //     newAnimations.push(animation.compare);
        //     newAnimations.push(animation.compare);
        //     newAnimations.push(animation.swap);
        // }

        for(let i = 0; i<animations.length;i++){
            // console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('arrayBar');
            const [barOneId, barTwoId] = animations[i];

            const barOneStyle = arrayBars[barOneId].style;
            const barTwoStyle = arrayBars[barTwoId].style;

            setTimeout(()=>{
                const tempHeight = barOneStyle.height;
                barOneStyle.height = barTwoStyle.height;
                barTwoStyle.height = tempHeight;
            }, i*10);

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
                
            </Fragment>
        );
    }
}

function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}

export default SortingVisualizer;

