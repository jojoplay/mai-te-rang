import React, {Component, Fragment} from 'react';
import ReactGA from 'react-ga';
class Analytics extends Component {
    componentDidMount(){
        ReactGA.initialize('UA-125482224-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <Fragment />
        )
    }
}

export default Analytics
