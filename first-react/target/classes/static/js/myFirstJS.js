var sillyData = ["hola", "don", "pepito"];
var commonFunctions = {
    mydata: ["hola", "don", "pepito"],
    holamundo: function () {
        alert("VOLAD!");
    },
    askMeSomething: function () {
        if (confirm("Estas seguro NEN??")) {
            alert("Toma truño");
        } else {
            alert("ME ABURROOOOO");
        }
    },
    askMeBiconditional: function () {
        // a? b:c;
        confirm("¿Me bicondicionas??") ? alert("doLog") : alert("no doLog");
    },
    mostrarmensaje: function () {
        var msg = document.getElementById("messageAlert");
        console.log(msg);
        msg.style.display = "inline";
    },
    bloqueame: function () {
        for (i = 0; i < 10; i++) {
            alert("Alert " + i);
        }
    },
    mostrarentrada:function(id){
      alert(document.getElementById(id).value);
    },
    isTrue: function (e) {
        return e < 10;
    },
    seMeVaLaPinza: function () {
        for (i = 0; this.isTrue(e); i++) {
            alert("Alert " + i);
        }
    }
};