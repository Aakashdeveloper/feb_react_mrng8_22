import React,{Component} from 'react';
import MenuDisplay from './menuDisplay';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';


const url = "http://zomatoajulypi.herokuapp.com/details"
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu"

class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:''
        }
    }

    render(){
        // let details = this.state.details
        let {details} = this.state
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name}/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h1>{details.restaurant_name}</h1>
                            <span id="cfeedback">253 Customers Say {details.rating_text} ({details.average_rating} Stars)</span>
                            <h4>Old Price: <strike>Rs 1000</strike></h4>
                            <h4>Offer Price: Rs {details.cost} </h4>
                            <h3>We Provide Best Service</h3>
                            <div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied"/>
                                </div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png"/>
                                </div>
                            </div>
                            <div>
                                <Tabs>
                                    <TabList>
                                        <Tab>About</Tab>
                                        <Tab>Contact</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{details.restaurant_name}</h2>
                                        <p>
                                            {details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>{details.address}</h2>
                                        <h3>Phone: {details.contact_number}</h3>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <center><h2>Menu</h2></center>
                    <MenuDisplay menudata={this.state.menuList}/>
                </div>
                
            </>
        )
    }

    // calling with async await
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${restId}`)
        let menuResponse = await axios.get(`${menuUrl}/${restId}`)
        this.setState({details:response.data[0],menuList:menuResponse.data})
    }
}

export default Details