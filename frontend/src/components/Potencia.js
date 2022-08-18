import React, { Component } from "react";

class Potencia extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: "",
            resultado: "",
            
        }
    }

    handleChange = (event) => {
        this.setState({
            numero: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:3000/potencia/' + this.state.numero)
            .then(res => res.json())
            .then((json) => {
                //imprimir en consola resultado
                console.log(json)
                this.setState({
                    resultado : json.resultado
                });
            }).catch(err => console.log(err));
    }

    render(){
        return(
            <div className="Funcion">
                <form onSubmit={this.handleSubmit} className="Formulario">
                    <label>Potencia Cubica</label>
                    <input type="number" name="numero" onChange={this.handleChange} />

                    <button type="submit" value="Submit">Enviar</button>
                    <p><strong>Resultado:</strong> {this.state.resultado}</p>

                </form>
            </div>
        );
    }
}


export default Potencia;