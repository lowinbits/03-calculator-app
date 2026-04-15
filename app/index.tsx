import CalcularotButton from '@/components/CalcularotButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {

    const { formula, number, buildNumber } = useCalculator();

    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>{formula}</ThemeText>
                <ThemeText variant='h2'>{number}</ThemeText>
            </View>

            {/* Filas de botones */}
            <View style={globalStyles.row}>
                {/* Fila 1 */}
                <CalcularotButton
                    label="C"
                    blackText
                    color={Colors.lightGray}
                    onPress={() => console.log('C')} />
                <CalcularotButton
                    label="+/-"
                    blackText
                    color={Colors.lightGray}
                    onPress={() => console.log('+/-')} />
                <CalcularotButton
                    label="del"
                    blackText
                    color={Colors.lightGray}
                    onPress={() => console.log('del')} />
                <CalcularotButton
                    label="÷"
                    color={Colors.orange}
                    onPress={() => console.log('÷')} />
            </View>

            <View style={globalStyles.row}>
                {/* Fila 2 */}
                <CalcularotButton
                    label="7"
                    onPress={() => buildNumber('7')} />
                <CalcularotButton
                    label="8"
                    onPress={() => buildNumber('8')} />
                <CalcularotButton
                    label="9"
                    onPress={() => buildNumber('9')} />
                <CalcularotButton
                    label="x"
                    color={Colors.orange}
                    onPress={() => console.log('x')} />
            </View>

            <View style={globalStyles.row}>
                {/* Fila 3 */}
                <CalcularotButton
                    label="4"
                    onPress={() => buildNumber('4')} />
                <CalcularotButton
                    label="5"
                    onPress={() => buildNumber('5')} />
                <CalcularotButton
                    label="6"
                    onPress={() => buildNumber('6')} />
                <CalcularotButton
                    label="-"
                    color={Colors.orange}
                    onPress={() => console.log('-')} />
            </View>

            <View style={globalStyles.row}>
                {/* Fila 4 */}
                <CalcularotButton
                    label="1"
                    onPress={() => buildNumber('1')} />
                <CalcularotButton
                    label="2"
                    onPress={() => buildNumber('2')} />
                <CalcularotButton
                    label="3"
                    onPress={() => buildNumber('3')} />
                <CalcularotButton
                    label="+"
                    color={Colors.orange}
                    onPress={() => console.log('+')} />
            </View>

            <View style={globalStyles.row}>
                {/* Fila 5 */}
                <CalcularotButton
                    label="0"
                    doubleSize
                    onPress={() => buildNumber('0')} />
                <CalcularotButton
                    label="."
                    onPress={() => buildNumber('.')} />
                <CalcularotButton
                    label="="
                    color={Colors.orange}
                    onPress={() => console.log('=')} />
            </View>

        </View >
    )
}

export default CalculatorApp