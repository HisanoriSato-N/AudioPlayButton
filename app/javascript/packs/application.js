// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

//音声再生
(function (window, $) {
    'use strict';

    $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function(){
        se[0].currentTime = 0;
        se[0].play();
    });
    return this;
    };

})(this, this.jQuery);

$('.btn a').useSound('mousedown touchstart', '#sound');
$('.btn').useSound('mousedown touchstart', '#sound');