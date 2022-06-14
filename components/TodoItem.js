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
        marginTop:20,
        backgroundColor:'#f0f0f0',
        fontSize:15,
        fontWeight:'bold',
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
})