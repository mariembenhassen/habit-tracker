import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface Habit {
    id : string;
    name:string;
    frequency:"daily"| "weekly" ;
    completedDates: string[];
    createAt : string;
}
interface HabitState {
    habits: Habit[];
}

const initialState: HabitState={
    habits: [],
};

// habitSlice One feature of my app + its state + the logic that updates it
const habitSlice = createSlice(                                            
    {
     name:"habits",
     initialState,
     //Functions that change the state
     reducers: {
       addHabit: (
        state , 
        action : PayloadAction<{name :string , frequency : "daily"|"weekly"}> //This runs when you dispatch:
       )=>{
        //Creating a new habit object
        const newHabit = { 
            id : Date.now().toString(),
            name: action.payload.name,
            frequency : action.payload.frequency ,
            completedDates : [],
            createdAt : new Date().toISOString,
        };

        state.habits.push(newHabit); // Immer handles immutable updates for us
         //Mutating state safely ! bc redux toolkit use Immer under the hood !
       },
       toggleHabit : (
        state ,
        action: PayloadAction<{id : string; date: string}>
       )=>{
       const habit = state.habits.find((h)=> h.id === action.payload.id);
       if (habit){
        const index = habit.completedDates.indexOf(action.payload.date);
        if(index>-1){
            habit.completedDates.splice(index , 1);            
        }
        else{
            habit.completedDates.push(action.payload.date);
        }
       }

       },
     },
    }
);
export const {addHabit , toggleHabit} = habitSlice.actions;
export default habitSlice.reducer