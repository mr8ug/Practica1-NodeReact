import React, { Component } from "react";

class Informacion extends Component {

    //CONSTRUCTOR
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            DataisLoaded: false
        };


    }


    //si el componente esta cargado
    componentDidMount() {
        fetch('http://127.0.0.1:3000/')
            .then(res => res.json())
            .then((json) => {
                //imprimir en consola resultado
                console.log(json)
                this.setState({

                    data: json,
                    DataisLoaded: true
                });
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="Informacion">

                <div className="Datos"></div>
                {
                    Object.keys(this.state.data).map((key, i) => {
                        if (key === "name") {
                            return (
                                <h1>{this.state.data[key]}</h1>
                            )
                        }
                        else if (key === "website") {
                            return (
                                <h2>{this.state.data[key]}</h2>
                            )

                        }

                    })//endmap
                }

                <div className="Integrantes">
                    {
                        Object.keys(this.state.data).map((key, i) => {
                            
                            //else es un integrante
                            if(key !== "name" && key !== "website") {
                                return (
                                    <div className="Integrante">

                                        <p className="Nombre">{this.state.data[key].nombre}</p>
                                        <p className="Carnet">{this.state.data[key].carnet}</p>
                                    </div>
                                )
                            }

                        })//endmap
                    }
                </div>


            </div>
        );
    }
}

export default Informacion;