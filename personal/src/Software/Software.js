import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

import backarrow from '../pictures/back-arrow-circular-symbol.png';

class Software extends Component {

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
                    <div {...styleMobile}></div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <nav className="navbar navbar-dark bg-dark p-2">
                        <span className="navbar-brand mb-0 h1"> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHovMobile}/> </Link> </span>
                    </nav>
                    <div {...styleMobile}>
                        <div {...titleDivMobilePor}>
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
                    </div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                <nav className="navbar navbar-dark bg-dark p-2">
                        <span className="navbar-brand mb-0 h1"> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHovMobile}/> </Link> </span>
                    </nav>
                    <div {...styleMobile}>
                        <div {...titleDivMobileLan}>
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
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Software;