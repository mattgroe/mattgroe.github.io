import React, { Component } from 'react';
import { css } from 'glamor';

class FrontPage extends Component {


    render() {

        let style = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        })

        let name = css({
            fontSize: '22px',
            letterSpacing: '20px',
            fontWeight: 'bold',
            textShadow: '2px 2px #aaaaaa'
        })

        let pic = css({
            height: '300px',
            width: '300px',
            borderRadius: '400',
            backgroundColor: 'white',
            marginBottom: '100px'
        })

        let links = css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '100px',
            width: '60%',

            border: '3px solid white',
            backgroundColor: 'transparent',
            borderRadius: '20px'
        })

        let link = css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            

            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',

            marginLeft: '100px',
            marginRight: '100px',
            height: '45px',
            width: '200px',
            ':hover': {
                opacity: '0.5'
            }
        })

        return(
            <div {...style}>
                <div {...pic}></div>
                <div {...name}>Matthew Groe</div>
                <div {...links}>
                    <div {...link}>   Web Developer   </div>
                    <div {...link}>   Software Developer    </div>
                    <div {...link}>   Contant Me      </div>
                </div>
            </div>
        )
    }
}

export default FrontPage;