import React,{Component} from 'react';
import MenuDisplay from './menuDisplay'

class Details extends Component{
    constructor(props){
        super(props)

        this.state={}
    }

    render(){
        return(
            <div>
                <h1>Rest Details</h1>
                <MenuDisplay/>
            </div>
        )
    }
}

export default Details