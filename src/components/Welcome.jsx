import React from "react";

function Welcome(props) {
    return(
        <React.Fragment>
            <h1>Hello User Name!</h1>
            <WelcomeImage src='./logo192.png' alt='logo' />
        </React.Fragment>
    );
};

class WelcomeImage extends React.Component {

    constructor(props) {
        super( props );
        this.date = new Date;
    }

    render() {
        return(
            <React.Fragment>
                <img src={this.props.src} alt={this.props.alt} />
                <p>{this.props.alt}</p>
                <p>{this.date.toString()}</p>
            </React.Fragment>
        )
    }
}

export default Welcome;
