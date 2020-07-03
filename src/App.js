import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Box from './components/Box';
import Input from './components/Input'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>
          response.json()
        ).then(users => {
          this.setState({
            items: users.map(user =>{
              return {
                id: user.id,
                name: user.name,
              }
            }),
            initialData: users,
          })
        })   
  }
  
  handleInputChange = (e) => {
    const { value } = e.target;
    if(value) {
      this.setState(state => ({
        items: state.initialData.filter(robot => robot.name.toLowerCase().includes(value.toLowerCase()))
      }))
    } else {
      this.setState(state => ({
        items: state.initialData,
      }))
    }
  }



  render() {
    return (
      <div>
      <div>
      <Input type ='text' name= 'SearchItemInput' inputValue={this.state.inputValue} onChange = {this.handleInputChange}/>
      </div>
        <Container value={this.state.items}/>
      </div>
    )
  }
}

export default App;
