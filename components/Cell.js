import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import mineImage from '../assets/images/Mine.png';
import flagImage from '../assets/images/Flag.png';

export default function Cell({params, checkCell}) {
   const {main, image, text, blue, green, red, mainClose} = styles;
   const {isMine, number, isFlag, isOpen} = params;
   const [flag, setFlag] = useState(isFlag);
   const [open, setOpen] = useState(isOpen);

   const longPressHandler = () => {
      setFlag(!flag);
      params.isFlag = !params.isFlag;
   };

   const pressHandler = () => {
      if (!flag) {
         setOpen(true);
         checkCell(params);
      }
   };

   const selectView = () => {
      if (flag && !open) {
         return (
            <View style={[main, mainClose]}>
               <Image source={flagImage} style={image} />
            </View>
         );
      } else if (open) {
         return (
            <View style={main}>
               {isMine ? (
                  <Image source={mineImage} style={image} />
               ) : (
                  <Text
                     style={[
                        text,
                        number === 1 ? blue : number === 2 ? green : red,
                     ]}>
                     {number === 0 ? '' : number}
                  </Text>
               )}
            </View>
         );
      } else {
         return <View style={[main, mainClose]}></View>;
      }
   };

   return (
      <TouchableHighlight onPress={pressHandler} onLongPress={longPressHandler}>
         {selectView()}
      </TouchableHighlight>
   );
}

const styles = StyleSheet.create({
   main: {
      width: 35,
      height: 35,
      borderColor: '#b5b5b5',
      borderRadius: 1,
      borderWidth: 2,
      backgroundColor: '#e8e8e8',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
   },
   mainClose: {
      backgroundColor: '#c9c9c9',
   },
   image: {
      width: '100%',
      height: '100%',
   },
   text: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   blue: {
      color: 'blue',
   },
   green: {
      color: 'red',
   },
   red: {
      color: 'red',
   },
});

Cell.propTypes = {
   isMine: PropTypes.bool,
   number: PropTypes.number,
};
