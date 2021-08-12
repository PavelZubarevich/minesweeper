import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Cell from './Cell';
import {
   getReadyField,
   getNearCells,
   openClearCells,
   openAll,
} from '../logic/logic';

export default function Field({fieldSize, mines, reload}) {
   const [field, setField] = useState();
   const [loading, setLoading] = useState(true);

   const getNewField = () => {
      setField(getReadyField(fieldSize, mines));
   };

   useEffect(() => {
      getNewField();
      setLoading(false);
   }, [fieldSize, mines, reload]);

   const checkCell = params => {
      if (params.isMine) {
         setField(() => {
            return [...openAll(field)];
         });
      } else if (params.number === 0) {
         setField(() => {
            return [...openClearCells(params, field)];
         });
      } else {
         params.isOpen = true;
      }
   };

   return (
      <View>
         {!loading &&
            field.map(item => (
               <View style={styles.line} key={Math.random().toString()}>
                  {item.map(cell => (
                     <Cell
                        params={cell}
                        key={String(cell.y) + String(cell.x)}
                        checkCell={checkCell}
                     />
                  ))}
               </View>
            ))}
      </View>
   );
}

const styles = StyleSheet.create({
   line: {
      flexDirection: 'row',
   },
});
