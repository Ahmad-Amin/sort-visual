import React,{Fragment} from 'react'
import Navigation from "../components/Navigation/navigation"
import SortingVisualizer from "../components/SortingVisualizer/SortingVisualizer";

class Layout extends React.Component{

    render(){
        return(
            <Fragment>
                <Navigation></Navigation>
                <SortingVisualizer></SortingVisualizer>
            </Fragment>
        );
    }
}

export default Layout;