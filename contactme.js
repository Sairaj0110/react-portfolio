import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class ContactMe extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sairaj Patil</h2>
                        <img className="image" src='https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png' alt="avatar" />
                        <p style={{ margin: 'auto', width: '65%' }}>zkgfhdgfh hjsdgfs  djhfg sdg f zfdhfshjdf j sdjfg sjydf jhs sdfjg sdjfsjf sjd fjsdfgjsd fjhsdfjsdhgfdk fsk gdfjsg fsg df gsdfjg sdj</p>
                    </Cell>


                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        9920-821-832</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        sairaj0110@gmail.com</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        sairaj0110</ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ContactMe;