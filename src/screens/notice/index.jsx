import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';

const Notice = () => {
  return (
    <View style={styles.container}>
      <Text>Notice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.WHITE,
  },
});

export default Notice;
