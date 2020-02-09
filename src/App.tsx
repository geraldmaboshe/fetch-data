import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

interface IProps {

}
interface IState {
  data: any
}

class App extends Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then(response => {
        const data = response.data
        this.setState({ data })
      })
  }
  render() {
    return (
      <div>
        {this.state.data.map((dat: { email: React.ReactNode; }) =>
          <div>{dat.email}</div>
        )}
      </div>
    );

  }
}

export default App;
