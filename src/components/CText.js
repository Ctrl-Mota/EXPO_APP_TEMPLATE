import React from 'react'
import { Text as DefaultText } from 'react-native';
import { fontSize } from '../constants/theme';
import useCustomTheme from '../util/hooks/useCustomTheme';

const CText = (props) => {
    const { style, ...otherProps } = props;
    const { colors } = useCustomTheme();
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