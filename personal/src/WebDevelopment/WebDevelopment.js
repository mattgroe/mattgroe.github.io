import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

import backarrow from '../pictures/back-arrow-circular-symbol.png';

class WebDevelopment extends Component {

    render () {

        let size = css({
            height: '100%',
            width: '100%'
        })

        // let style = css({
        //     height: '100%',
        //     width: '100%',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     color: 'white'
        // })

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

        let imgHovMobile = css({
            marginLeft: '10px',
            height: '35px',
            width: '35px',
            ':hover': {
                textDecoration: 'none',
                opacity: '0.5'
            }
        })

        let titleDiv = css({
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '22px',
            marginBottom: '10px'
        })

        let titleDivMobilePor = css({
            marginTop: '50%',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '10px',
        })

        let titleDivMobileLan = css({
            marginTop: '7.5%',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '10px',
        })

        let skills = css({
            textAlign: 'center',
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
        let styleMobile = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        })

        return(
            <div {...size}>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div {...back}> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHov}/> </Link> </div>
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
                <MediaQuery query="(max-device-width: 1224px)">
                    <div {...styleMobile}></div>
                    <MediaQuery query="(orientation: portrait)">
                        <nav className="navbar navbar-dark bg-dark p-2">
                            <span className="navbar-brand mb-0 h1"> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHovMobile}/> </Link> </span>
                        </nav>
                        <div {...styleMobile}>
                            <div {...titleDivMobilePor}>
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
                        </div>
                    </MediaQuery>
                    <MediaQuery query="(orientation: landscape)">
                        <nav className="navbar navbar-dark bg-dark p-2">
                            <span className="navbar-brand mb-0 h1"> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHovMobile}/> </Link> </span>
                        </nav>
                        <div {...styleMobile}>
                            <div {...titleDivMobileLan}>
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
                        </div>
                    </MediaQuery>
                </MediaQuery>
            </div>
        )
    }
}


export default WebDevelopment;
