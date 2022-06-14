import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function TodoItem({todo,deleteTodo}) {

    return (
        <TouchableOpacity onPress={()=>deleteTodo(todo.key)}>
            <Text style={styles.item}>{todo.text}</Text>
        </TouchableOpacity>
        )
    }
const styles = StyleSheet.create({
    item:{
        textAlign:'center',
        padding:20,
        marginTop:10,
        backgroundColor:'#f0f0f0',
        fontSize:15,
        fontWeight:'bold'
    },
})