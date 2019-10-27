import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      A: "A"
    }
  }

  render(){
    return(
      <div>
        <p>{this.state.A}</p>
      </div>
    )
  }
}

export default App;