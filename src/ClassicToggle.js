import React from 'react';

class ClassicToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmile: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({   
            isSmile: !prevState.isSmile
        }));
    }

    render() {
        return (
            <p onClick={() => this.setState({ isSmile: !this.state.isSmile })}>
                {this.state.isSmile ? '🙂' : '☹️'}
            </p>
            // <button onClick={this.handleClick}>
            //     {this.state.isToggleOn ? 'ON' : 'OFF'}
            // </button>
        );
    }
}

export default ClassicToggle;