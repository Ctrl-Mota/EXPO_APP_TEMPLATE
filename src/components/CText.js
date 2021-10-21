import React from 'react'
import { Text as DefaultText } from 'react-native';
import { useTheme } from 'react-native-paper';
import { fontSize } from '../constants/theme';

const CText = (props) => {
    const { style, ...otherProps } = props;
    const { colors } = useTheme();
    
    return (
        <DefaultText
            style={[
                {
                    fontSize: fontSize.mini,
                    fontFamily: 'space-mono',
                    color: colors.text
                },
                style
            ]} {...otherProps} />
    )
}
export default CText