// Ques no 10
var userInp = prompt("enter your weather temperature in Celsius");
if (userInp >= 60) {
    document.write('<div class="card C animate__animated animate__flash" style="width: 18rem;  margin:auto; margin-top:100px">' +
        '<img src="temp.gif" class="card-img-top Cshape" alt="...">' +
        '<div class="card-body m-auto">' +
        '<h5 class="card-title">Weather not Found🤨</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>')
}
else if (userInp >= 40) {
    document.write('<div class="card C animate__animated animate__bounceInDown" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="hot.gif" class="card-img-top  Cshape" alt="...">' +
        '<div  class="card-body m-auto">' +
        ' <h5 class="card-title">Its hot. You should drink more water🥵</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +

        '</div>' +
        '</div>"')
}
else if (userInp >= 33) {
    document.write('<div class="card C animate__animated animate__bounceIn" style="width: 18rem; margin:auto; margin-top:100px">' +
        '<img src="sunny.gif" class="card-img-top  Cshape" alt="...">' +
        '<div class="card-body m-auto">' +
        '<h5 class="card-title">Its Sunny☀</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>')
}
else if (userInp >= 27) {
    document.write('<div class="card C animate__animated animate__shakeY " style="width: 18rem; margin:auto; margin-top:100px">' +
        '<img src="27windy.gif" class="card-img-top  Cshape" alt="...">' +
        ' <div class="card-body  m-auto ">' +
        '<h5 class="card-title">Its Windy😶‍🌫</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        ' </div>')
}
else if (userInp >= 23) {
    document.write(
        '<div class="card w-50 C animate__animated animate__swing" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="23Cspring.gif" class="card-img-top  Cshape" alt="...">' +
        '<div class="card-body  m-auto ">' +
        '<h5 class="card-title">Yayyy its Spring🥰</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>'
    )
}
else if (userInp >= 16) {
    document.write(
        '<div class="card C animate__animated animate__tada" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="16Autom.gif" class="card-img-top  Cshape" alt="...">' +
        '<div class="card-body  m-auto ">' +
        '<h5 class="card-title">Its Autom🍁🍁</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>'
    )
}
else if (userInp >= 11) {
    document.write(
        '<div class="card C animate__animated animate__bounceInRight" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="11C.gif" class="card-img-top Cshape" alt="...">' +
        '<div class="card-body  m-auto ">' +
        '<h5 class="card-title">A beautifull weather😎😎</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>'
    )
}
else if (userInp >= 5) {
    document.write(
        '<div class="card C animate__animated animate__bounceInLeft" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="5C.gif" class="card-img-top  Cshape" alt="...">' +
        '<div class="card-body  m-auto ">' +
        '<h5 class="card-title">Ohhh its Cold🥶</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>'
    )
}
else if (userInp >= 0) {
    document.write(
        '<div class="card C animate__animated animate__bounceIn" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="snow.gif" class="card-img-top  Cshape" alt="...">' +
        '<div class="card-body  m-auto ">' +
        '<h5 class="card-title">Wow! its snowfall🤩</h5>' +

        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>'
    )
}
else if (userInp <= -1) {
    document.write(
        '<div class="card C animate__animated animate__shakeX" style="width: 18rem; margin:auto; margin-top:100px">' +
        ' <img src="freez.gif" class="card-img-top  Cshape" alt="...">' +
        '<div class="card-body  m-auto ">' +
        '<h5 class="card-title">Frrreeezzzz🥶</h5>' +

        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>'
    )
}
else if (userInp >= 60) {
    document.write('<div class="card C animate__animated animate__flash" style="width: 18rem;">' +
        '<img src="temp.gif" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title">Weather not Found🤨</h5>' +
        '<h1 class=" m-auto">' + userInp + "°C" + '</h1>' +
        '</div>' +
        '</div>')
}

