function start(){
    var numCandles = readInt('How old are you? ');
    var centerX = getWidth()/2;
    var cake = new Rectangle(400,150);
    cake.setColor(Randomizer.nextColor());
    cake.setPosition(0,250);
    add(cake);
    var cakeDecor = new Rectangle(400,30);
    cakeDecor.setColor(Randomizer.nextColor());
    cakeDecor.setPosition(0,250);
    add(cakeDecor);
    var text = new Text('Happy Birthday!','42pt Arial');
    text.setColor(Color.black);
    text.setPosition(0,340);
    add(text);
    for(var i = 0; i < numCandles; i++){
        var candle = new Rectangle(10,80);
        candle.setColor(Color.red);
        candle.setPosition(candle.getWidth()/2+centerX/numCandles*i,170);
        add(candle);
    }
}
