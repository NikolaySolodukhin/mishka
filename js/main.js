"use strict";window.utils=function(){for(var e=document.querySelector(".top-menu__toggle"),n=e.parentNode.querySelectorAll(".main-nav"),o=document.querySelector(".modal-window"),t=document.querySelectorAll(".btn_product, .product__add"),a=0;a<n.length;a++)n[a].classList.remove("main-nav_nojs");e.addEventListener("click",function(){for(var o=0;o<n.length;o++)n[o].classList.toggle("main-nav_show");e.classList.toggle("top-menu__toggle_close")});for(a=0;a<t.length;a++)t[a].addEventListener("click",function(e){e.preventDefault(),o.classList.add("modal-window_show")});window.addEventListener("keydown",function(e){27===e.keyCode&&o.classList.contains("modal-window_show")&&o.classList.remove("modal-window_show")})}(),ymaps.ready(function(){var e=new ymaps.Map("map-canvas",{center:[59.935955,30.321965],zoom:16},{searchControlProvider:"yandex#search"}),n=new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"HTML Academy"},{iconImageHref:"img/icon-map-pin.svg",iconImageSize:[78,138],iconImageOffset:[-45,-137]});e.geoObjects.add(n)});