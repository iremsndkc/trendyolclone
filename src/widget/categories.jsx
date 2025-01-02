import {FlatList, StyleSheet, View, TextInput, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/categoriesActions';
import CategoryItem from '../components/widgets/categoryItem';
import appColors from '../theme/colors';
import {Sms, Notification} from 'iconsax-react-native';
import {screenHeight} from '../utils/constants';

const Categories = () => {
  const {categories} = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      {/* Arama kutusu ve ikonlar üstte */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Aramak İstediğiniz Ürünü Giriniz..."
          placeholderTextColor={appColors.GRAY}
        />
        <View style={styles.iconContainer}>
          <Pressable style={styles.iconButton}>
            <Sms size="24" color={appColors.BLACK} />
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Notification size="24" color={appColors.BLACK} />
          </Pressable>
        </View>
      </View>

      {/* Kategoriler */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.WHITE,
    marginVertical: 15,
    maxHeight: screenHeight * 0.5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, // Space between header and categories
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 45,
    width: 270,
    borderRadius: 30,
    backgroundColor: appColors.LIGHT_GRAY,
    paddingHorizontal: 15,
    fontSize: 14,
    color: appColors.BLACK,
    borderColor: appColors.GRAY,
    borderWidth: 1,
    transition: 'all 0.3s ease',
    paddingVertical: 0,
  },
  searchInputFocused: {
    borderColor: appColors.PRIMARY, // Active border color when focused
    shadowColor: appColors.PRIMARY,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 12, // Slightly increased space between icons
  },
});

export default Categories;
