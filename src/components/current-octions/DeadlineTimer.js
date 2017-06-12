import React from 'react'

class DeadlineTimer extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)
        let remainingSeconds = this.calculateInitialRemainingTime(props.deadline)

        this.state = {
            time: {},
            seconds: remainingSeconds
        };

        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    calculateInitialRemainingTime(deadline) {
        let dateNow = new  Date()
        let dateDeadLine = new Date(deadline)
        return (dateDeadLine - dateNow) / 1000;
    }

    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {};
        obj.h = this.hourFormatter(hours)
        obj.m = this.zeroTimePadder(minutes, 2)
        obj.s = this.zeroTimePadder(seconds, 2)
        return obj;
    }

    hourFormatter(hours) {
        let resultTxt = hours
        let hoursPerDay = 24

        if(hours > hoursPerDay) {
            resultTxt = Math.floor(hours / hoursPerDay) + " day(s) "
            resultTxt = resultTxt + (hours % hoursPerDay)
        } else {
            resultTxt = this.zeroTimePadder(hours)
        }
        return resultTxt
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    zeroTimePadder(n, width, z) {
        z = z || '0';
        n = n + '';
        if(n >= 10) return n

        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        this.startTimer()
        return(
            <div>
                {this.state.time.h}:{this.state.time.m}:{this.state.time.s}
                <span>&nbsp;remaining</span>
            </div>
        );
    }
}




export default DeadlineTimer