import React, { Component } from "react";
import Background from "./123.png";
import font from './calendar.svg';
import './index.css';

class Latihan extends Component {
    render() {
        return (
            <div style={styles.background}>
                <div style={styles.icon}>
                    <img src={font} />
                </div>             
                    <div style={styles.text}>
                        <p style={{alignSelf: "left"}}>Go Green</p>
                    </div>
                    <div style={styles.parentQuotes}>
                        <h1 style={{ alignSelf: "center" }}>Make it green</h1>
                        <h1 style={{ alignSelf: "center" }}>Now more than ever. Our planet is need our.</h1>
                   <div style={styles.parentButton1}>
                            <div style={styles.Readmore1}>
                                Do It Now
                            </div>
                        </div> 
                    </div>
                </div>
        );
    }
}
let h = window.innerHeight;

const styles = {
    background: {
        display: "flex",
        backgroundImage: `url(${Background})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItem: "center",
        left: 0,
        top: 0,
        position: "absolute"
    },
    wraper: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        color: "#ffff",
        marginRight: 50,
    },
    icon: {
        top: 10,
        right: 30,
        border: 3,
        position: "absolute" 
    },
    text: {
        color: "white",
        fontFamily: "Poppins",
        top: 10,
        left: 30,
        border: 3, 
        position: "absolute"
    },
    parent: {
        display: "flex",
        backgroundColor: "rgba(42, 38, 61, 0.82)",
        height: h,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
    },
    border: {
        borderStyle: "solid",
    },
    parentQuotes: {
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        flexDirection: "column",
        alignItem: "center",
        color: '#FFFFFF',
        fontFamily: "Calibri",
        textAlign: "center",
    },
    Readmore: {
        color: "#FCB371",
        marginTop: -20,
        margin: 14,
        marginRight: 50,
        marginLeft: 20
    },
    parentButton1: {
        display: "flex",
        borderRadius: 30,
        alignSelf: "center",
        marginTop: 60,
        marginLeft: 130,
        background: "#FCB371",
        fontFamily: "Poppins",
        position: "absolute",
       padding: 10
    },
    Readmore1: {
        color: "#ffff",
        margin: 14,
        marginRight: 50,
        marginLeft: 20,
    }
}

export default Latihan;