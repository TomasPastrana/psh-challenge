

import { INPUT_FIELD_MIN_PHONE_DIGITS } from "utils/constants/inputFieldValidation"; 

const isEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const emailRules = () => {
    return {
        required: 'Debes ingresar los datos requeridos para continuar',
        pattern: { value: isEmailRegex, message: 'Ingresa una dirección de email válida.'},
    }
}

const isNameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/i;
export const nameRules = () => {
    return {
        required: 'Revisa este dato y vuelve a intentar.',
        pattern: { value: isNameRegex, message: 'Ingresa solo letras' }
    }
}

export const phoneRules = () => {
    return {
        required: "Por favor ingrese un número.",
        pattern: { value: /^[0-9]*/, message: "Debes ingresar solo números" },
        validate: phone => phone.length >= INPUT_FIELD_MIN_PHONE_DIGITS || 'El número ingresado no es válido. Intenta nuevamente.'
    }
}

export const passwordRules = (e) => {
    return {
        required: "La contraseña es requerida.",
        minLength: { value: 8, message: "Debe de contener 8 caracteres o más." }
    }
}

export const rutRules = (e) => {
    return {
        required: "El Rut es requerido."
    }
}

const isCardNumberRegex = /^[0-9 ]+$/i;
export const inputCardNumberRules = () => {
    return {
        required: "Ingresa una tarjeta de crédito válida.",
        pattern: { value: isCardNumberRegex, message: "Debes ingresar solo números" },
        validate: value => validateCardNumber(value) || 'Ingresa una tarjeta de crédito válida.'
    }
}

export const inputCardExpDate = () => {
    return {
        required: "Revisa este dato.",
        validate: {
            expiryDate: value => validateExpiryDate(value) || 'Revisa este dato.'
        }
    }
}

export const inputCardCVVRules = () => {
    return {
        required: "Revisa este dato."
    }
}

//////////////////////
const validateCardNumber = (number) => {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

const luhnCheck = (val) => {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) { //eslint-disable-line
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0; //eslint-disable-line
}

const validateExpiryDate  = (date)=>{
    let date_arr = date.split('/');
    let exYear = '20'+date_arr[1];
    let exMonth = date_arr[0];

    let today = new Date();

    let currentMonth = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2);
    let expiryMonth = exYear+'-'+exMonth;

    if (currentMonth > expiryMonth) {
        return false;
      } else {
        return true;
      }
}

export const textareaRules = ()=>{
    return {
        required: 'Debes enviar un mensaje para poder continuar.',
        minLength: { value: 10, message: 'Tu mensaje es demasiado corto como para poder continuar.' }
    }
}