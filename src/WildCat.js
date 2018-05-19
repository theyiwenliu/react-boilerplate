import React from 'react';
export default class WildCat extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
                <button onClick={() => this.props.adopt(this.props.name)}>Adopt</button>
            </div>
        );
    }
}