import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';



export default class Counter extends React.Component {
  state = {
    count: 1
  };

  increment = () => {
    this.setState({
      count: (this.state.count * 8)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button onClick={this.increment} variant="success">Increment</Button>
        <Button onClick={this.decrement}variant="warning" >Decrement</Button>
        <Button variant="dark">Primary</Button>
      </div>
    );
  }
}