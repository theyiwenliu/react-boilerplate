import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 2px 2px 2px 8px;
    padding: 3px 6px;
    border: 0;
    border-radius: 4px;
    outline: none;
    background: #84e2d3;
    cursor: pointer;
    &:hover {
    background-color: #7acec0;
    }
`;

const Div = styled.div`
    margin: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 5px 10px;
`;

export default class WildCat extends React.Component {
    render() {
        return (
            <Div>
                {this.props.name}
                <Button onClick={() => this.props.adopt(this.props.name)}>ADOPT</Button>
            </Div>
        );
    }
}