import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
    pressHandler?: () => void,
    Icon?: any,
    stylesText?: StyleProp<TextStyle>,
    title?: string,
    stylesButton?: StyleProp<ViewStyle>
}

const Button = ({ pressHandler, Icon, stylesText, title, stylesButton }: Props) => {

    const renderContent = () => {
        if (!Icon) {
            return <Text style={stylesText}>
                {title && title}
            </Text>
        } else {
            return Icon;
        }
    }
    return (
        <TouchableOpacity onPress={pressHandler} style={stylesButton}>
            {renderContent()}
        </TouchableOpacity>
    )
}

export default Button
