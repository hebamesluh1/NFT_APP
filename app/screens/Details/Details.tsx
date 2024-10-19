import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NFTAvatars, NFTImage, NFTInfo, NFTMoreInfo, NFTTitle } from '../../components'

type Props = {
  route:any,
  navigation: any
}

const Details = ({ route, navigation }: Props) => {
  const { nftcard } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NFTImage
          image={nftcard.image}
          style={styles.imageStyle}
          love
          arrow
          pressHandler={() => navigation.goBack()}
        />
        <NFTAvatars avatars={nftcard.avatars} />
        <NFTTitle
          name={nftcard.name}
          creator={nftcard.creator}
          date={nftcard.date}
        />
        <NFTInfo
          price={nftcard.price}
          views={nftcard.views}
          comments={nftcard.comments}
          love
        />
        <NFTMoreInfo
          address={nftcard.address}
          tokenId={nftcard.tokenId}
          tokenSt={nftcard.tokenSt}
          blockchain={nftcard.blockchain}
        />
      </View>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {

  },
  imageStyle: {

  }
})