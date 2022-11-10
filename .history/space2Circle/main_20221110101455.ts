function distance(circleOne: Circle, circleTwo: Circle, d: number): number {
    let distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}