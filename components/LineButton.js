import React, {Component} from 'react';
import Line from '@app/assets/images/btnaddfriend.png'

class LineButton extends Component {

    render() {
        return (
            <a href="https://line.me/ti/p/~kokokookai" className="line-btn text-center">
                <img src={Line} alt="kokokookai" className="img-fluid" style={{maxWidth: "180px"}}/>
            </a>
        )
    }
}

export default LineButton
