function getFormvalue() {
    //Write your code here
	const firstName = document.getElementsByName("fname")[0].value;
	const lastName = document.getElementsByName("lname")[0].value;
	const fullName = firstName + " " + lastName;

	alert(fullName);
}
