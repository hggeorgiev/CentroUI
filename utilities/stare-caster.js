

export default class StareRayCaster  {

    constructor() {

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





