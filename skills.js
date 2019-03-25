import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <div>
                <Grid style={{marginTop:'-50px'}}>
                    <Cell col={12} style={{display:'flex'}}>
                    <h4>{this.props.skillName}</h4>
                    <ProgressBar style={{margin:'auto', width:'75%', }} progress={this.props.progress}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;