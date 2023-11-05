import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';

interface RoundedButtonProps {
    style?: object;
    textStyle?: object;
    size?: number;
    onPress?: () => void;
    title: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ style = {}, textStyle = {}, size = 125, onPress, title }) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
            <Text style={[styles(size).text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = (size) => ({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        borderWidth: 2,
    },
    text: {
        color: colors.white,
        fontSize: size / 3,
    },
});

export default RoundedButton;
