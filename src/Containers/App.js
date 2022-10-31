import React, { useState , useEffect} from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/Searchbox'
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    },[]) 

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ?
        <h1>Loading</h1> :
    (
        <div className='tc'>
            <div className='flex items-center justify-center'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
            </div>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots = {filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    )
    
}

export default App