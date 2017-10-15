/*

@author nando rossetto
@homepage github.com/nandorossetto
@e-mail nandorossetto@gmail.com

*/

'use strict';

class Application {
    showUserMessage(param){
        var type = param.type;
        var text = param.message;
        
        var markup;
            markup  = '<div class="alert alert-' + type + '">';
            markup += '  <p>' + text + '</p><strong class="close">X</strong>';
            markup += '</div>';

        $('.alert').remove();
        $('body').append(markup).find('.alert-' + type);

        $('body').on('click', '.close', function(){
            $(this).parent().remove();
        });
    }

    isPangram(param){
        var pangramRegex = /([a-z])(?!.*\1)/g;
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const msg = new Application();

        function missingLetters(sentence) {
            sentence = sentence.toLowerCase();
            var missing = [];
            
            for (var i in alphabet){
                var letter = alphabet[i];
                
                if (sentence.indexOf(letter) < 0){
                    missing[missing.length] = letter;
                }
            }

            msg.showUserMessage({
                type: 'error',
                message: 'Missing letters: ' + missing.toString()
            });
        }

        if(param.length < 26){
            missingLetters(param);

            return;
        }

        //Success
        msg.showUserMessage({
            type: 'success',
            message: 'Congrats, this is a Pangram'
        });

        document.getElementById('pangram').value = '';
    }

    getText(){
        var button = document.getElementById('pangram-trigger');
        const pangram = new Application();
        
        button.addEventListener('click', function(e){
            var text = document.getElementById('pangram').value.toLowerCase();

            pangram.isPangram(text);

            e.preventDefault();
        });
    }
}

const application = new Application();
application.getText();