// Q no 3
var trafficSignal = prompt("Enter color (red , green, yellow)")
if (trafficSignal == "red"){
    document.write("<h1>" + 'Must Stop' + "</h1>")
}

else if (trafficSignal == "yellow"){
    document.write("<h1>" + 'Ready to move' + "</h1>")
}
else if (trafficSignal == "green"){
    document.write("<h1>" + 'Move now' + "</h1>")
}
else{
    document.write("<h1>" + 'sorry invalid color' + "</h1>")
}