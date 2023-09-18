function start() {
    var count = 0;
    var radius = 200;
    var CENTER_X = getWidth() / 2;
    var CENTER_Y = getHeight() / 2;

    while (radius > 0) {
        var circle = new Circle(radius);

        // Alternate between red and black colors
        if (count % 2 === 0) {
            circle.setColor(Color.red);
        } else {
            circle.setColor(Color.black);
        }

        circle.setPosition(CENTER_X, CENTER_Y);
        add(circle);

        radius -= 20;
        count++;
    }
}
