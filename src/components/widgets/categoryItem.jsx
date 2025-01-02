import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slices/categoriesSlice';
import appColors from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constants';

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.activeCategoryContainer
          : styles.inactiveCategoryContainer,
      ]}>
      <Text
        style={
          selectedCategory == category
            ? styles.activeTitle
            : styles.inactiveTitle
        }>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 0.5,
    marginHorizontal: 5,
    maxHeight: screenHeight * 0.04,
    maxWidth: screenWidth * 0.6,
  },
  activeCategoryContainer: {
    backgroundColor: appColors.PRIMARY,
    borderColor: appColors.PRIMARY,
  },
  inactiveCategoryContainer: {
    backgroundColor: appColors.WHITE,
    fontWeight: '500',
  },
  activeTitle: {color: appColors.WHITE},
  inactiveTitle: {color: appColors.BLACK},
});
