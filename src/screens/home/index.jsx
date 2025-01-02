import {View, FlatList} from 'react-native';
import React from 'react';
import widget from '../../widget/widgets.json';
import Categories from '../../widget/categories';
import BestSeller from '../../widget/bestSeller';
import ForYou from '../../widget/forYou';
import screenStyle from '../../styles/screenStyle';
import Introduction from '../../widget/introduction';
import FlashSale from '../../widget/flashSale';
import SpecialBrands from '../../widget/specialBrands';

const HomeScreen = ({navigation}) => {
  const widgetItem = ({item}) => {
    switch (item.name) {
      case 'categories':
        return <Categories item={item} />;
      case 'introduction':
        return <Introduction item={item} />;
      case 'flashSale':
        return <FlashSale item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'specialBrands':
        return <SpecialBrands item={item} />;
      case 'forYou':
        return <ForYou item={item} />;
    }
  };
  return (
    <View style={screenStyle.container}>
      <FlatList data={widget} renderItem={widgetItem} />
    </View>
  );
};

export default HomeScreen;
