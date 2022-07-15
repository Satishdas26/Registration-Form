function validate(){
    const name = document.getElementById("name").value
    const gender = document.getElementsByName("gender")
    const branch = document.getElementById("branch").value
    const mobile = document.getElementById("mobile").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const password2 = document.getElementById("password2").value
    const checkbox = document.getElementById("term")


    let error= false
    if(name===""){
        // console.log('name is required')
        document.getElementById("name_error").innerHTML = "Name is required"
        error = true
    }
    else if(!name.match(/[a-z]/)){
        document.getElementById("name_error").innerHTML = "name must have one lower case letter"
        error = true
    }
    else if(!name.match(/[A-Z]/)){
        document.getElementById("name_error").innerHTML = "name must have one Upper case letter"
        error = true
    }
    else if(name.match(/[!@#$%^&]/) && (name.match(/[0-9]/))){
        document.getElementById("name_error").innerHTML = "name doesnot contain special character and numeric value"
        error = true
    }
    else if(name.match(/[!@#$%^&]/)){
        document.getElementById("name_error").innerHTML = "name doesnot contain special character"
        error = true
    }
    else if(name.match(/[0-9]/)){
        document.getElementById("name_error").innerHTML = "name doesnot contain numeric value"
        error = true
    }
    else{
        document.getElementById("name_error").innerHTML = ""
    }
    // Gender Validation

    if(!gender[0].checked && !gender[1].checked && !gender[2].checked){

        document.getElementById("gender_error").innerHTML = "Please select your gender"
        error = true
    }
    else{
        document.getElementById("gender_error").innerHTML = ""
    }

    // Branch Validation
    if(branch == ""){
        document.getElementById("branch_error").innerHTML="Select Your Branch"
        error= true
    }
    else{
        document.getElementById("branch_error").innerHTML = ""
    }

    //Mobile Validation
    if(mobile === ""){
        document.getElementById("mobile_error").innerHTML = "mobile number is required"
        error = true
    }
    else if(mobile.length !== 10 || isNaN(mobile)){
        document.getElementById("mobile_error").innerHTML = "Please enter a 10 digit valid mobile number"
        error = true
    }
    else{
        document.getElementById("mobile_error").innerHTML = ""
    }
    //Email Validation

    let atPos = email.indexOf('@')
    let dotPos = email.lastIndexOf('.')

    if(email===""){
        document.getElementById("email_error").innerHTML = "email is required"
        error = true
    }
    else if(atPos <=0 || dotPos <= 0 || (dotPos - atPos) <= 4 || dotPos == email.length-1 ){
        document.getElementById("email_error").innerHTML = "Please enter a valid email id"
        error = true
    }
    else{
        document.getElementById("email_error").innerHTML = ""
    }

    //Password Validation
    if(password===""){
        document.getElementById("password_error").innerHTML = "Password is required"
        error = true
    }
    else if(password.length < 8 || password.length >16 ){
        document.getElementById("email_error").innerHTML = "Password must have 8 - 16 character"
        error = true
    }
    else if(!password.match(/[a-z]/)){
        document.getElementById("password_error").innerHTML = "Password must have one lower case letter"
        error = true
    }
    else if(!password.match(/[A-Z]/)){
        document.getElementById("password_error").innerHTML = "Password must have one Upper case letter"
        error = true
    }
    else if(!password.match(/[0-9]/)){
        document.getElementById("password_error").innerHTML = "Password must have one number"
        error = true
    }
    else if(!password.match(/[!@#$%^&]/)){
        document.getElementById("password_error").innerHTML = "Password must have one special character"
        error = true
    }
    
    else{
        document.getElementById("password_error").innerHTML = ""
    }

    // Confirm Password
    if(password2===""){
        document.getElementById("password2_error").innerHTML = "Password is required"
        error = true
    }
    else if(password!=password2){
        document.getElementById("password2_error").innerHTML = "Password and confirm password must be same"
        error = true
    }
    else{
        document.getElementById("password2_error").innerHTML = ""
    }


    //Check box

    if(!term.checked){
        document.getElementById("term_error").innerHTML = "Please agree to the terms and condition"
        error = true
    }
    else{
        document.getElementById("term_error").innerHTML = ""
    }

    

    if(error){
        return false
    }
    else{
        return true
    }
}