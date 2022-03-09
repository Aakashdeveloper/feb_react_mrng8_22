import React,{Fragment,Component} from 'react'
import './header.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'React App',
            keyword:'User Input here'
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Input here'})
        // passing data from child
        this.props.userInput(event.target.value)
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}

export default Header