function textChange() {
    var arr = ["Blahblahblah", "This is random text from an array", "Just a JavaScipt test", "Random filler text", "This is randomized from an array", "This is from an array in JavaScipt"];

    var num = arr[Math.floor(Math.random() * 6)];

    document.getElementById("thisid").innerHTML = num;
}