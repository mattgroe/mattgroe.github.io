import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

import backarrow from '../pictures/back-arrow-circular-symbol.png';

class Software extends Component {

    render () {

        let style = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        })

        let back = css({
            position: "absolute",
            top: '50%',
            left: '10%',
            color: 'white'
        })

        let imgHov = css({
            height: '40px',
            width: '40px',
            ':hover': {
                textDecoration: 'none',
                opacity: '0.5'
            }
        })
        let titleDiv = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '22px',
            marginBottom: '10px'
        })
        let skills = css({
            fontWeight: 'normal',
            marginBottom: '20px'
        })
        let project = css({
            textDecoration: 'none',
            color: 'white',
            ':hover': {
                color: 'grey'
            }
        })

        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div {...back}> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHov}/> </Link> </div>
                    <div {...titleDiv}>
                        Software Development & Relatable Skills:
                        <span {...skills}>
                            Java, C++, Python, MySQL, JavaFX, <br></br>
                            server and socket communication. <br></br>
                        </span>
                        Project Links:
                        <span {...skills}>
                            <a href='https://github.com/mattgroe/MySql-Java-XML-Export/' target="#" {...project}> -> XML Exporter written in Java with a MySQL backend</a>
                            <br></br>
                            <a href='https://github.com/mattgroe/Client-Server-Java' target="#" {...project}> -> Client and Server HTML Viewer in Java</a>
                        </span>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <div {...style}>Software Development - Tablet/Phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div {...style}>Software Development - Portrait</div>
                </MediaQuery>
                {/* <MediaQuery query="(orientation: landscape)">
                    <div {...style}>Software Development - landscape</div>
                </MediaQuery> */}
            </div>
        )
    }
}

export default Software;