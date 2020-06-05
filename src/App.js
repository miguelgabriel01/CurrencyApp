import React from 'react';
import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (

    <div className="App">
          <div className="cadastro">

      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
     

      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
     

      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>

      <div className="footer">
    
           <a href="https://github.com/miguelgabriel01" className="link">Miguel gabriel barbosa dos santos</a>

      </div>

</div>




   

    );
}

export default App;
