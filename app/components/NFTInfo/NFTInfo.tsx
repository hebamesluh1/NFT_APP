import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import { COLORS, SIZES } from '../../constant'
import { HeartIcon } from 'react-native-heroicons/outline'

const NFTInfo = ({ comments, views, price, love }: {
  price: number,
  views: string,
  comments: number,
  love?: any
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>{views}</Text>
        <Text>icons</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>{comments}</Text>
        <Text>icons</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>{price}</Text>
        <Text>icons</Text>
      </View>
      {love && <View>
        {/* <Button Icon={<HeartIcon size={20} color={COLORS.second} />} stylesButton={styles.buttonHeart} /> */}
      </View>}
    </View>
  )
}

export default NFTInfo

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: SIZES.xLarge,
    paddingVertical: 3,
    gap: 4,
  },
  text: {
    // fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  buttonHeart: {
    backgroundColor: COLORS.BG,
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.second,
  },
})