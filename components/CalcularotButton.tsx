import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Pressable, Text } from 'react-native';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress: () => void;
    doubleSize?: boolean;
}

const CalcularotButton = ({
    label
    , color = Colors.darkGray
    , blackText = false
    , onPress
    , doubleSize = false }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button
                , backgroundColor: color
                , opacity: pressed ? 0.8 : 1
                , width: doubleSize ? (globalStyles.button.width * 2) : (globalStyles.button.width)
            })}
            onPress={onPress}>
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : Colors.textPrimary
            }}>{label}</Text>
        </Pressable>
    )
}

export default CalcularotButton