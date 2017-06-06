import * as d3 from "d3";

export class Keyboard {

    kbLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', ''],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']
    ];

    constructor() {
        let scene = d3.select('a-scene');

        let that = this;

        let i = 0
        // TODO Make the id of the keyboard generic
        let boxes = scene
            .select('#keyboard')
            .selectAll('a-entity')
            .data(this.kbLayout)
            .enter();

        let rows = boxes.append('a-entity')
            .selectAll('.key')
            .data(d => d)
            .enter();



        let posArr = []
        let keys = rows.append('a-entity')
            .attr('class', 'key')
            .attr('data-key', d => d)
            .attr('position', (d, i, j) => {
                let el = document.querySelectorAll(`[data-key='${d}'`)[0];
                let row = that.kbLayout.indexOf(d3.select(el.parentNode).datum());
                posArr.push({ x: 2.5 * i, y:  -1 * row, z: 2.5 * row});
                return { x: 2.5 * i, y:  -1 * row, z: 2.5 * row}
            });

            keys.each((d, i) => {
                let el = document.querySelectorAll(`[data-key='${d}'`)[0];
                el.baseYPosition = posArr[i]['y']

            });

        let buttons = keys.append('a-box')
            .attr('color', '#ffffff')
            .attr('opacity', 0.5)
            .attr('depth', 2)
            .attr('width', 2)
            .attr('height', 0.3);

        let letters = keys.append('a-text')
            .attr('color', '#000000')
            .attr('rotation', '-90 0 0')
            .attr('value', (d) => `${d}`)
            .attr('position', '0 0.2 0')
            .attr('depth', 10)
            .attr('width', 10)

    }




}


export default Keyboard;