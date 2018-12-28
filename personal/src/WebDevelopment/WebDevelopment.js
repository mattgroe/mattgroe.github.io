import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

import backarrow from '../pictures/back-arrow-circular-symbol.png';

class WebDevelopment extends Component {

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
                    <div {...style}>{/*Web Development - Desktop*/}</div>
                    <div {...titleDiv}>
                        Web Languages & Relatable Skills:
                        <span {...skills}>
                            HTML, CSS, SASS/SCSS, Javascript, <br></br>
                            Node.js, JQuery, React/JSX, <br></br>
                            Express, SQL/MySQL, MongoDB/Mongoose, <br></br>
                            Git Bash, AWS S3 and EC2
                        </span>
                        Project Links:
                        <span {...skills}>
                            <a href='https://sun-client.herokuapp.com/' target="#" {...project}> -> React website deployed in Heroku
                            (WIP)</a> <br></br>
                            <a href='https://github.com/mattgroe/mld-client' target="#" {...project}> -> Must Love Dogs (Dating app) React Client (WIP)</a> <br></br>
                            <a href='https://github.com/mattgroe/mld-server' target="#" {...project}> -> Must Love Dogs Node/Express/MongoDB server (WIP)</a>
                        </span>
                    </div>
                </MediaQuery>
                {/* <MediaQuery query="(max-device-width: 1224px)">
                    <div {...style}>Web Development - Tablet/Phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div {...style}>Web Development - Portrait</div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div {...style}> Web Development - landscape</div>
                </MediaQuery> */}
            </div>
        )
    }
}


export default WebDevelopment;
