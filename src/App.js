import React from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "I'm sleeping in the bath tub.",
      character: "Marge Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    }
  }


  getNewQuote = () => {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
      this.setState({
        quote: data[0].quote,
        character: data[0].character,
        image: data[0].image,
      });
    });
  }
  

  render(){
    
    return(
      <div className="App" >
        <QuoteCard simpsonChar={this.state}/>
        <button type="button" onClick={this.getNewQuote}>Get a new quote!</button>
      </div>
    )
  }
}


export default App;
