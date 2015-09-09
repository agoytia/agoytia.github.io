var getRequest = function(url){

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                document.body.className = 'ok';
            } else {
                document.body.className = 'error';
            }
        }
    };
    request.open("GET", url , true);
    request.send(null);
}

//Power On Button
var powerOnButton = document.getElementById("powerOn");

function powerButtonClick() {
    getRequest('http://192.168.0.8:3000/piApi/power/on');
    alert("Turned the ENTIRE apartment on");
}

powerOnButton.addEventListener('click', powerButtonClick, false);

//Power Off Button
var powerOffButton = document.getElementById("powerOff");

function powerOffButtonClick()
{

    getRequest('http://192.168.0.8:3000/piApi/power/off');
    alert("Turned the ENTIRE apartment off");
}

powerOffButton.addEventListener('click', powerOffButtonClick, false);

//Living Room TV On Button
var livingRoomTVOnbtn = document.getElementById("livingRoomTVON");

function livingRoomTVONClick()
{

    getRequest('http://192.168.0.8:3000/piApi/power/tv/on');
    alert("Turned the livingroom TV on");
}

livingRoomTVOnbtn.addEventListener('click', livingRoomTVONClick, false);

//Living Room Off On Button
var livingRoomTVOffbtn = document.getElementById("livingRoomTVOFF");

function livingRoomTVOFFClick()
{
    getRequest('http://192.168.0.8:3000/piApi/power/tv/off');
    alert("Turned the livingroom TV off");
}

livingRoomTVOffbtn.addEventListener('click', livingRoomTVOFFClick, false);

//Workstation On Button
var workstationONbtn = document.getElementById("workstationON");

function workstationONClick()
{

    getRequest('http://192.168.0.8:3000/piApi/power/workstation/on');
    alert("Turned the workstation on");
}

workstationONbtn.addEventListener('click', workstationONClick, false);

//Workstation Off Button
var workstationOFFbtn = document.getElementById("workstationOFF");

function workStationOFFClick()
{
    getRequest('http://192.168.0.8:3000/piApi/power/workstation/off');
    alert("Turned the livingroom TV off");
}

workstationOFFbtn.addEventListener('click', workStationOFFClick, false);

//Microwave On Button
var microwaveONbtn = document.getElementById("microwaveON");

function microwaveONClick()
{

    getRequest('http://192.168.0.8:3000/piApi/power/microwave/on');
    alert("Turned the workstation on");
}

microwaveONbtn.addEventListener('click', microwaveONClick, false);

//Microwave Off Button
var microwaveOFFbtn = document.getElementById("microwaveOFF");

function microwaveOFFClick()
{
    getRequest('http://192.168.0.8:3000/piApi/power/microwave/off');
    alert("Turned the livingroom TV off");
}

microwaveOFFbtn.addEventListener('click', microwaveOFFClick, false);

//Bedroom On Button
var bedroomONbtn = document.getElementById("bedRoomON");

function bedroomONClick()
{

    getRequest('http://192.168.0.8:3000/piApi/power/bedroom/on');
    alert("Turned the bedroom on");
}

bedroomONbtn.addEventListener('click', bedroomONClick, false);

//Bedroom Off Button
var bedroomOFFbtn = document.getElementById("bedRoomOFF");

function bedroomOFFClick()
{
    getRequest('http://192.168.0.8:3000/piApi/power/bedroom/off');
    alert("Turned the bedroom off");
}

bedroomOFFbtn.addEventListener('click', bedroomOFFClick, false);

//Switch TV Input to ChromeCast Button
var chromecastBtn = document.getElementById("inputToChromecast");

function chromecastClick()
{
    getRequest('http://192.168.0.8:3000/piApi/tv/input/chromecast');
    alert("Changed TV input to Chromecast");
}

chromecastBtn.addEventListener('click', chromecastClick, false);

//Switch TV Input to Cable Button
var cableBtn = document.getElementById("inputToCable");

function cableClick()
{
    getRequest('http://192.168.0.8:3000/piApi/tv/input/cable');
    alert("Changed TV input to Cable");
}

cableBtn.addEventListener('click', cableClick, false);

//Turn TV On
var tvOnBtn = document.getElementById("tvTurnON");

function tvONClick()
{
    getRequest('http://192.168.0.8:3000/piApi/tv/on');
    alert("Turned the TV On");
}

tvOnBtn.addEventListener('click', tvONClick, false);

//Turn TV Off
var tvOffBtn = document.getElementById("tvTurnOFF");

function tvOFFClick()
{
    getRequest('http://192.168.0.8:3000/piApi/tv/off');
    alert("Turned the TV Off");
}

tvOffBtn.addEventListener('click', tvOFFClick, false);

//Code to launch Netflix App
var nflxBtn = document.getElementById("nflxBtn");

function nflxBtnClick()
{
    window.open("intent://www.netflix.com/#Intent;scheme=nflx;package=com.netflix.mediclient;S.browser_fallback_url=http%3A%2F%2Fwww.netflix.com;end", "_blank");
}

nflxBtn.addEventListener('click', nflxBtnClick, false);
