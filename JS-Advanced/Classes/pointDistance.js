class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        return Math.sqrt(Math.pow((secondPoint.x - firstPoint.x), 2) + Math.pow((secondPoint.y - firstPoint.y), 2));
    }
}

