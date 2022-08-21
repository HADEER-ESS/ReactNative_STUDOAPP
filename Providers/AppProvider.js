import React, { createContext, useState } from "react";
import firestore from '@react-native-firebase/firestore';

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const TasksCollection = firestore().collection('Tasks');
    const DoneCollection = firestore().collection("Done")
    const [tasks , setTasks] = useState([])
    const [input , setInput] = useState(null)
    return(
        <AppContext.Provider value={{
            input ,
            setInput,
            tasks ,
            setTasks ,
            TasksCollection,
            DoneCollection,
            addToTask :async (task) => {
                try{
                    await TasksCollection.add({name : task , complete : false})
                }catch(e){
                    console.log("error in task part " , e)
                }
            },
            addtoDone : async (task) => {
                try{
                    await TasksCollection.doc(task.id).update({complete : true})

                }catch(e){
                    console.log("error in done array " , e)
                }
            },
            deleteTodo : async (task) =>{
                try{
                    await TasksCollection.doc(task.id).delete().then(()=>console.log("item is deleted"))
                }catch(e){
                    console.log("error in delete function " , e)
                }
            }
        }}>
            {children}
        </AppContext.Provider>
    )
}