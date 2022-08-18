import React, { Component } from "react";

class Alrevez extends Component{
    
    constructor(props){

        
        super(props);
        this.state = {
            palabra: "",
            resultado: "",
            
        }

        
    }
    
   

    handleChange = (event) => {
        this.setState({
            palabra: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:3000/ALREVEZ/' + this.state.palabra)
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
                    <label>Alrevez</label>
                    <input type="text" name="palabra" onChange={this.handleChange} />

                    <button type="submit" value="Submit">Enviar</button>
                    <p><strong>Resultado:</strong> {this.state.resultado}</p>

                </form>
            </div>
        );
    }
}


export default Alrevez;