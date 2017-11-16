
class PomodoroTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            timeElapsed: 0
        };
    }

    totalTime(arg1, arg2) {
        return arg1 + arg2;
    }

    componentDidMount() {
        console.log(new Date());
        this.interval = setInterval(this.elapseTime.bind(this), 1000);
        this.setState({ start: new Date() });
    }

    elapseTime() {
        //how much time has elapsed
        var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

        this.setState({ timeElapsed: timeElapsed });
        //if timeElapsed = 25 minutes -> then alert
        if (Math.floor(timeElapsed / 1000) === 1500) {
            alert('the ravages of time spares no one!!!!');
        }
    }

    render() {
        return React.createElement(
            'div',
            null,
            'This timer runs for ',
            this.props.workingTime,
            ' minutes, followed by a rest of ',
            this.props.restingTime,
            ', for a total of ',
            this.totalTime(this.props.workingTime, this.props.restingTime),
            '. ',
            React.createElement('br', null),
            ' ',
            this.state.timeElapsed,
            ' seconds have elapsed'
        );
    }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));