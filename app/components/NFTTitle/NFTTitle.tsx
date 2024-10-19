import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constant'


const NFTTitle = ({ name, creator, date }: { name: string, creator: string, date: string }) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.textName}>
            {name}
          </Text>
        </View>
        <View>
          <Text style={styles.textCreator}>
            {creator}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.textDate}>
          {date}
        </Text>
      </View>
    </View>
  )
}

export default NFTTitle

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  textName: {
    color: COLORS.white,
    // fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  textCreator: {
    color: COLORS.white,
    // fontFamily: FONTS.regular,
    fontSize: 16,
  },
  textDate: {
    // fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
})