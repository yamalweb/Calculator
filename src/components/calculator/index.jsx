import React from 'react'
import { ObjectsBuilding, Up, Down } from './data'
import { Container, Grid } from '@material-ui/core'
import Calculator from './Calculator'

const CalculatorEvents = () => {
    return (
        <Container>
            <Grid container spacing={5} alignItems={'flex-start'}>
                <Grid item xs={12}>
                    <Calculator
                        ObjectsBuilding={ObjectsBuilding}
                        Up={Up}
                        Down={Down}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default CalculatorEvents
