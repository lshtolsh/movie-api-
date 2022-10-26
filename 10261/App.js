import React from "react";
class App extends React.Component{//상속을 받는것
  constructor(props){
    super(props); 
    console.log('현욱쌤 잘생겼다');//1번째로 실행
  };

  componentDidMount(){
    console.log("김치");//3번째로 실행
  }

  componentDidUpdate(){
    console.log("문재인");//3번째로 실행(버튼누를때만실행)
  }

  state = {
    count: 0,
  };//클래스 내에 state{}; 식으로 만듬

  add = () => {
    console.log('add');
    this.setState(current =>({count:current.count +1}));//setState = state 의 정보를 건들 수 있음,(state 의 count 변경)
  };

  minus = () => {
    console.log('minus');
    this.setState({count:this.state.count -1});
  };

  reset = () => {
    console.log('reset');
    this.setState({count:0});
  }

  render(){//return 처럼 써먹음
    console.log('현욱쌤 못생겼다');//2번째로 실행
    return (
    <div>
      <h1> 집보내줘.. x {this.state.count} </h1>
      <button onClick={this.add}> Add </button>
      <button onClick={this.minus}> Minus </button>
      <button onClick={this.reset}>reset</button>
    </div>//버튼
    );
  }
}

export default App;
