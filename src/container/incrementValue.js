import React,{Component} from 'react';
import {Button} from 'reactstrap';
class IncrementValue extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
           <Button onClick={this.props.onclickd}>Increment</Button>
        );
    }
}

export default IncrementValue;