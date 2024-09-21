var screen = document.getElementById('screen');

function user_input(value){
    screen.value += value;

}

function clear_all(){
    screen.value = ""

}

function result(){
    var result = eval(screen.value)
    screen.value = result
}