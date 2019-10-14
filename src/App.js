import React from 'react';
import Contact from './components/Contact';
import contactList from './components/contactList';


function App() {
    return(
    <div className="App">
      {contactList.map ((cont) => {
      return (<Contact name={cont.name} avatar={cont.avatar} online={cont.online} />)})}
    </div>)
};

export default App;
