 import React, { Component } from 'react';

 class ClassCounter extends Component {
     constructor(props) {
         super(props)

         this.state = {
             count: 0
         }
     }
     
     incrementCount = () => {
         this.setState({
             count: this.state.count + 100
            })
        }
        
        render() {
            return (
                <div>
        <div>{this.state.count}</div>
            <button onClick={this.incrementCount}>Count</button>
         </div>
     )
    }
};

export default ClassCounter