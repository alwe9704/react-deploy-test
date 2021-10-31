import React, { Component } from 'react';
import './App.css';

import Monster from './components/Monster/Monster';
import SearchField from './components/SearchField/SearchField';

interface Monster {
  name: string
}

interface User {
  id: number,
  username: string,
  email: string
};

// Make the `request` function generic
// to specify the return data type:
function request<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring 
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {}
   
// This function is async, it will return a Promise:
): Promise<TResponse> {
    
  // Inside, we call the `fetch` function with 
  // a URL and config given:
  return fetch(url, config)
    // When got a response call a `json` method on it
    .then((response) => response.json())
    // and return the result data.
    .then((data) => data as TResponse);
    
    // We also can use some post-response
    // data-transformations in the last `then` clause.
}


class App extends Component<{}, {monsters: Monster[], searchString: string}> {
  
  constructor() {
    super({});
    this.state = {
      monsters: [],
      searchString: ""
    };
  }
  
  updateString = (newString: string) => {
    this.setState({
      searchString: newString
    })
  }

  async componentDidMount() {
    const response = await request<User[]>('https://jsonplaceholder.typicode.com/users');
    const newMonsters: Monster[] = [];
    response.map(user => {
      newMonsters.push({name: user.username})
    });
    this.setState({monsters: newMonsters});
  }

  render() {
    return (
      <div className="App">
        <h1>Monsterdeck</h1>
        <div>
          <SearchField 
            handleChange={e => this.setState({searchString: e})}
          />
        </div>
        <div className="monster-grid">
          { this.state.monsters != null ? 
              this.state.monsters
                .filter(monster => monster.name.toLowerCase().includes(this.state.searchString.toLowerCase()))
                .map(monster => {
                  return <Monster
                    key={monster.name} 
                    name={monster.name} />
                })
              :
              <div>Empty</div>              
          }
        </div>
      </div>
    );
  }
}

export default App;
