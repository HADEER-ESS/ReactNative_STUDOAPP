import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppContext } from "../Providers/AppProvider";
import DailyTaskScreen from "../Screens/DailyTaskScreen";
export default function Search(){
    const {TasksCollection , setTasks } = useContext(AppContext)
    const [input , setInput] = useState(null)
    const [taskList, setTaskList] = useState([]);
    const [searchedData , setSearchedData] = useState([])
    useEffect(() => {
        return TasksCollection.onSnapshot(querySnapshot => {
            const list = []
            querySnapshot.forEach((elem) => {
                list.push(
                    {
                        id : elem.id,
                        name : elem.data().name,
                        complete: elem.data().complete,
                    }
                )
            })
            setTaskList(list);
            setTasks(list)
        })
    } , [])
    const renderingOutput = (text) => {
        setInput(text);
        const newTodoItem = taskList.filter(item => {
            return item.name.includes(text)
        })
        setSearchedData(newTodoItem)
    }
    return(
        <>
        <View style={styles.textInputStyle}>
            <MaterialIcons name="search" size={19} color="#666" style={{paddingRight:7}}/>
            <TextInput placeholder="Search by Task" value={input} onChangeText={text =>renderingOutput(text)}/>
        </View>
        
        {
            input === null ? 
            <DailyTaskScreen data={taskList}/> :
            <DailyTaskScreen data={searchedData}/>
        }
        </>
    )
}

const styles = StyleSheet.create({
    textInputStyle : {
        flexDirection:'row' ,
        alignItems:'center' ,
        borderColor:"#666" ,
        borderRadius:17 ,
        borderWidth:1 ,
        paddingHorizontal:19 ,
        marginTop:10,
        marginHorizontal:23,
        marginBottom:20
    }
})