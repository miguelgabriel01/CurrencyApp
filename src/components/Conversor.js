import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './conversor.css';//importa o css da pagina

export default class Conversor extends Component {

  constructor(props){
    super(props)

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,  
    }

    this.converter = this.converter.bind(this);

  }

  converter(){
    /*let de_para = '$(this.props.moedaA)_$(this.props.moedaB)';
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=9c254009b27837826d14`;
      */          


    let de_ = `${this.props.moedaA}`;
    let para_ = `${this.props.moedaB}`;
    let url = `https://api.exchangeratesapi.io/latest?base=${de_}&symbols=${para_}`;


    fetch(url)
        .then(res => {
            return (res.json())
        })
        
        .then(json => {
            let obj = json.rates;
            let cotacao = Object.values(obj)[0];
            let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao).toFixed(2));
            this.setState({ moedaB_valor })
        })
}


render() {
    return (
      <div className="corpo">
      
        <div class="formularioCadastroOng">

            <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
            <input className="valor" placeholder="Informe o valor" type="text" onChange={(event) => {
                this.setState(this.setState({
                    moedaA_valor: event.target.value
                })
                );
            }
            }/>
            


            <input type="button" value="Converter" className="buttonLogin" class="buttonCadastrarOng" onClick={this.converter}></input>
            <h2>Valor R${this.state.moedaB_valor}</h2>
        </div>

        </div>
        
    );
          }}

