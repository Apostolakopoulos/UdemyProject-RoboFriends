import React, {Component} from 'react';
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// the ones that are not default export i have to destructure them
// import { robots } from "./robots";

class App extends Component {
    // the constructor with the state that describes the app
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // this function is part of the life cycle hooks and it get's executed automatically after render which is also part of lyfe cycle hooks
    // they come with react
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then(response =>{
            //convert response to json
            return response.json();
        }).then(users => {
            this.setState({robots: users});
        });
    }

    // fuction that every time the input changes we get an event
    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
    }
    
    // i pass the onSearchChange function as parameter to the SearchBox component
    render(){
        const {robots, searchfield} = this.state;
        // filter the robot list
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if(!robots.length){
            return <h1>Loading</h1>
        }else{
            return (        
                <div className = 'tc'>
                    <h1 className = 'f1' >RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots = {filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>              
            );
        }
    }    
}

export default App;