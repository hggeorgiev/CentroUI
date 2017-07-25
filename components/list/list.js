import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    Plane,
} from 'react-vr';
import View from '../core/view'
import CnButton from '../button/button'

export default class CnList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alignment: this.props.alignment || 'column',
            visibleRows: 5,
            startRowsIndex: 0
        }
    }

    state = {
        data: []
    }

    componentWillMount() {
        const { data, visibleRows } = this.props
        var rows = data.length < this.state.visibleRows ? data.length : this.state.visibleRows
        if (visibleRows) {
            rows = data.length < visibleRows ? data.length : visibleRows
        }
        this.setState({ data, visibleRows: rows })
    }

    componentWillReceiveProps(nextProps) {
        const { data, visibleRows } = nextProps
        var rows = this.state.visibleRows
        if (visibleRows) {
            rows = data.length < visibleRows ? data.length : visibleRows
        }
        this.setState({ data, visibleRows: rows })
    }

    renderRows = () => {
        const { renderRow } = this.props
        const { data, visibleRows, startRowsIndex } = this.state
        var length = startRowsIndex + visibleRows > data.length ? data.length : startRowsIndex + visibleRows
        var rows = []
        if (renderRow) {
            for (var i = startRowsIndex; i < length; i++) {
                rows.push(renderRow(i, data[i]))
            }
        }
        return rows
    }

    scrollUp = () => {
        const { visibleRows, startRowsIndex } = this.state
        var index = startRowsIndex - visibleRows > 0 ? startRowsIndex - visibleRows : 0
        this.setState({ startRowsIndex: index })
    }

    scrollDown = () => {
        const { visibleRows, data, startRowsIndex } = this.state
        var index = startRowsIndex + visibleRows > data.length ? startRowsIndex : startRowsIndex + visibleRows
        this.setState({ startRowsIndex: index })
    }

    render() {
        const { startRowsIndex, visibleRows, data } = this.state
        var disabledUp = startRowsIndex == 0
        var disabledDown = startRowsIndex + visibleRows >= data.length
        return (
            <View {...this.props}>
                <CnButton onClick={this.scrollUp} disabled={disabledUp} bg="transparent">
                    <View hcenter h={0.1}>
                        <Text style={{fontSize: 0.09}}>{disabledUp ? " " : "..."}</Text>
                    </View>
                </CnButton>
                <View border={{width: 0.01}}>
                    {this.renderRows()}
                </View>
                <CnButton onClick={this.scrollDown} disabled={disabledDown} bg="transparent">
                    <View hcenter h={0.1}>
                        <Text style={{fontSize: 0.09}}>{disabledDown ? " " : "..."}</Text>
                    </View>
                </CnButton>
            </View>
        );
    }
};


