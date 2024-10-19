import { View, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import Button from '../Button'
import { HeartIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../../constant'


const NFTImage = ({ image, style, love, arrow, pressHandler }: { image: any, style: any, love?: any, arrow?: any, pressHandler?: () => void }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={image} style={style} resizeMode="cover" />
                {love && (
                    <Button
                        stylesButton={styles.buttonHeart}
                        Icon={<HeartIcon size={20} color={COLORS.second} />}
                    />
                )}
                {arrow && (
                    <Button
                        stylesButton={styles.buttonArrow}
                        Icon={<ArrowLeftIcon size={20} color={COLORS.second} />}
                        pressHandler={pressHandler && pressHandler}
                    />
                )}
            </View>
        </View>
    )
}

export default NFTImage

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
    },
    buttonHeart: {
        position: "absolute",
        top: StatusBar.currentHeight,
        right: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
    buttonArrow: {
        position: "absolute",
        top: StatusBar.currentHeight,
        left: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    }
})