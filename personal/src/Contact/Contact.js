import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

import backarrow from '../pictures/back-arrow-circular-symbol.png';

class Contact extends Component {

    render () {

        let size = css({
            height: '100%',
            width: '100%'
        })

        let styleMobile = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
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
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '22px',
            marginBottom: '20px'
        })
        let skills = css({
            textAlign: 'center',
            fontWeight: 'normal',
            marginBottom: '20px'
        })

        let titleDivMobilePor = css({
            marginTop: '75%',
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

        let imgHovMobile = css({
            marginLeft: '10px',
            height: '35px',
            width: '35px',
            ':hover': {
                textDecoration: 'none',
                opacity: '0.5'
            }
        })

        let titleDivMobileLan = css({
            marginTop: '20%',
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


        return(
            <div {...size}>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div {...back}> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHov}/> </Link> </div>
                    <div {...titleDiv}>
                        Contact for interest
                        <span {...skills}>
                            Email: mgroe@ieee.org
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
                                Contact for information
                                <span {...skills}>Email: mgroe@ieee.org</span>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery query="(orientation: landscape)">
                        <nav className="navbar navbar-dark bg-dark p-2">
                            <span className="navbar-brand mb-0 h1"> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHovMobile}/> </Link> </span>
                        </nav>
                        <div {...styleMobile}>
                            <div {...titleDivMobileLan}>
                                Contact for information
                                <span {...skills}>Email: mgroe@ieee.org</span>
                            </div>
                        </div>
                    </MediaQuery>
                </MediaQuery>
            </div>
        )
    }
}

export default Contact;