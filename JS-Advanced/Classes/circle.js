class Circle {
    constructor(radius) {
        this.radius = +radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    diameter(value) {
        this.radius = value / 2;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}