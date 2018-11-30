import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';
import MediaQuery from 'react-responsive';

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
            color: 'white'
        })

        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <div {...back}> <Link key="home"  to="/" > Arrow here </Link> </div>
                    <div {...style}>Software Development - Desktop</div>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <div {...style}>Software Development - Tablet/Phone</div>
                </MediaQuery>
                <MediaQuery query="(orientation: portrait)">
                    <div {...style}>Software Development - Portrait</div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div {...style}>Software Development - landscape</div>
                </MediaQuery>
            </div>
        )
    }
}

export default Software;