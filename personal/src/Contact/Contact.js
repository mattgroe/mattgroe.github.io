import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

import backarrow from '../pictures/back-arrow-circular-symbol.png';

class Contact extends Component {

    render () {

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
            marginBottom: '20px'
        })
        let skills = css({
            fontWeight: 'normal',
            marginBottom: '20px'
        })

        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div {...back}> <Link key="home"  to="/" > <img src={backarrow} alt='back' {...imgHov}/> </Link> </div>
                    <div {...titleDiv}>
                        Contact for interest
                        <span {...skills}>
                            Email: mgroe@ieee.org
                        </span>
                    </div>
                </MediaQuery>
                {/* <MediaQuery query="(max-device-width: 1224px)">
                    <div {...style}>Contact Me - Tablet/Phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div {...style}>Contact Me - Portrait</div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div {...style}>Contact Me - landscape</div>
                </MediaQuery> */}
            </div>
        )
    }
}

export default Contact;