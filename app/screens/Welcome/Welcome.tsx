import {  StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ButtonSide, ImageSide, TextSide } from './components'
import { COLORS, SIZES } from '../../constant'


const Welcome = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <ImageSide />
            <TextSide />
            <ButtonSide />
        </SafeAreaView>
    )
}

export default Welcome

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.small + 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.BG,
        paddingTop: StatusBar.currentHeight
    },
})