import React, { Component } from "react";
import SagaChar from "../SagaChar";
import Wrapper from "../Wrapper";
import characters from "../../characters.json";
import "./game.css";





class Game extends Component {

    state = {
        characters
    };

    render() {
        return (
            <div className="container">
             <Wrapper>
                <div className="row">
                    {

                        this.state.characters.map(char => (
                            <div className="col-3 float-left d-flex">
                                <SagaChar
                                    id={char.id}
                                    key={char.id}
                                    name={char.name}
                                    image={char.image}
                                />
                            </div>
                        ))
                    }
                </div>

                 </Wrapper>
            </div>
        );
    }
}

export default Game;