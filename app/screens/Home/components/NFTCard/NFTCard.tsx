import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { typesOfData } from '../../../../Types/types'
import { COLORS, SIZES } from '../../../../constant'
import { NFTAvatars, NFTImage, NFTInfo, NFTTitle } from '../../../../components'
import { useNavigation } from '@react-navigation/native'


const NFTCard = ({ nftcard }: { nftcard: typesOfData }) => {

    // const navigation = useNavigation();

    const handlerPress:()=>void = () => {
        // navigation.navigate("Details", { nftcard })
        console.log("test")
    }
    return (
             <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={handlerPress}>
                    <NFTImage image={nftcard.image} style={styles.imageStyles} />
                </TouchableOpacity>
                 <View style={styles.cardTop}>
                    <NFTAvatars avatars={nftcard.avatars} />
                </View>
                <View style={styles.cardBottom}>
                    <NFTTitle name={nftcard.name} creator={nftcard.creator} date={nftcard.date} />
                    <View style={{ marginTop: SIZES.medium + 5 }}>
                        <NFTInfo
                            comments={nftcard.comments}
                            views={nftcard.views}
                            price={nftcard.price}
                            love
                        />
                    </View>
                </View> 
            </SafeAreaView> 
    )
}

export default NFTCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.cardBG,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.xLarge,
        marginVertical: SIZES.small - 5,
        marginHorizontal: 14,
        padding: 12,
    },
    cardTop: {
        width: "100%",
        paddingHorizontal: SIZES.medium,
        marginTop: -30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardBottom: {
        width: "100%",
        padding: SIZES.medium
    },
    imageStyles: {
        width: "100%",
        height: 300,
        borderRadius: 30,
    },
})