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
      width: 1,
      display: 'flex',
      flex: 1,
      margin: 0.02,
      minHeight: 0.5,
      maxWidth: 2
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

    getPadding() {
        var { p, pl, pr, pt, pb, smp, mdp, lgp, xlp,
            smpl, smpr, smpt, smpb, mdpl, mdpr, mdpt, mdpb, lgpl, lgpr, lgpt, lgpb,
            xlpr, xlpl, xlpt, xlpb } = this.props
        const sm = 0.02
        smp = smp ? sm : null
        smpl = smpl ? sm : null
        smpr = smpr ? sm : null
        smpb = smpb ? sm : null
        smpt = smpt ? sm : null
        const md = 0.05
        mdp = mdp ? md : null
        mdpl = mdpl ? md : null
        mdpr = mdpr ? md : null
        mdpb = mdpb ? md : null
        mdpt = mdpt ? md : null
        const lg = 0.07
        lgp = lgp ? lg : null
        lgpl = lgpl ? lg : null
        lgpr = lgpr ? lg : null
        lgpb = lgpb ? lg : null
        lgpt = lgpt ? lg : null
        const xl = 0.1
        xlp = xlp ? xl : null
        xlpl = xlpl ? xl : null
        xlpr = xlpr ? xl : null
        xlpb = xlpb ? xl : null
        xlpt = xlpt ? xl : null
        var padding = smp || mdp || lgp || xlp || p
        var style = {
            padding,
            paddingTop: pt || smpt || mdpt || lgpt || xlpt || padding,
            paddingBottom: pb || smpb || mdpb || lgpb || xlpb || padding,
            paddingLeft: pl || smpl || mdpl || lgpl || xlpl || padding,
            paddingRight: pr || smpr || mdpr || lgpr || xlpr || padding
        }
        return style
    }

    getItemsAlignment() {
        const { row, vstart, vend, hstart, hend, spread, push } = this.props
        var style = { flexDirection: row ? 'row' : "column" }

        var vprop = row ? 'alignItems' : "justifyContent"
        style[vprop] = "center"
        if (vstart) {
            style[vprop] = "flex-start"
        }
        if (vend) {
            style[vprop] = "flex-end"
        }

        var hprop = row ? "justifyContent" : 'alignItems'
        style[hprop] = "center"
        if (hstart) {
            style[hprop] = "flex-start"
        }
        if (hend) {
            style[hprop] = "flex-end"
        }
        if (spread) {
            style['justifyContent'] = "space-around"
        }
        if (push) {
            style['justifyContent'] = "space-between"
        }
        return style
    }

    getBorderStyle() {
        const { border } = this.props
        var style = {}
        if (border) {
            style = {
                borderColor: border.color,
                borderWidth: border.width,
                borderTopWidth: border.top || border.width,
                borderBottomWidth: border.bottom || border.width,
                borderLeftWidth: border.left || border.width,
                borderRightWidth: border.right || border.width
            }
        }
        return style
    }


    render() {
        const { hover, hoverColor, bg } = this.props
        const { currentBackgroundColor } = this.state


        // TODO have setters for height and width
        return (
            <View style={{
                ...styles.base,
                backgroundColor: currentBackgroundColor,
                ...this.getBorderStyle(),
                ...this.getItemsAlignment(),
                ...this.getPadding(),
            }}
                onEnter={hover ? () => this.setState({ hovered: true, currentBackgroundColor: hoverColor || DEFAULT_HOVER_COLOR }) : null}
                onExit={hover ? () => this.setState({ hovered: false, currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR }) : null}>
                {this.props.children}
            </View>
        );
    }
}
;


export default CnCard