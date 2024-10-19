import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { COLORS, SIZES } from '../../constant';
import Block from './Block/Block';

type Props = {
    address: string,
    tokenId: number,
    tokenSt: string,
    blockchain: string,
}

const NFTMoreInfo = ({ address, tokenId, tokenSt, blockchain }: Props) => {
    const data = [
        {
            id: 1,
            title: "Contract Address",
            text: address
        },
        {
            id: 2,
            title: "Token ID",
            text: tokenId
        },
        {
            id: 3,
            title: "Token Standerd",
            text: tokenSt
        }, {
            id: 4,
            title: "Blockchain",
            text: blockchain
        }
    ]
    return (
        <View>
            {data.map((item) => (
                <Fragment key={item.id} >
                    <Block
                        title={item.title}
                        text={item.text}
                    />
                </Fragment>
            ))}

        </View>
    );
};

export default NFTMoreInfo;

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
});