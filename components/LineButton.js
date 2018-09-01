import React, {Component} from 'react';

class LineButton extends Component {

    componentDidMount () {
        console.log("dd")
        const script = document.createElement("script");

        script.src = "https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js";
        script.async = "async";
        script.defer = "defer";

        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="line-it-button"
                 data-lang="en"
                 data-type="friend"
                 data-lineid="kokokookai"
                 data-count="true"
                 data-home="true"
                 style={{display: "none"}}></div>
        )
    }
}

export default LineButton
