import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

import avatar from '../../assets/images/avatar03.jpg'
import { COLORS, SIZES } from '../../constant'


const HeaderHome = ({ searchHandler }: { searchHandler: (value: string) => void }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Image source={avatar} resizeMode='contain' style={{ width: 80, height: 80, borderRadius: 50 }} />
                </View>
                <View>
                    <Text style={styles.userText}>Heba Ayman Musleh</Text>
                </View>
                <View>
                    <Text>Creator</Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <View>
                    <TextInput
                        placeholder='Enter your nft search'
                        placeholderTextColor="#fff"
                        onChangeText={searchHandler}
                        style={{ color: "#fff" }}
                    />
                </View>

            </View>
        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    container: {
        padding: SIZES.small,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 10,
    },
    userText: {
        color: COLORS.white,
        // fontFamily: FONTS.semiBold,
        fontSize: SIZES.xLarge,
    },
    searchContainer: {
        width: "100%",
        borderRadius: SIZES.small,
        backgroundColor: COLORS.cardBG,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 30,
    },
})