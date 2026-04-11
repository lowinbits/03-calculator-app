import CalcularotButton from '@/components/CalcularotButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/theme'
import { globalStyles } from '@/styles/global-styles'
import React from 'react'
import { View } from 'react-native'

const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>50 x 50</ThemeText>
                <ThemeText variant='h2'>250</ThemeText>
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
                    onPress={() => console.log('7')} />
                <CalcularotButton
                    label="8"
                    onPress={() => console.log('8')} />
                <CalcularotButton
                    label="9"
                    onPress={() => console.log('9')} />
                <CalcularotButton
                    label="x"
                    color={Colors.orange}
                    onPress={() => console.log('x')} />
            </View>

            <View style={globalStyles.row}>
                {/* Fila 3 */}
                <CalcularotButton
                    label="4"
                    onPress={() => console.log('4')} />
                <CalcularotButton
                    label="5"
                    onPress={() => console.log('5')} />
                <CalcularotButton
                    label="6"
                    onPress={() => console.log('6')} />
                <CalcularotButton
                    label="-"
                    color={Colors.orange}
                    onPress={() => console.log('-')} />
            </View>

            <View style={globalStyles.row}>
                {/* Fila 4 */}
                <CalcularotButton
                    label="1"
                    onPress={() => console.log('1')} />
                <CalcularotButton
                    label="2"
                    onPress={() => console.log('2')} />
                <CalcularotButton
                    label="3"
                    onPress={() => console.log('3')} />
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
                    onPress={() => console.log('0')} />
                <CalcularotButton
                    label="."
                    onPress={() => console.log('.')} />
                <CalcularotButton
                    label="="
                    color={Colors.orange}
                    onPress={() => console.log('=')} />
            </View>

        </View >
    )
}

export default CalculatorApp