
 
// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('heartOne').value = '';
    document.getElementById("heartTwo").value = '';
    document.getElementById("heartThree").value = '';
    document.getElementById("heartFour").value = '';
    document.getElementById("heartFive").value = '';
    document.getElementById("heartSix").value = '';
    document.getElementById("heartSeven").value = '';
    document.getElementById("heartEight").value = '';
    document.getElementById("heartNine").value = '';
 
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("heartOne").value = "X";
        document.getElementById("heartOne").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartOne").value = "0";
        document.getElementById("heartOne").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("heartTwo").value = "X";
        document.getElementById("heartTwo").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartTwo").value = "0";
        document.getElementById("heartTwo").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("heartThree").value = "X";
        document.getElementById("heartThree").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartThree").value = "0";
        document.getElementById("heartThree").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("heartFour").value = "X";
        document.getElementById("heartFour").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartFour").value = "0";
        document.getElementById("heartFour").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("heartFive").value = "X";
        document.getElementById("heartFive").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartFive").value = "0";
        document.getElementById("heartFive").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("heartSix").value = "X";
        document.getElementById("heartSix").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartSix").value = "0";
        document.getElementById("heartSix").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("heartSeven").value = "X";
        document.getElementById("heartSeven").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartSeven").value = "0";
        document.getElementById("heartSeven").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("heartEight").value = "X";
        document.getElementById("heartEight").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartEight").value = "0";
        document.getElementById("heartEight").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("heartNine").value = "X";
        document.getElementById("heartNine").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("heartNine").value = "0";
        document.getElementById("heartNine").disabled = true;
        flag = 1;
    }
}
function myfunc() {
 
    var heartOne, heartTwo, heartThree, heartFour, heartFive, heartSix, heartSeven, heartEight, heartNine;
    heartOne = document.getElementById("heartOne").value;
    heartTwo = document.getElementById("heartTwo").value;
    heartThree = document.getElementById("heartThree").value;
    heartFour = document.getElementById("heartFour").value;
    heartFive = document.getElementById("heartFive").value;
    heartSix = document.getElementById("heartSix").value;
    heartSeven = document.getElementById("heartSeven").value;
    heartEight = document.getElementById("heartEight").value;
    heartNine = document.getElementById("heartNine").value;
 
    if ((heartOne == 'x' || heartOne == 'X') && (heartTwo == 'x' ||heartTwo == 'X') && (heartThree == 'x' || heartThree == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player X won');
    }
    else if ((heartOne == 'x' || heartOne == 'X') && (heartFour == 'x' ||heartFour == 'X') && (heartSeven == 'x' || heartSeven == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((heartSeven == 'x' || heartSeven == 'X') && (heartEight == 'x' ||heartEight == 'X') && (heartNine == 'x' || heartNine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSix").disabled = true;
        window.alert('Player X won');
    }
    else if ((heartThree == 'x' || heartThree == 'X') && (heartSix == 'x' || heartSix == 'X') && (heartNine == 'x' || heartNine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        window.alert('Player X won');
    }
    else if ((heartOne == 'x' || heartOne == 'X') && (heartFive == 'x' ||heartFive == 'X') && (heartNine == 'x' || heartNine == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        window.alert('Player X won');
    }
    else if ((heartThree == 'x' || heartThree == 'X') && (heartFive == 'x' || heartFive == 'X') && (heartSeven == 'x' || heartSeven == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player X won');
    }
    else if ((heartTwo == 'x' || heartTwo == 'X') && (heartFive == 'x' || heartFive == 'X') && (heartEight == 'x' || heartEight == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player X won');
    }
    else if ((heartFour == 'x' || heartFour == 'X') && (heartFive == 'x' || heartFive == 'X') && (heartSix == 'x' || heartSix == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player X won');
    }
 
    else if ((heartOne == '0' || heartOne == '0') && (heartTwo == '0' || heartTwo == '0') && (heartThree == '0' || heartThree == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartOne == '0' || heartOne == '0') && (heartFour == '0' || heartFour == '0') && (heartSeven == '0' || heartSeven == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartSeven == '0' || heartSeven == '0') && (heartEight == '0' || heartEight == '0') && (heartNine == '0' || heartNine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSix").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartThree == '0' || heartThree == '0') && (heartSix == '0' || heartSix == '0') && (heartNine == '0' || heartNine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartFive").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartOne == '0' || heartOne == '0') && (heartFive == '0' || heartFive == '0') && (heartNine == '0' || heartNine == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartThree == '0' || heartThree == '0') && (heartFive == '0' || heartFive == '0') && (heartSeven == '0' || heartSeven == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartTwo == '0' || heartTwo == '0') && (heartFive == '0' || heartFive == '0') && (heartEight == '0' || heartEight == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartFour").disabled = true;
        document.getElementById("heartSix").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((heartFour == '0' || heartFour == '0') && (heartFive == '0' || heartFive == '0') && (heartSix == '0' || heartSix == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("heartOne").disabled = true;
        document.getElementById("heartTwo").disabled = true;
        document.getElementById("heartThree").disabled = true;
        document.getElementById("heartSeven").disabled = true;
        document.getElementById("heartEight").disabled = true;
        document.getElementById("heartNine").disabled = true;
        window.alert('Player 0 won');
    }
 
    
    else if ((heartOne == 'X' || heartOne == '0') && (heartTwo == 'X'
        || heartTwo == '0') && (heartThree == 'X' || heartThree == '0') &&
        (heartFour == 'X' || heartFour == '0') && (heartFive == 'X' ||
        heartFive == '0') && (heartSix == 'X' || heartSix == '0') &&
        (heartSeven == 'X' || heartSeven == '0') && (heartEight == 'X' ||
        heartEight == '0') && (heartNine == 'X' || heartNine == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}