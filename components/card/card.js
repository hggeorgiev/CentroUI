import React from 'react';
import {

    asset,
    Pano,
    Text,
    View,
    Plane,
    StyleSheet


} from 'react-vr';


const styles = StyleSheet.create({
    base: {
        display: 'flex',
        flex: 1,
        margin: 0.02,
        minHeight: 0.5,
        maxWidth: 2,
        borderWidth: 0.020,
        backgroundColor: "#eceeef"

    },
});

const DEFAULT_ACTIVE_BORDER_COLOR = "#0275d8";
const DEFAULT_INACTIVE_BORDER_COLOR = "#eceeef";

class CnCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentBorderColor: DEFAULT_INACTIVE_BORDER_COLOR,
            inactiveBorderColor: DEFAULT_INACTIVE_BORDER_COLOR,
            activeBorderColor: this.props.borderColor || DEFAULT_ACTIVE_BORDER_COLOR,
            hovered: false
        };

    }


    render() {


        const {hover} = this.props;
        const {activeBorderColor, inactiveBorderColor, currentBorderColor} = this.state;

        console.log(currentBorderColor)

        return (
            //Note changing row to column

            <View style={[styles.base, {borderColor: currentBorderColor } ]}
                  onEnter={hover ? () => this.setState({ hovered: true, currentBorderColor: activeBorderColor }) : null}
                  onExit={hover ? () => this.setState({ hovered: false, currentBorderColor: inactiveBorderColor}) : null}>
                {this.props.children}
            </View>
        );
    }
}
;


export default CnCard