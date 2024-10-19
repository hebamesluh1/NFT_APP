import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, DATA } from '../../constant'
import { typesOfData } from './../../Types/types';
import { NFTCard } from './components';
import { HeaderHome } from '../../components';

const Home = () => {
  const [inftsData, setInftsData] = useState<typesOfData>(DATA);

  const searchHandler: (value: string) => void = (value) => {
    // if (value) {
    //   const filterData = inftsData.filter((nft) => nft.name.toLowerCase().includes(value.toLowerCase()));
    //   setInftsData(filterData)
    // } else {
    //   setInftsData(inftsData)
    console.log("hello", value)
    // }
  }

  const NotFoundNFT = () => {
    return (
      <View>
        <Text>Oops !! No Result</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <HeaderHome searchHandler={searchHandler} />
      {inftsData.length === 0 ? (
        <NotFoundNFT />
      ) : (
        <View>
          <FlatList
            data={inftsData}
            renderItem={({ item }) => <NFTCard nftcard={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    paddingTop: StatusBar.currentHeight
  }
})