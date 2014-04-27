
///// Form Validation of Customer
var form_open='#defaultForm';
$(document).ready(function() {
        $(form_open).bootstrapValidator();
    });
/*var phone_customer;
var phone_resturant;
var password_customer;
var password_resturant;
function validateForm_Customer()
{
	
	var Email=document.forms["signup_customer"]["email"].value;
	var Fname=document.forms["signup_customer"]["fname"].value;
	var Lname=document.forms["signup_customer"]["lname"].value;
	var Phone_no=document.forms["signup_customer"]["phone_no"].value;
	var password=document.forms["signup_customer"]["password"].value;
	var password_r=document.forms["signup_customer"]["password_r"].value;
	var check=false;
	var returns=true;
	if(Email==""||Email==null)
	{
		check=true;
   document.forms["signup_customer"]["email_error"].src="images/warning.png";
	}
	if(Fname==""||Fname==null)
	{
		check=true;
		document.forms["signup_customer"]["fname_error"].src="images/warning.png";
	}
	if(Lname==""||Lname==null)
	{
		check=true;
		document.forms["signup_customer"]["lname_error"].src="images/warning.png";
	}
	if(Phone_no==""||Phone_no==null)
	{
		check=true;
		document.forms["signup_customer"]["phone_error"].src="images/warning.png";
	}
	if(password==""||password==null)
	{
		check=true;
		document.forms["signup_customer"]["pass_error"].src="images/warning.png";
	}
	if(password_r==""||password_r==null)
	{
		check=true;
		document.forms["signup_customer"]["pass_r_error"].src="images/warning.png";
	}
if(check==true)
{
	returns= false;
}
	
		if(document.forms["signup_customer"]["password"].value!=document.forms["signup_customer"]["password_r"].value)
		{

			document.forms["signup_customer"]["pass_error"].src="images/warning.png";
			document.forms["signup_customer"]["pass_r_error"].src="images/warning.png";
			returns=false;
		}
		re=/^[A-Za-z]+$/;
		if(!re.test(Fname))
		{
			document.forms["signup_customer"]["fname_error"].src="images/warning.png";
			returns=false;
		}
		if(!re.test(Lname))
		{
			document.forms["signup_customer"]["lname_error"].src="images/warning.png";
			returns=false;
		}
		if(phone_customer==false)
		{

			returns=false;
		}
		if(password_customer==false)
		{
			returns=false;
		}
		return returns;

}
function validateForm_Resturant()
{
var Email=document.forms["signup_rest"]["email"].value;
	var Name=document.forms["signup_rest"]["name"].value;
	var Time=document.forms["signup_rest"]["time"].value;
	var Phone_no=document.forms["signup_rest"]["phone_no"].value;
	var password=document.forms["signup_rest"]["password"].value;
	var password_r=document.forms["signup_rest"]["password_r"].value;
	var check=false;
	var returns=true;
	if(Email==""||Email==null)
	{
		check=true;
   document.forms["signup_rest"]["email_error"].src="images/warning.png";
	}
	if(Name==""||Name==null)
	{
		check=true;
		document.forms["signup_rest"]["name_error"].src="images/warning.png";
	}
	if(Time==""||Time==null)
	{
		check=true;
		document.forms["signup_rest"]["time_error"].src="images/warning.png";
	}
	if(Phone_no==""||Phone_no==null)
	{
		check=true;
		document.forms["signup_rest"]["phone_error"].src="images/warning.png";
	}
	if(password==""||password==null)
	{
		check=true;
		document.forms["signup_rest"]["pass_error"].src="images/warning.png";
	}
	if(password_r==""||password_r==null)
	{
		check=true;
		document.forms["signup_rest"]["pass_r_error"].src="images/warning.png";
	}
if(check==true)
{
	returns=false;
}
		if(document.forms["signup_rest"]["password"].value!=document.forms["signup_rest"]["password_r"].value)
		{

			document.forms["signup_rest"]["pass_error"].src="images/warning.png";
			document.forms["signup_rest"]["pass_r_error"].src="images/warning.png";
			returns=false;
		}
		re=/^[A-Za-z]+$/;
		if(!re.test(Name))
		{
			document.forms["signup_rest"]["fname_error"].src="images/warning.png";
			returns=false;
		}
		if(phone_resturant==false)
		{
			returns=false;
		}
		if(password_resturant==false)
		{
		returns=false;	
		}
		return returns;

}*/
function ff()
{
$(document).ready(function() {
        $(form_open).bootstrapValidator();
    });
}
function customerform()
{
	form_open='#defaultForm';
	document.getElementById("resturant").style.display = 'none';
    document.getElementById("resturant").style.visibility = 'hidden';
  	document.getElementById("customer").style.display = 'block';
    document.getElementById("customer").style.visibility = 'visible';

   var a= document.getElementById("btn_choice");
   a.firstChild.data = "Customer";
}
function resturantform()
{
	form_open='#resturant_form';
	ff();
document.getElementById("customer").style.display = 'none';
    document.getElementById("customer").style.visibility = 'hidden';
  	document.getElementById("resturant").style.display = 'block';
    document.getElementById("resturant").style.visibility = 'visible';
    document.getElementById("btn_choice").value='Resturant';
var a= document.getElementById("btn_choice");
   a.firstChild.data = "Resturant";
}

function Email_check()
{
	var form;
	if(form_open==1)
	{
		form="signup_customer";
	}
	else if(form_open==2)
	{
		form="signup_rest";
	}
var Email=document.forms[form]["email"].value;	
var i=0;
var check=false;
for(i=0;i<Email.length;i++)
{
	if(Email[i]=='@'&&i!=0)
	{
		check=true;
	}
}
if(check==true)
{
document.forms[form]["email_error"].src="images/tick.png";
}
else
{
	document.forms[form]["email_error"].src="images/warning.png";
}
}
function phone_nocheck()
{
	var check=false;
var form;
	if(form_open==1)
	{
		form="signup_customer";
	}
	else if(form_open==2)
	{
		form="signup_rest";
	}
	var phone=document.forms[form]["phone_no"].value;
	if(phone.length==12)
	{
		if(form_open==1)
		{
			phone_customer=true;
		}
		else
		{
			phone_resturant=true;
		}
		document.forms[form]["phone_error"].src="images/tick.png";
	}
	else
	{
		if(form_open==1)
		{
			phone_customer=false;
		}
		else
		{
			phone_resturant=false;
		}
		document.forms[form]["phone_error"].src="images/warning.png";
	}

}
function password_check()
{
	var check=false;
var form;
	if(form_open==1)
	{
		form="signup_customer";
	}
	else if(form_open==2)
	{
		form="signup_rest";
	}
	var password=document.forms[form]["password"].value;
	if(password.length<6)
	{
		if(form_open==1)
		{
			password_customer=false;
		}
		else
		{
			password_resturant=false;
		}

document.forms[form]["pass_error"].src="images/warning.png";
	}
	else
	{
		if(form_open==1)
		{
			password_customer=true;
		}
		else
		{
			password_resturant=true;
		}
	document.forms[form]["pass_error"].src="images/tick.png";	
	}
}
function password_r_check()
{
	var check=false;
var form;
	if(form_open==1)
	{
		form="signup_customer";
	}
	else if(form_open==2)
	{
		form="signup_rest";
	}
	var password=document.forms[form]["password_r"].value;
	if(password.length<6)
	{
		if(form_open==1)
		{
			password_customer=false;
		}
		else
		{
			password_resturant=false;
		}

document.forms[form]["pass_r_error"].src="images/warning.png";

	}
	else
	{
		if(form_open==1)
		{
			password_customer=true;
		}
		else
		{
			password_resturant=true;
		}
	document.forms[form]["pass_r_error"].src="images/tick.png";	
	}

}
function fname_check()
{

	var Fname=document.forms["signup_customer"]["fname"].value;
	re=/^[A-Za-z]+$/;
		if(!re.test(Fname))
		{
			document.forms["signup_customer"]["fname_error"].src="images/warning.png";
			
		}
		else
		{
			document.forms["signup_customer"]["fname_error"].src="images/tick.png";
			
		}

}
function lname_check()
{
var Lname=document.forms["signup_customer"]["lname"].value;
	re=/^[A-Za-z]+$/;
		if(!re.test(Lname))
		{
			document.forms["signup_customer"]["lname_error"].src="images/warning.png";
			
		}
		else
		{
			document.forms["signup_customer"]["lname_error"].src="images/tick.png";
			
		}
}

function name_check()
{
var Name=document.forms["signup_rest"]["name"].value;
re=/^[A-Za-z]+$/;
		if(!re.test(Name))
		{
			document.forms["signup_rest"]["name_error"].src="images/warning.png";
			
		}
		else
		{
			document.forms["signup_rest"]["name_error"].src="images/tick.png";
			
		}
}
function time_check()
{

var Time=document.forms["signup_rest"]["time"].value;
	
	if(Time>200)
	{
		document.forms["signup_rest"]["time_error"].src="images/warning.png";
	}
	else{
		document.forms["signup_rest"]["time_error"].src="images/tick.png";
	}
}