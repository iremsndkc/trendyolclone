import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../utils/routes';

const Introduction = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(PRODUCTS)}
        style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty1614/tr-event-banner/d03ed671-9211-4629-9769-230a00a4ad18tr_3210572.jpeg',
          }}
          style={styles.image}
        />

        <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty1608/pimWidgetApi/mobile_20241204064832_3208599EvAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpYasamMobile202412031703.jpg',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty1617/tr-event-banner/780c9ce4-43e3-43a9-b639-e9cf0e2b7022tr_3211163.jpeg',
          }}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
  },
  imageContainer: {
    borderRadius: 15,
    overflow: 'hidden', // Ensures image corners are rounded
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
    marginHorizontal: 15,
  },
  image: {
    width: 380, // Fixed width for better control
    height: 220, // Fixed height
    resizeMode: 'contain', // Ensures the image fits inside the container
    padding: 10,
  },
});

export default Introduction;
