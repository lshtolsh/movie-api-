import React from "react";
class App extends React.Component{
  state = {
    isLoading:true,
    movies: [],
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false});
    }, 3000);
  }
  
  render(){
    const {isLoading} = this.state;
    return(
      <div>{isLoading ? 'LOADING...' : '3번방으로 와'}</div>
    )
  }
}

export default App;
