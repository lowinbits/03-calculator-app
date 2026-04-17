import { Operator } from "@/enums/enumCalculator";
import { useEffect, useRef, useState } from "react";

export const useCalculator = () => {

    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>();


    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }

    }, [number]);


    useEffect(() => {
        //TODO: Consultat subResultado
        //setFormula(number);
    }, [number]);



    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('');

        lastOperation.current = undefined;
    }

    //Cambio de signo
    const toogleSign = () => {

        return number.includes('-') ? setNumber(number.replace('-', '')) : setNumber('-' + number);

    }

    //el delete
    const deleteLast = () => {

        if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
            return setNumber('0');
        }

        if (number.length > 1) {
            return setNumber(number.slice(0, -1));
        }

    }

    const setLastNumber = () => {
        //TODO Calcular resultado

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0');
    }

    //division
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    //multiplicación
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    //resta
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    //suma
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const buildNumber = (numberString: string) => {
        //Verificar si ya existe el punto decimal

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            //Evaluar si es otro cero y hay un punto

            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //Evaluar si es diferente de cero, no hay punto y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //Evitar 0000.000
            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            setNumber(number + numberString);
        }

        setNumber(number + numberString);

        console.log('numberString', { numberString });
    }

    return {
        //Props
        formula,
        number,
        prevNumber,

        //Methods
        buildNumber,
        clean,
        toogleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation
    };

}