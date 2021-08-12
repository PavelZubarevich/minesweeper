import React from 'react';
import {Modal, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CustomPopUp({text, showModal, closeHandler, gameOver}) {
   return (
      <Modal visible={showModal} transparent animationType={'fade'}>
         <View style={styles.background}>
            <View style={styles.modal}>
               <Text style={styles.text}>{text}</Text>
               {gameOver.value ? (
                  <TouchableOpacity onPress={gameOver.restartHandler}>
                     <Text style={[styles.closeBTN, styles.BTN]}>Restart</Text>
                  </TouchableOpacity>
               ) : (
                  <TouchableOpacity onPress={closeHandler}>
                     <Text style={[styles.closeBTN, styles.BTN]}>Close</Text>
                  </TouchableOpacity>
               )}
            </View>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
   },
   modal: {
      backgroundColor: '#fff',
      paddingVertical: 20,
      paddingHorizontal: 40,
      maxWidth: '80%',
      borderRadius: 15,
      alignItems: 'center',
   },
   text: {
      marginBottom: 15,
      fontSize: 18,
   },
   BTN: {
      color: 'blue',
      fontSize: 16,
   },
   closeBTN: {},
});
