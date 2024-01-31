document.addEventListener("keypress", (event) => {
    
    let key = event.key
    let which = event.which
    let code = event.code

    document.getElementById("key").innerHTML = key
    document.getElementById("which").innerHTML = which
    document.getElementById("code").innerHTML = code
})

// source of my confusion. It would seem that there are Javascript Char Codes (Key Codes). There are also 
// ASSCI keycodes 'American Standard Code for Information Interchange'. Leon's example, and my version, both generate the ASSCI codes. However, the example on 
// the site link we were given, https://www.toptal.com/developers/keycode, generates Javacript char codes. 
// Also, I've looked at examples of what work we shared earlier and some of us were generating ASCII keycodes and others were generating JavaScript Char key codes.


// according to Chat GPT, "Your concern is valid, and it's important to distinguish between JavaScript character codes 
// and ASCII codes when working with key events. The event.which property represents the ASCII code of the key that 
// was pressed, not the JavaScript character code. To ensure that you're working with JavaScript character codes, 
// you should use the event.keyCode property instead of event.which. The event.keyCode property provides the deprecated
//  but still widely supported way to get the character code of the key."

// I just wonder how important it is to use one keycode version rather than the other- does it even matter? 