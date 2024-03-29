import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 30,
    },
};

class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`); // 역따옴표 주의!!! 물결표에 있는 타자
    }
    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount(){
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render(){
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
