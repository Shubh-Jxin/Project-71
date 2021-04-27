import * as React from 'react';
import {Header} from 'react-native-elements'
import {StyleSheet, Text, View} from 'react-native';

export default class ReadStoryScreen extends React.Component{
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
                <Text style={{textAlign:'center', fontSize:25}}> Read Story</Text>
            </View>
        )
    }
}