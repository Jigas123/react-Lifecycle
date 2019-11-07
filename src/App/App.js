import React,{Component} from 'react';
import IncrementValue from '../container/incrementValue';
import LifecycleMethod from '../container/LifecycleMethod';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  onClickd = () => {
    console.log("on click")
    this.setState({number:(this.state.number+1)})
  }

  componentWillMount() {
    console.log('I am about to say hello');
    debugger;
  }

  componentDidMount() {
    console.log('component did mount');
    debugger;
  }

  componentWillReceiveProps(nextProps) {
    debugger;

  }

  shouldComponentUpdate(nextProps, nextState) {
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
    debugger;
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;

  }

  componentWillUnmount() {
    debugger;
  }


  render() {
    return (
            <div>
              <IncrementValue onclickd={this.onClickd}/>
              <h1>this is state numbar: {this.state.number}</h1>
              <LifecycleMethod number={this.state.number}/>
            </div>
            );
  }
}

export default App;
