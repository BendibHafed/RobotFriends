import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import '../components/ErrorBoundry'
import '../containers/App.css'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
        });

        if (!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = { filteredRobots }/>
                    </ErrorBoundry>
                </Scroll>
                </div>
            );
        }
    }
    
}

export default App;