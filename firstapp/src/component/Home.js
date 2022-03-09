import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import ProductDisplay from './ProductDisplay'

class Home extends Component {

    constructor(props){
      super(props);
      
      this.state={
        productData:JSON,
        filteredData:JSON
      }
    }

    filterProduct = (keyword) => {
      let output = this.state.productData.filter((data) => {
        return (data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
      })

      this.setState({filteredData:output})
      

    }

    render(){
      console.log(">>>>>",this.state.productData)
      return(
        <>
          {/* receiving the data */}
          <Header userInput={(data) => {this.filterProduct(data)}}/>
          <ProductDisplay prodData={this.state.filteredData}/>
          <Footer year="2022" month="March"/>
        </>
      )
    }

}

export default Home