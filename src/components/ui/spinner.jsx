import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={appColors.GRAY} size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Spinner;
