import { View,Text, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config'
import { FlashList } from '@shopify/flash-list'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {
    const [Notes, setNotes] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        firebase.firestore()
        .collection('Notes')
        .onSnapshot((querySnapshot) => {
            const newNotes = [];
            querySnapshot.forEach((doc) => {
                const {note, title} = doc.data();
                newNotes.push({note, title, id: doc.id});

            });
            setNotes(newNotes);
           
        })
    }, []);

    
    return (
        <View style={styles.container}>
            
            <FlashList 
                data ={Notes}
                numColumns={2}
                estimatedItemSize={100}
                renderItem={({item}) => (
                   <View style = {styles.noteView}>
                     <Pressable
                        onPress={() => navigation.navigate('Detail',{item})}
                     >
                        <Text style={styles.noteTitle}>
                            {item.title}
                        </Text>
                        <Text style ={styles.noteDescription}>
                            {item.note}
                        </Text>
                     </Pressable>
                     
                   </View> 
                )}
            />
            <View style={styles}>
                <TouchableOpacity
                style = {styles.button}
                onPress={ () => navigation.navigate('NoteAdd') }

                >
                    <Text style={styles.buttonText}>Add Notes</Text>
                </TouchableOpacity>
            
            </View>
            
                
        </View>
    )
} 

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    noteView:{
        flex:1,
        backgroundColor:'#add8e6',//#4c00b0
        margin:10,
        padding:10,
        borderRadius:10,
        shadowOffset: { width:0, height:2 },
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:7,
        alignItems:'center'
    },
    noteTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    noteDescription:{
        fontSize:16,
        marginTop:5
    },
    button:{
        backgroundColor:'#1e90ff',
        padding:10,
        borderRadius:50,
        marginTop:10
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        paddingLeft:160,
        fontSize:20

    } 

    
   
})