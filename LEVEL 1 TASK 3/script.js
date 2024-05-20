document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.buttons button');
    const operators = ['+', '-', '*', '/', '%', '.'];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            switch(value) {
                case 'AC':
                    display.value = '';
                    break;
                case 'DEL':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        if (display.value) {
                            display.value = eval(display.value.replace(/[^-()\d/*+.%]/g, ''));
                        }
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                default:
                    if (operators.includes(value) && operators.includes(display.value.slice(-1))) {
                        display.value = display.value.slice(0, -1) + value;
                    } else {
                        display.value += value;
                    }
                    break;
            }
        });
    });
});
