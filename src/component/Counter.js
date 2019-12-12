import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class Counter extends Component {
   render() {
      const {counter,increment,decrement,multiple,devide,reset} = this.props;
      return (
         <div className = "App">
            <div>
            <h5>{counter}</h5></div><br></br>
            <Button variant="primary" size="lg" onClick = {increment}>INCREMENT</Button> &nbsp; &nbsp;
            <Button variant="secondary" size="lg" onClick = {decrement}>DECREMENT</Button> &nbsp; &nbsp;
            <Button variant="primary" size="lg" onClick = {multiple}>MULTIPLE</Button> &nbsp; &nbsp;
            <Button variant="secondary" size="lg" onClick = {devide}>DEVIDE</Button><br></br><br></br>
            <Button variant="outline-success" onClick = {reset}>RESET</Button>
         </div>
      );
   }
}
export default Counter;