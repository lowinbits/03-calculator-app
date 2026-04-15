import { Operator } from "@/enums/enumCalculator";
import { useEffect, useRef, useState } from "react";

export const useCalculator = () => {

    const [formula, setFormula] = useState('');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    useEffect(() => {
        //TODO: Consultat subResultado
        setFormula(number);
    }, [number]);



    const lastOperation = useRef<Operator>();

    const buildNumber = (numberString: string) => {
        console.log('numberString', { numberString });
    }

    return {
        //Props
        formula,
        number,
        prevNumber,

        //Methods
        buildNumber
    };

}