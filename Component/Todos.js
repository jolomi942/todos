import{View, Text, TextInput, Button, StyleSheet, FlatList} from "react-native";
import { myTodos } from "../data-sources/mytodos";

export function TodoApp(){
    function TodoTemplate (title,todoType, frquency){
        let boColor;
        let baColor;

        if(todoType =="Reminder"){
             boColor = "orange";
             baColor="oldlace";

        } else if(todoType == "Goal"){
             boColor = "aqua";
             baColor="skyblue";
        }
        else if(todoType == "Event"){
                boColor = "red";
                baColor="magenta";
        }
        
        return(
            
                    <View style={[styles.todo,
                    {borderColor:boColor,backgroundColor:baColor}]}>
                     <Text style={styles.todoTitle}>{title}</Text>
                        <View style={styles.options}>
                     <Text style={styles.optionInfo}>{todoType}</Text>
                     <Text style={styles.optionInfo}>{frquency}</Text>
                        </View>   
                    </View>   
        )
        }

    return(
        <View style = {styles.container}>
                <Text style={styles.title}>My Todos</Text>

                  <View style={styles.todosblock}>
                    <FlatList
                    data={myTodos}  
                    renderItem={({item})=> TodoTemplate(item.title,item.type,item.freq)}
                     key={(item)=> item.id}/>    
                </View>
        </View>
    )
}

const styles = StyleSheet.creat({
    container:{
        padding: 20,
    },
    title:{
        textAlign:"center",
        fontSize:28,
        fontWeight:"bold",
        color:"purple"
    },
    todosblock:{
        paddingVertical: 16,
        paddingHorizontal:8,
        borderWidth:1,
        borderColor:"skyeblue",
        borderRadius:8,
        margingTop:10
    },
    todo:{
        padding: 8,
        marginBottom:8,
        borderWidth:1,
        borderRadius:8,
    },
    options:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    optionInfo:{

    }
})