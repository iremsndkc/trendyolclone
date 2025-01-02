import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import ProductItem from '../components/products/productItem';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../store/actions/productsActions';
import appColors from '../theme/colors';

const ForYou = ({item}) => {
  const {forYouProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({limit: 4, category: "women's clothing"}));
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="women's clothing"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.listContent}
        data={forYouProducts}
        renderItem={({item}) => (
          <ProductItem product={item} category="women's clothing" />
        )}
        keyExtractor={item => item.id.toString()} // Ensure unique key for each item
        initialNumToRender={5}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F68A1F', // Soft gray background
    paddingHorizontal: 15, // Increased horizontal padding for better spacing
    marginVertical: 20, // More space between sections
  },
  listContent: {
    alignItems: 'center', // Centers the items horizontally
    paddingVertical: 15, // Added more vertical padding
  },
  title: {
    fontSize: 20, // Increased font size for better visibility
    fontWeight: 'bold',
    color: appColors.DARK_BLUE, // Dark blue color for title for a professional look
    marginBottom: 15, // More space between title and list
  },
});

export default ForYou;
