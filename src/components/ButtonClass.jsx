// Import si react nya !
import React from 'react';

// mendeklarasikan sebuah component dengan nama ButtonClass
class ButtonClass extends React.Component {
    // Cara 1
    // constructor(props) {
    //     super(props);
    // }

    // render = menampilkan tampilan 'html
    render() {
        return (<button>
            {/* Disini Kita Kasih Conditional Rendering */}
            {this.props.text ? this.props.text : "Button Class"}
            </button>)
    }
}

// export
// module js
// export default 
export default ButtonClass;
