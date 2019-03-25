import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} >
                        <div style={{ textAlign: 'center' }}>
                            <img className="image" src="https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png"
                                alt="avatar" />
                            <h3>Sairaj Patil : UI Developer</h3>
                        </div>
                        <p>Lorebsdfn  kjsdfbsbf skjdhfkjsdbf skjdfhskjdbf skdfksjdf sdfskjdbfs sdfbjskdbf smdfbskjdfbs smdfbsmdbf s fs dfjhsdbfkhsdf sdfjsf sdkfnsdjkf sdfkjsdjfbs sdfjnsdjfn jdnf</p>
                        <hr style={{ borderTop: '5px dotted black', margin: 'auto', color: 'white', width: '95%' }} />
                        <h5>Address : </h5>
                        <p>Loren Ipsum</p>
                        <h5>Phone : </h5>
                        <p>Loren Ipsum</p>
                        <h5>Email : </h5>
                        <p>Loren Ipsum</p>
                        <h5>Web : </h5>
                        <p>Loren Ipsum</p>

                    </Cell>
                    <Cell col={8} className='resume-right-col'>
                        <h2 style={{ padding: '10px' }}>Education</h2>
                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="Terna Engineering College"
                            schoolDescription="Bachelore in Computer Engineering"
                        />
                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="Birla College"
                            schoolDescription="Science"
                        />
                        <hr style={{ borderTop: '5px dotted black', margin: 'auto', color: 'white', width: '95%' }} />
                        <h2 style={{ padding: '10px' }}>Experience</h2>
                        <Experience
                            startYear={2007}
                            endYear={2009}
                            jobName="First Job"
                            jobDescription="Bachelore in Computer Engineering"
                        />
                        <Experience
                            startYear={2007}
                            endYear={2009}
                            jobName="Second Job"
                            jobDescription="Bachelore in Computer Engineering"
                        />
                        <hr style={{ borderTop: '5px dotted black', margin: 'auto', color: 'white', width: '95%' }} />
                        <h2 style={{ padding: '10px' }}>Skills</h2>
                        <Skills
                            skillName='Angular'
                            progress={70} />
                        <Skills
                            skillName='React'
                            progress={30} />
                        <Skills
                            skillName='Html/CSS'
                            progress={80} />
                        <Skills
                            skillName='Mongo DB'
                            progress={30} />
                        <Skills
                            skillName='Node JS'
                            progress={30} />
                        <Skills
                            skillName='Ag-Grid'
                            progress={50} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;