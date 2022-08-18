import React, { Component } from "react";

class Multiplicacion extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero1: 0,
            numero2: 0,
            resultado: "",
            
        }
    }

    handleChange1 = (event) => {
        this.setState({
            numero1: event.target.value
            
        })
    }

    handleChange2 = (event) => {
        this.setState({
            numero2: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:3000/multiplicacion/' + this.state.numero1+"/"+this.state.numero2)
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
                    <label>Multiplicacion</label>
                    <input type="number" name="numero1" onChange={this.handleChange1} />
                    <input type="number" name="numero2" onChange={this.handleChange2} />

                    <button type="submit" value="Submit">Enviar</button>
                    <p><strong>Resultado:</strong> {this.state.resultado}</p>

                </form>
            </div>
        );
    }
}


export default Multiplicacion;