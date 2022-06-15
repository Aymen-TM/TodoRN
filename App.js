import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList,StyleSheet, Text, TextInput, View,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Learn Flutter', key: '2' },
    { text: 'Learn Next.js', key: '3' },
    { text: 'Learn Unity', key: '4' },
    { text: 'Learn Designe', key: '5' },
  ]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo == '') {
      Alert.alert('OOPS', 'Todo must not be empty', [{ text: 'Undertstood'}]);
    }else{
      setTodos([...todos,{ text: todo, key: Math.random().toString() }]);
      setTodo('')
    }

  }
  const deleteTodo = (id) => {
     setTodos((prev)=>{
      return prev.filter((todo)=>todo.key!=id)
     }) 
  }

  return (
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss();
  }} >
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="What needs to be done?" value={todo} onChangeText={(text)=>setTodo(text)} />
          <Button style={styles.button} color='coral' title="Add" onPress={()=>addTodo()}  />
        </View>
        <View style={styles.list}>
          <FlatList keyExtractor={(item)=>item.key} data={todos} renderItem={({item})=>{return <TodoItem todo={item} deleteTodo={deleteTodo} />}} />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
  },
  content:{
    flex:1,
    width:'100%',
    paddingTop:30,
    
  },
  form:{
    width: '100%',
    padding:20,
  },
  input:{
    height: 40,
    marginBottom:10,
    borderWidth: 1,
    borderColor: '#2196f3',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  list:{
    paddingHorizontal:40,
  },

  
 
});
