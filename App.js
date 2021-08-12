import React, {useState, useMemo} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Field from './components/Field';
import CustomButton from './components/CustomButton';
import Settings from './components/Settings';
import settingsIcon from './assets/images/Settings.png';

export default function App() {
   const [fieldSize, setFieldSize] = useState({x: 8, y: 8});
   const [mines, setMines] = useState(10);
   const [showSettings, setShowSettings] = useState(false);
   const [reload, setReload] = useState(false);

   const settingsButtonHandler = () => {
      setShowSettings(prevState => !prevState);
   };
   const reloadHandler = () => {
      setReload(!reload);
   };

   const changeParams = (x, y, mines) => {
      x > 11 && (x = 11);
      y > 11 && (y = 11);
      setFieldSize({
         x: x || 10,
         y: y || 10,
      });
      setMines(mines || 12);
   };

   return (
      <ScrollView style={styles.main}>
         <View style={styles.field}>
            {useMemo(() => {
               return (
                  <Field fieldSize={fieldSize} mines={mines} reload={reload} />
               );
            }, [fieldSize, mines, reload])}
         </View>

         <View style={styles.info}>
            <Text style={styles.text}>
               Field size: {fieldSize.x}x{fieldSize.y}, {mines} mines
            </Text>

            <View style={styles.buttons}>
               <CustomButton content="Re" pressHandler={reloadHandler} />
               <CustomButton
                  pressHandler={settingsButtonHandler}
                  image={settingsIcon}
               />
            </View>
         </View>
         {showSettings && <Settings submitHandler={changeParams} />}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   main: {
      padding: 5,
      backgroundColor: '#fff',
      flex: 1,
   },
   field: {
      marginBottom: 10,
      alignSelf: 'center',
   },
   info: {
      alignItems: 'center',
      marginBottom: 30,
   },
   text: {
      fontSize: 18,
      marginBottom: 15,
   },
   buttons: {
      flexDirection: 'row',
   },
   inputs: {},
   input: {
      padding: 4,
      borderColor: '#b1b1b1',
      borderWidth: 2,
      borderRadius: 10,
      marginVertical: 5,
      width: '30%',
   },
});
