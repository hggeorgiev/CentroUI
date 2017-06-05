import * as d3 from "d3";

export class Keyboard {

    kbLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''],
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
            .attr('position', function(d, i, j) {
                let row = that.kbLayout.indexOf(d3.select(this.parentNode).datum());
                posArr.push({ x: 2.5 * i, y:  -1 * row, z: 2.5 * row})
            });

            keys.each( function(i, p) {
                this.setAttribute('position', posArr[p]);
                this.baseYPosition = posArr[p]['y'];
                console.log(posArr[p])
                console.log(this);
            });

        let buttons = keys.append('a-box')
            .attr('color', '#ffffff')
            .attr('opacity', 0.5)
            .attr('depth', 2)
            .attr('width', 2)
            .attr('height', 0.3);

        let letters = keys.append('a-plane')
            .attr('color', '#000000')
            .attr('rotation', '-90 0 0')
            .attr('text', d => `text: ${d}`)
            .attr('position', '0 0.2 0')
            .attr('curveSegments', 1);
    }




}


export default Keyboard;