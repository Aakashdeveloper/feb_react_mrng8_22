import React from 'react';
import ReactDOM from 'react-dom';

/*
function Home(){
  return(
    <div>
      <h1>Hiii From React Old</h1>
      <h2>Hello</h2>
    </div>
  )
}*/


const Home = () => {
  return(
    <div>
      <h1>Hiii From React Old</h1>
      <h2>Hello</h2>
    </div>
  )
}

ReactDOM.render(<Home/>,document.getElementById('root'))