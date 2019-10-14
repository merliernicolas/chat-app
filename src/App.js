import React from 'react';
import Contact from './components/Contact';
import contactList from './components/contactList';


function App() {
    return contactList.map (contact => {
     return <div className="App">
      <Contact 
        name="Salibor"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ancylostoma_duodenale_boca.jpg/640px-Ancylostoma_duodenale_boca.jpg"
        online
      />
    </div> 
    });
}

export default App;
