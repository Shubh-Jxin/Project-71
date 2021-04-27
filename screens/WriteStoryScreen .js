import * as React from 'react';
// import {MyHeader} from "../components/Header";
import {Header} from 'react-native-elements'
import {View, Text, TextInput, TouchableOpacity,StyleSheet, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component{
    constructor(){
      super();
      this.state={
        title:'',
        author:'',
        story:''
      }
    }

    submitStory=()=>{
      db.collection('all_stories').add({
        Title: this.state.title,
        Author: this.state.author,
        Story:this.state.story
      })
      Alert.alert("Story Submitted!");
      this.setState({
        title: "",
        author: "",
        story: "",
      });
    }

    render(){
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                }}
                >
                <Header
                     backgroundColor={"#f38181"}
                     centerComponent={{
                     text: "Story Hub",
                     style: { fontSize: 28, color: "#fff" },
                     }}
                />
                <TextInput style={styles.inputBox} placeholder="Story Title"
                  onChangeText={(text)=>{
                    this.setState({
                      title: text
                    })
                  }}
                  value={this.state.title}
                />
                <TextInput style={styles.inputBox} placeholder="Author"
                onChangeText={(text)=>{
                  this.setState({
                    author: text
                  })
                }}
                value={this.state.author} 
                />
                <TextInput style={styles.inputBox} placeholder="Write your Story" multiline={true}
                onChangeText={(text)=>{
                  this.setState({
                    story: text
                  })
                }}
                value={this.state.story}
                />

                <TouchableOpacity style={styles.button} onPress={this.submitStory}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
      width: "90%",
      height: 50,
      borderWidth: 2,
      margin: 20,
      padding: 5,
    },
    inputBoxMultiline: {
      width: "90%",
      height: "35%",
      borderWidth: 2,
      margin: 20,
      padding: 5,
    },
    button: {
      margin: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#95e1d3",
      width: 200,
      height: 50,
      alignSelf: "center",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });