import React from 'react';

export class Clock extends React.Component {
    interval = null;
    constructor(props) {
        super(props);
        this.state = {date: new Date(),  pause: 0};
       this.interval = setInterval(() => {
            this.setState({date: new Date()});
            this.play = this.props.play;
            if (!this.play) this.setState({pause: this.state.pause + 1});
        }, 1000);
    }
    destructor() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <h2> It Is { new Date(this.state.date.getTime() - (this.state.pause * 1000)).toLocaleTimeString()}</h2>
            </div>
        );
    }
}
