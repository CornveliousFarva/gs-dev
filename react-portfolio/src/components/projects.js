import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src=""
                                alt="avatar"
                                style={{height:'200px'}}
                                />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}