
class PomodoroTimer extends React.Component {
    constructor(){
        super();
        this.state = {
            timeElapsed: 0
        };
    }

    totalTime(arg1, arg2){
        return arg1 + arg2;
    }

    componentDidMount(){
        console.log(new Date());
        this.interval = setInterval(this.elapseTime.bind(this),1000);
        this.setState({start: new Date()});
    }

    elapseTime(){
        //how much time has elapsed
        var currentDate = new Date();
        console.log(this.state.start);
        //var timeElapsed = Current time - start time
    }

    render() {
        return(
            <div>This timer runs for {this.props.workingTime} minutes, followed by a rest of {this.props.restingTime}, for a total of {this.totalTime(this.props.workingTime, this.props.restingTime)}. <br />There are {this.state.timeElapsed} elapsed seconds</div>
        )
    }
}

ReactDOM.render(
  <PomodoroTimer workingTime={25} restingTime={5}/>,
  document.getElementById('app')
);
