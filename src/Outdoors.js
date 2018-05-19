import React from 'react';
import WildCat from './WildCat';

export default class Outdoors extends React.Component {
    render() {
        return (
            <div>
                {this.props.cats.map((cat, idx) => (
                    <WildCat key={idx} name={cat} adopt={this.props.adopt}/>
                ))}
            </div>
        );
    }
}