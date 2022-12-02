// import React, { PureComponent } from 'react'
// import Button from '@material-ui/core/Button'
// class Button_react extends PureComponent {
//     render() {
//         let variation = this.props.variation ? (this.props.variation) : ('contained')
//         return (
//             <>
//                 <Button variant={variation}  color={this.props.color} >{this.props.name_of_btn}</Button>
//                 <Button variant={variation} color={this.props.color} 
//                 onClick={() => this.props.function()} startIcon={this.props.icon}>{this.props.name_of_btn}</Button>

//             </>
//         )
//     }
// }

// export default Button_react;

import React, { PureComponent } from 'react'
import Button from '@material-ui/core/Button'
class Button_react extends PureComponent {
    render() {
        let enable_button = this.props.disable_button ? (this.props.disable_button) : (false)
        let variation = this.props.variation ? (this.props.variation) : ('contained')
        return (
            <>
                <Button variant={variation} color={this.props.color} disabled={enable_button} onClick={() => this.props.function()} startIcon={this.props.icon}>{this.props.name_of_btn}</Button>
            </>
        )
    }
}

export default Button_react;