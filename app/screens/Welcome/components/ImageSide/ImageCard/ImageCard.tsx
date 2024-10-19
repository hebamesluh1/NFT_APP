import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../../constant'

type Props = {
    image: any,
    style?: any
}

const ImageCard = ({ image, style }: Props) => {
    return (
        <View style={[Styles.imageCard,style&&{top:SIZES.medium+15}]}>
            <Image
                style={Styles.image}
                loadingIndicatorSource={image}
                accessibilityLabel='card images'
                accessible={true}
                source={image} />
        </View>
    )
}

export default ImageCard

const Styles = StyleSheet.create({
    imageCard: {
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        backgroundColor: COLORS.cardBG,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: SIZES.medium,
    }
})