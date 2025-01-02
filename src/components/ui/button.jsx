//import liraries
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import appColors from '../../theme/colors';

// create a component
const Button = props => {
  const {title, buttonType} = props;
  return (
    <Pressable
      style={[
        styles.container,
        buttonType == 'flat' ? styles.flatButton : styles.outlineButton,
      ]}
      {...props}>
      <Text
        style={[
          styles.title,
          buttonType == 'flat' ? styles.flatTitle : styles.outlineTitle,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 2,
    borderRadius: 10,
    backgroundColor: appColors.PRIMARY,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  flatButton: {
    backgroundColor: appColors.PRIMARY,
  },

  outlineButton: {
    backgroundColor: appColors.WHITE,
  },
  flatTitle: {
    color: appColors.WHITE,
  },

  outlineTitle: {
    color: appColors.PRIMARY,
  },
});

//make this component available to the app
export default Button;
