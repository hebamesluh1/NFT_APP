import { Animated, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'


import Button from '../../../../components/Button'


import { COLORS, SIZES } from '../../../../constant'
import useAnimation from '../../../../hooks/useAnimation'


const ButtonSide = () => {
  const { moveAnimation2, ButtonAnimation } = useAnimation();

  const pressHandler = () => {
    console.log("click")
  }

  useEffect(() => {
    ButtonAnimation()
  }, [ButtonAnimation])
  return (
    <Animated.View style={[Styles.buttonContainer, {
      transform: [{
        translateY: moveAnimation2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200]
        })
      }]
    }]}>
      <Button title="Get Start" stylesButton={Styles.button} stylesText={Styles.textButton} pressHandler={pressHandler} />
    </Animated.View>
  )
}

export default ButtonSide

const Styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xLarge + 10,
    marginVertical: SIZES.xLarge,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    color: COLORS.white,
    // fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
})