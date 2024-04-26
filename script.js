function reply(answer) {
    const response = document.getElementById('response');
    if (answer === 'yes') {
        response.innerHTML = "I know my love you would love to go with me. See you tomorrow. I LOVEEEEEE YOUUUUUU SOOOOOOOO MUCH😍 Text me timings okay I'll be there.";
        response.style.color = '#4CAF50';
    } else {
        response.innerHTML = "You clicked on NO just to see what would i say right.I know you. I'll kill you if you even thought of saying no .I LOVE YOU. See ya.";
        response.style.color = '#f44336';
    }
}
function showQuestion() {
    document.getElementById('question').style.display = 'block';
}

