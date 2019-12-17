import React, { Component } from "react";
import SagaChar from "./components/SagaChar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./game.css";





class Game extends Component {

    state = {
        characters
    };

    render() {
        return (
            <Wrapper>
                {

                    this.state.characters.map(char => (
                        <SagaChar
                            id={char.id}
                            key={char.id}
                            name={char.name}
                            image={char.image}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default Game;