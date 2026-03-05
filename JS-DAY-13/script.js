console.log("starting App.js")
function login(email, password) {
    console.log("inside login function")
    if (email === "user@example.com" && password === "password123") {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Login failed!");
        return false;
    }
}
login("user@example.com", "password123",(data)=>{
    console.log(data);
    getVideosList

})


