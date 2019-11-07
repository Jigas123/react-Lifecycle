import React from 'react';

class LifecycleMethod extends React.Component{
    constructor(props) {
        super(props);
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
        return (<h1>{this.props.number}</h1>);
    }
}
export default LifecycleMethod;