firebase.initialize(firebaseConfig);
var Name=prompt("Enter your Name")
function sendMessage(){
    var msg=document.getElementById('msg')
    firebase.database().ref("Mess").push().set({
        "Sender":Name,
        "Msg":msg

    })
}