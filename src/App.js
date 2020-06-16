import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './app.style.css';

export default class Monsters extends React.Component {
    constructor(){
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
    }
    render() {
      const {monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        console.log(this.state.monsters.name)
      return (
            <div className='App'>
              <h1>MONSTERS ROLODEX</h1>
              <input 
              className='searchbar'
              type='search' 
              placeholder='search monsters' 
              onChange={e => 
                this.setState({ searchField: e.target.value})}
              />
              <CardList monsters={filteredMonsters}/> 
            </div>
        )
    }
};