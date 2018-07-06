import React from 'react';
import AdoptedCat from './AdoptedCat';
import styled from 'styled-components';

const Div = styled.div`
    padding: 20px;
    background: #ff7272;
    border-radius: 0 0 4px 4px;
    display: flex;
    width: 500px;
    margin-left: 20px;
`;

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 290px solid transparent;
    border-right: 290px solid transparent;
    border-bottom: 100px solid #ff7272;
`;

export default class WildCat extends React.Component {
    render() {
        return (
            <div>
                <Triangle />
                <Div>
                    {this.props.cats.map((cat, idx) => (
                        <AdoptedCat key={idx} name={cat}/>
                    ))}
                </Div>
            </div>
        );
    }
}