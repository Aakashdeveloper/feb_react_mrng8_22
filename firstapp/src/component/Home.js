import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import ProductDisplay from './ProductDisplay'

class Home extends Component {

    constructor(props){
      super(props);
      
      this.state={
        productData:JSON
      }
    }

    render(){
      console.log(">>>>>",this.state.productData)
      return(
        <>
          <Header/>
          <ProductDisplay prodData={this.state.productData}/>
          <Footer year="2022" month="March"/>
        </>
      )
    }

}

export default Home