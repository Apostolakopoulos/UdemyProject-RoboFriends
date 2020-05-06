import React, {Component} from 'react';

class ErrorBoundry extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }

    // if this gets triggered we are going to return the error in render
    componentDidCarch(error, info) {
        this.setState({hasError: true})
    }

    render() {
    
        if(this.state.hasError){
            return <h1>Oooooops. That is not good.</h1>
        }
    
        return this.props.children;
    }
}

export default ErrorBoundry;