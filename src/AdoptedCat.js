import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 4px;
    background: rgba(255,255,255,0.4);
    border-radius: 4px;
    padding: 5px 10px;
`;

export default class AdoptedCat extends React.Component {
    render() {
        return (
            <Div>
                {this.props.name}
            </Div>
        );
    }
}