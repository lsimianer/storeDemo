import React from 'react';
import ClassCounter from '../components/ClassCounter';
import HookCounterTwo from '../components/HookCounterTwo';
// class Home extends React.Component {
//     render(){
//         return <p>Hey!</p>
//     }
// }

const Home = props => (
    <div>
        <p>Hey!, I'm Alive bro!!!</p>
        
        <HookCounterTwo/>
    </div>
)
export default Home;