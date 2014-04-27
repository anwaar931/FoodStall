// JavaScript Document


function updateInfo() { 
        var text = document.getElementById("first");
        var  content = text.innerHTML;
        text.style.visibility = "hidden";
        var input = document.getElementById("a");
        input.value = content;
        input.style.visibility = "visible";

        var text1 = document.getElementById("last");
        var content1 = text1.innerHTML;
        text1.style.visibility = "hidden";
        var input1 = document.getElementById("b");
        input1.value = content1;
        input1.style.visibility = "visible";

        var text2 = document.getElementById("phone");
        var content2 = text2.innerHTML;
        text2.style.visibility = "hidden";
        var input2 = document.getElementById("c");
        input2.value = content2;
        input2.style.visibility = "visible";
		
<<<<<<< HEAD
		//document.getElementById("pass").innerHTML=document.getElementById("pass").value;
		
		document.getElementById("pass").style.visibility="hidden";
		document.getElementById("p").style.visibility="hidden";
        document.getElementById("change").style.visibility="visible";
		document.getElementById("save").style.visibility="visible";
		document.getElementById("update").style.visibility="hidden";
=======
		var text2 = document.getElementById("pass");
        var content2 = text2.innerHTML;
        text2.style.visibility = "hidden";
        var input2 = document.getElementById("d");
        input2.value = content2;
        input2.style.visibility = "visible";
>>>>>>> 44c9312022d2b2534a12990a7aeedfc48e635aea
        
}

function saveInfo()
{
	    var text = document.getElementById("a");
        var content = text.value;
        text.style.visibility = "hidden";
        var txtfield = document.getElementById("first");
        txtfield.innerHTML = content;
        txtfield.style.visibility = "visible";

        var text1 = document.getElementById("b");
        var content1 = text1.value;
        text1.style.visibility = "hidden";
        var txtfield1 = document.getElementById("last");
        txtfield1.innerHTML = content1;
        txtfield1.style.visibility = "visible";
        
        var text2 = document.getElementById("c");
        var content2 = text2.value;
        text2.style.visibility = "hidden";
        var txtfield2 = document.getElementById("phone");
        txtfield2.innerHTML = content2;
        txtfield2.style.visibility = "visible";
        
<<<<<<< HEAD
		document.getElementById("pass").style.visibility="visible";
		document.getElementById("p").style.visibility="visible";
        document.getElementById("change").style.visibility="hidden";
		document.getElementById("save").style.visibility="hidden";
		document.getElementById("update").style.visibility="visible";
=======
		var text2 = document.getElementById("d");
        var content2 = text2.value;
        text2.style.visibility = "hidden";
        var txtfield2 = document.getElementById("pass");
        txtfield2.innerHTML = content2;
        txtfield2.style.visibility = "visible";
>>>>>>> 44c9312022d2b2534a12990a7aeedfc48e635aea
        
}

var action = document.getElementById("update");
action.addEventListener("click", updateInfo, false);

var action = document.getElementById("save");
action.addEventListener("click", saveInfo, false);
