import React, { Component } from 'react';
import './Timer.css';


export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.minutes = props.minutes ? props.minutes : 90;
        this.seconds = props.seconds ? props.seconds : 0;
        this.callback = props.callback;
        this.isActive = props.isActive ? props.isActive : false;

        this.timerId = null;

        this.state = {
            seconds: this.minutes * 60 + this.seconds
        }

    }

    render() {
        if (this.props.isActive)
            this.start();
        else
            this.stop();

        return (
            <div className="Timer p-3">
                {/* <p>isActive = {this.props.isActive.toString()}</p> */}
                <div className='clock' >{this.secondsToTime(this.state.seconds)}</div>
                <button className='btn btn-warning mt-3'
                    onClick={() => {
                        if (this.props.isActive) {
                            this.stop();
                            this.callback();
                        }
                    }}>Завершить ход
                </button>
            </div>
        );
    }


    start = () => {
        if (this.timerId == null) {
            this.timerId = setInterval(this.updateTime, 1000);
        }
    }

    stop = () => {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    updateTime = () => {
        let seconds = this.state.seconds - 1;

        this.setState({
            seconds: seconds
        })
        if (seconds === 0) {
            this.stop();
        }

    }

    componentDidMount() {
        //setTimeout(this.updateTime, 1000);
    }

    secondsToTime = (sec) => {
        let minutes = Math.floor(sec / 60);
        let seconds = Math.ceil((sec % (60 * 60)) % 60);

        return `${minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })} 
        : ${seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
    }
}

