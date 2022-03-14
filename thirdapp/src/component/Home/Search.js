import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location"

class Search extends Component {
    constructor(props){
        super(props)

        this.state={
            location:'',
            restData:''
        }
    }

    render(){
        console.log(">>>this.state>>>",this.state.location)
        return(
            <div id="search">
                <div className="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select>
                        <option>-----Select City----</option>
                    </select>
                    <select>
                        <option>-----Select Restaurants----</option>
                    </select>
                </div>
            </div>
        )
    }

    //api calling on page load 
    componentDidMount(){
        // console.log("inside componentDidMount ")
        fetch(url, {method: 'GET'})
        // return promise
        .then((res) => res.json())
        // return data
        .then((data) => {
            //console.log(data) // set data in state
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search