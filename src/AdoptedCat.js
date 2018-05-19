import React from 'react';
export default class AdoptedCat extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}