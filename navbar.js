import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,


} from 'react-vr';


export default class CnNavbar extends React.Component {
    render() {

        // var children = this.props.children.map(function(item, i) {
        //     return React.addons.cloneWithProps(item, {
        //         isSelected: isSelected,
        //         selectItem: this.selectItem,
        //         key: item.props.key
        //     });
        // }, this);

        return (
            //Note changing row to column

            <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    height: 0.5,
                    backgroundColor: "#0275d8"
                  }}>

                {this.props.children}


            </View>



        );
    }
};

AppRegistry.registerComponent('CnNavbar', () => CnNavbar);
