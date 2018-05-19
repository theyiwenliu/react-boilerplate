import React from 'react';
import AdoptedCat from './AdoptedCat';

export default class WildCat extends React.Component {
    render() {
        return (
            <div>
                {this.props.cats.map((cat, idx) => (
                    <AdoptedCat key={idx} name={cat}/>
                ))}
            </div>
        );
    }
}