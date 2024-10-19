import { Animated, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

import ImageCard from './ImageCard'

import { SIZES } from '../../../../constant'
import useAnimation from '../../../../hooks/useAnimation';

import nft06 from '../../../../assets/images/nft06.jpg';
import nft03 from '../../../../assets/images/nft03.jpg';
import nft08 from '../../../../assets/images/nft08.jpg';


const ImageSide = () => {
    const { AnimationSequencesHandler, fadeAnimation, moveAnimation } = useAnimation();
    useEffect(() => {
        AnimationSequencesHandler()
    }, [AnimationSequencesHandler])
    return (
        <Animated.View style={[Styles.imageContainer, {
            opacity: fadeAnimation,
            transform: moveAnimation.getTranslateTransform()
        }]}>
            <ImageCard image={nft06} />
            <ImageCard image={nft08} style />
            <ImageCard image={nft03} />
        </Animated.View>
    )
}

export default ImageSide

const Styles = StyleSheet.create({
    imageContainer: {
        top: -SIZES.medium,
        flexDirection: "row",
        gap: SIZES.small,
    }
})