function f1() {
    var fname1 = document.getElementById("fname").value;
    if (fname1 == "") {
        document.getElementById("fmsg1").innerText = " *** please enter a name ***"
        //val.style.background="red"
    }
}

function f2() {
    var lname = document.getElementById("lname").value;
    if (lname == "") {
        document.getElementById("fmsg2").innerText = " *** please enter a name ***"
        //val.style.background="red"
    }
}

function f3() {
    var phone = document.getElementById("pno").value;
    if (phone == "") {
        document.getElementById("fmsg3").innerText = " *** please enter a phone number ***"
        //val.style.background="red"
    }
}

function f4() {
        var email = document.getElementById("email").value;
        if (email == "") {
            document.getElementById("fmsg4").innerText = " *** please enter an email address ***"
            //val.style.background="red"
        }
    }

