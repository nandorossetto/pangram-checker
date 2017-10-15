/*

@author nando rossetto
@homepage github.com/nandorossetto
@e-mail nandorossetto@gmail.com

*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);
    }

    _createClass(Application, [{
        key: 'showUserMessage',
        value: function showUserMessage(param) {
            var type = param.type;
            var text = param.message;

            var markup;
            markup = '<div class="alert alert-' + type + '">';
            markup += '  <p>' + text + '</p><strong class="close">X</strong>';
            markup += '</div>';

            $('.alert').remove();
            $('body').append(markup).find('.alert-' + type);

            $('body').on('click', '.close', function () {
                $(this).parent().remove();
            });
        }
    }, {
        key: 'isPangram',
        value: function isPangram(param) {
            var pangramRegex = /([a-z])(?!.*\1)/g;
            var alphabet = 'abcdefghijklmnopqrstuvwxyz';
            var msg = new Application();

            function missingLetters(sentence) {
                sentence = sentence.toLowerCase();
                var missing = [];

                for (var i in alphabet) {
                    var letter = alphabet[i];

                    if (sentence.indexOf(letter) < 0) {
                        missing[missing.length] = letter;
                    }
                }

                msg.showUserMessage({
                    type: 'error',
                    message: 'Missing letters: ' + missing.toString()
                });
            }

            if (param.length < 26) {
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
    }, {
        key: 'getText',
        value: function getText() {
            var button = document.getElementById('pangram-trigger');
            var pangram = new Application();

            button.addEventListener('click', function (e) {
                var text = document.getElementById('pangram').value.toLowerCase();

                pangram.isPangram(text);

                e.preventDefault();
            });
        }
    }]);

    return Application;
}();

var application = new Application();
application.getText();
