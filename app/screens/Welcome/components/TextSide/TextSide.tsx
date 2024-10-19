import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES } from '../../../../constant'
import useAnimation from '../../../../hooks/useAnimation';


const TextSide = () => {
  const { fadeAnimation, TextAnimation } = useAnimation();

  useEffect(() => {
    TextAnimation()
  }, [TextAnimation])

  return (
    <Animated.View style={[Styles.textContainer, {
      opacity: fadeAnimation,
    }]}>
      <Text style={Styles.mainText}>
        Find,Collect and Sell Amazing NETs ,
      </Text>
      <Text style={Styles.subText}>
        Explore the top collection of ...
      </Text>
    </Animated.View>
  )
}

export default TextSide

const Styles = StyleSheet.create({
  textContainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 6,
  },
  mainText: {
    // fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge + 5,
    textAlign: "center",
    color: COLORS.white,
  },
  subText: {
    // fontFamily: FONTS.light,
    textAlign: "center",
    marginTop: SIZES.large,
    color: COLORS.gray,
  }
})