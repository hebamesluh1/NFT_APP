import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constant'

type Props = {
    title: string,
    text: any
}

const Block = ({ title, text }: Props) => {
    return (
        <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{text}</Text>
        </View>
    )
}

export default Block

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.cardBG,
        marginVertical: SIZES.small - 4,
    },
    title: {
        color: COLORS.white,
    },
    value: {
        color: COLORS.gray,
        marginBottom: SIZES.small - 2,
    },
})