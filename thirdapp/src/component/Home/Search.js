import React,{Component} from 'react';
import './Search.css';

const url = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:'',
            restData:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            }) 
        } 
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            }) 
        } 
    }

    handleRestaurants = (event) => {
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restData:data})
        })
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
                    <select onChange={this.handleRestaurants}>
                        <option>-----Select City----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select>
                        <option>-----Select Restaurants----</option>
                        {this.renderRest(this.state.restData)}
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