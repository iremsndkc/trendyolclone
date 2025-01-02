import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import appColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../../utils/routes';
import {ArrowRight2} from 'iconsax-react-native';

const WidgetTitle = ({title, seeAll, category}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => navigation.navigate(PRODUCTS, {category})}
          style={styles.seeAllContainer}>
          <Text style={styles.seeAll}>Tümünü Gör</Text>
          <ArrowRight2 size="25" color="#555555" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 14,
    color: appColors.BLACK,
    marginRight: 5, // İkon ile metin arasındaki boşluğu kısaltıyoruz
  },
});

export default WidgetTitle;
