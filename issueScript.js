function updateMessage() {
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message');
    switch (reason) {
        case 'busy':
        case 'cannot':
        case 'else':
        case 'dontWant':
            message.innerHTML = "It's okay, I understand. Maybe we can go out next time. Don't worry.";
            break;
        case 'other':
            message.innerHTML = "Please tell us more about your situation in the message box.";
            break;
        default:
            message.innerHTML = "";
            break;
    }
}
