import {RayCaster} from 'ovrui';

export default class StareRayCaster extends RayCaster {

    constructor() {
        super();
    }

    getType() {
        return "3dof"
    }

    getRayOrigin() {
        return [0, 0, 0]
    }

    getRayDirection() {
        return [0, 0, -1]
    }

    drawsCursor() {
        return true
    };
}





