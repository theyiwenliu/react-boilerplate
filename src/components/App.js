import React from 'react';
import House from './House';
import Outdoors from './Outdoors';
import styled from 'styled-components';

const Div = styled.div`
    font-family: sans-serif;
    margin: 40px;
    padding: 20px;
`;

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cats: ["Chloe", "Ramsey", "Ted", "Orange", "Leo"],
            adoptedCats: ["Chloe", "Ramsey"]
        };
    }

    adopt(cat) {
        if (this.state.cats.indexOf(cat) === -1 || this.state.adoptedCats.indexOf(cat) !== -1) {
            return;
        }
        this.setState({
            adoptedCats: [...this.state.adoptedCats, cat]
        });
    }

    render() {
        const wildCats = this.state.cats.filter((cat) => this.state.adoptedCats.indexOf(cat) === -1);
        return (
            <Div>
                <h1>React Boilerplate</h1>
                <House cats={this.state.adoptedCats} />
                <Outdoors adopt={this.adopt.bind(this)} cats={wildCats} />
            </Div>
        );
    }
}