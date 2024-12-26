import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';

const RowComponent = ({children, rowStyle, flex, backgroundColor, width, height, alignItems, touchable, onPress }) => {

  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowStyles: {
          flexDirection: 'row',
          flex: flex,
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          alignItems: alignItems,
          ...rowStyle,
        },
      }),
    [flex, rowStyle, backgroundColor,width,height,alignItems],
  );

  return touchable 
  ? <TouchableOpacity style={styles.rowStyles} onPress={onPress}>{children}</TouchableOpacity> 
  :  <View style={styles.rowStyles}>{children}</View>;
}

export default RowComponent;
