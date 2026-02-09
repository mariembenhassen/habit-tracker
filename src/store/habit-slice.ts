import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface Habit {
    id : string;
    name:string;
    frequency:"daily"| "weekly" ;
    completeDates: string[];
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

                                                                              //dispatch(addHabit({ name: "Drink Water", frequency: "daily" }));

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
     },
    }
);
export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer