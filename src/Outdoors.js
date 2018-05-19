import React from 'react';
import WildCat from './WildCat';
import styled from 'styled-components';

const Div = styled.div`
    padding: 20px;
    background: #1c4163;
    border-radius: 4px;
    display: flex;
    margin-top: 10px;
    color: white;
`;

export default class Outdoors extends React.Component {
    render() {
        return (
            this.props.cats.length > 0 &&
            <Div>
                {this.props.cats.map((cat, idx) => (
                    <WildCat key={idx} name={cat} adopt={this.props.adopt}/>
                ))}
            </Div>
        );
    }
}