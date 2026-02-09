import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Box, Grid, Paper , Typography } from '@mui/material';

const HabitList: React.FC= () => {
    //get the state --------!!
   const habits =  useSelector((state : RootState)=>state.habits.habits);
     //our reducer called habkits and the values is habits array !
  return (
    <Box sx={{ display : "flex" , flexDirection : "column" , gap :2 , mt:4}}>
    {habits.map((habit)=>{
        return <Paper key={habit.id} elevation={2} sx={{ p: 2}}>
            < Grid container alignItems="center">
            <Grid>
                <Typography variant="h6">
                {habit.name}
                </Typography>
                 <Typography variant="h6">
                {habit.frequency}
                </Typography>
            </Grid>
            </Grid>
        </Paper>
    })}
    </Box>
  )
}

export default HabitList
