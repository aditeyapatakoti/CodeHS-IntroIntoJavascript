function start(){
    var widthMat= readInt("What is the width of the mat in feet?");
    var lengthMat= readInt("What is the length of the mat in feet?");
    var areaMat = calculateArea(widthMat,lengthMat);
    var widthRoom = readInt("What is the width of the room in feet?");
    var lengthRoom = readInt("What is the length of the room in feet?");
    var areaRoom= calculateArea(widthRoom,lengthRoom);
    var matsTotal= areaRoom/areaMat;
    println("You will need "+ matsTotal+ " mats to cover the room");
}
function calculateArea(width, length){
    var area = width*length;
    return area;
}
