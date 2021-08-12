import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default function CustomButton({content, pressHandler, image}) {
   return (
      <TouchableOpacity onPress={pressHandler}>
         <View style={styles.button}>
            {!image ? (
               <Text style={styles.text}>{content}</Text>
            ) : (
               <Image source={image} style={styles.image} />
            )}
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   button: {
      width: 45,
      height: 45,
      padding: 4,
      margin: 5,
      borderColor: '#b1b1b1',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#d5d5d5',
      justifyContent: 'center',
      alignItems: 'center',
   },
   activeStyle: {
      backgroundColor: '#d4af37',
   },
   image: {
      width: '100%',
      height: '100%',
   },
   text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#666',
   },
});
