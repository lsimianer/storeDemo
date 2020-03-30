import React from 'react';
import ClassCounter from '../components/ClassCounter';
import HookCounter from '../components/HookCounter';
// class Home extends React.Component {
//     render(){
//         return <p>Hey!</p>
//     }
// }

const Home = props => (
    <div>
        <p>Hey!, I'm Alive bro!!!</p>
        
        <HookCounter/>
    </div>
)
export default Home;