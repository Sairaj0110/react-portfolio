import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
    render() {
        return (
            <div>
                
                <Grid style={{marginTop:'-50px'}}>
                <Cell col={4}>
                <h4>{this.props.startYear}-{this.props.endYear}</h4>
                </Cell>
                    <Cell col={8}>
                    <h4>{this.props.jobName}</h4>
                    <h5 style={{marginTop:'-15px'}}>{this.props.jobDescription}</h5>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience;