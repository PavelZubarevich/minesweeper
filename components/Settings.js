import React, {useState} from 'react';
import {
   StyleSheet,
   View,
   Text,
   TextInput,
   TouchableOpacity,
} from 'react-native';

export default function Settings({submitHandler}) {
   const [values, setValues] = useState({x: '', y: '', mines: ''});

   const changeHandler = (target, value) => {
      if (target === 'x') {
         setValues(prevState => ({
            ...prevState,
            x: value,
         }));
      }
      if (target === 'y') {
         setValues(prevState => ({
            ...prevState,
            y: value,
         }));
      }
      if (target === 'mines') {
         setValues(prevState => ({
            ...prevState,
            mines: value,
         }));
      }
   };

   return (
      <View style={styles.main}>
         <View style={styles.title}>
            <Text style={styles.text}>Settings</Text>
         </View>
         <View style={styles.inputs}>
            <Text style={styles.text}>X: </Text>
            <TextInput
               style={styles.input}
               keyboardType="number-pad"
               maxLength={2}
               onChange={({nativeEvent}) =>
                  changeHandler('x', nativeEvent.text)
               }
               value={values.x}
            />
            <Text style={styles.text}>Y: </Text>
            <TextInput
               style={styles.input}
               keyboardType="number-pad"
               maxLength={2}
               onChange={({nativeEvent}) =>
                  changeHandler('y', nativeEvent.text)
               }
               value={values.y}
            />
            <Text style={styles.text}>Mines: </Text>
            <TextInput
               style={styles.input}
               keyboardType="number-pad"
               maxLength={2}
               onChange={({nativeEvent}) =>
                  changeHandler('mines', nativeEvent.text)
               }
               value={values.mines}
            />
         </View>
         <View style={styles.btn}>
            <TouchableOpacity
               onPress={() => submitHandler(values.x, values.y, values.mines)}>
               <Text style={styles.text}>Save</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   main: {},
   title: {
      alignItems: 'center',
      marginBottom: 20,
   },
   text: {
      fontSize: 18,
   },
   inputs: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
   },
   input: {
      height: 30,
      width: 60,
      paddingVertical: 2,
      paddingHorizontal: 10,
      marginRight: 15,
      borderColor: '#b1b1b1',
      borderWidth: 2,
      borderRadius: 8,
      color: 'black',
   },
   btn: {
      alignSelf: 'center',
      paddingHorizontal: 15,
      paddingVertical: 2,
      margin: 5,
      borderColor: '#b1b1b1',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: '#d5d5d5',
   },
});
