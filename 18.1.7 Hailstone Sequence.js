function start() {
    var num = readInt("Enter number: ");
    var steps = hailstone(num);
    println("It took " + steps + " steps to complete.");
}
function hailstone(n) {
    var steps = 0;

    while (n !== 1) {
        println(n);
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
        steps++;
    }

    println(1);
    return steps;
}
