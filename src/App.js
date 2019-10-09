import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
        name="Salibor"
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ancylostoma_duodenale_boca.jpg/640px-Ancylostoma_duodenale_boca.jpg"
        online
      />
      <Contact
        name="DKAnky"
        avatar="https://img.point.pet/images/hook-worm-artwork-460715065-584dd9f05f9b58a8cdebf117.jpg"
        online
      />
      <Contact
        name="Galactos"
        avatar="https://staticserver2.com/edu/static/fr/800/ancylostoma-duodenale.jpg"
        offline
      />
    </div>
  );
}

export default App;
