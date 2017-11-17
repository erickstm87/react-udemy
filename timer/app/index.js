
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

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    elapseTime(){
        //how much time has elapsed
        var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

        this.setState({timeElapsed: timeElapsed});

        if(timeElapsed === this.props.workingTime * 60)
        {
            clearInterval(this.interval);
            alert('the ravages of time spare no one!!!!');
        }
    }

    render() {
        return(
            <div>This timer runs for {this.props.workingTime} minutes, followed by a rest of {this.props.restingTime}, for a total of {this.totalTime(this.props.workingTime, this.props.restingTime)}. <br /> {this.state.timeElapsed} seconds have elapsed</div>
        )
    }
}

ReactDOM.render(
  <PomodoroTimer workingTime={25} restingTime={5}/>,
  document.getElementById('app')
);
