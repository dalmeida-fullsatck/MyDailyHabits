import { useContext } from "react";
import { HabitsContext } from "./HabitsContext";

export function useHabits (){
    return useContext(HabitsContext)
} 