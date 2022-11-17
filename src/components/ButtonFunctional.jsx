// import react 
import React from 'react';

// di sini kita akan bikin sebuah button dengan
// menggunakan cara 'function

// const ButtonFunctional = ({props}) => {
const ButtonFunctional = ({text}) => {
    // secara otomatis sudah akan memanggil si 'render'
    // return <button>{props.text}</button>;

    // Bisa Pakai JS donk?

    // destructuring
    // sama aja seperti
    // const text = props.text;
    // const { text } = props;

    // Conditional Rendering
    // Apabila Props text nya tidak ada
    // Maka kita akan memberikan tulisan "Button Functional"

    // TERNARY OPERATOR
    return <button>{text ? text : "Button Functional"}</button>;
}

// suapay bisa dipakai ditempat lain
export default ButtonFunctional;