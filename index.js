(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u,a){var c=r.handleCardClick,l=o.deleteCard,s=i.addLike,f=u.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=e,this._template=n,this._element=this._getTemplate(),this._cardNoLike=this._element.querySelector(".card__heart"),this._cardDelete=this._element.querySelector(".card__delete"),this._cardImage=this._element.querySelector(".card__image"),this._cardNumberLike=this._element.querySelector(".card__heard-number"),this._handleCardClick=c,this._userID=a,this._deleteCard=l,this._addLike=s,this._deleteLike=f}var n,r;return n=t,(r=[{key:"getId",value:function(){return this._cardId=this._items._id}},{key:"setLike",value:function(e){this._cardNumberLike.textContent=e.likes.length,this._cardNoLike.classList.add("card__heart_like")}},{key:"removeLike",value:function(e){this._cardNumberLike.textContent=e.likes.length,this._cardNoLike.classList.remove("card__heart_like")}},{key:"createCard",value:function(){return this._element.querySelector(".card__title").textContent=this._items.name,this._cardImage.src=this._items.link,this._cardImage.alt=this._items.name,this._cardNumberLike.textContent=this._items.likes.length,this._userID===this._items.owner._id?this._cardDelete.classList.add("card__delete_visible"):this._cardDelete.classList.remove("card__delete_visible"),this._setEventListeners(),this._element}},{key:"_getTemplate",value:function(){return this._cardTemplate=document.querySelector(this._template).content.querySelector(".card").cloneNode(!0),this._cardTemplate}},{key:"_setEventListeners",value:function(){var e=this;this._cardNoLike.addEventListener("click",(function(){e._cardNoLike.classList.contains("card__heart_like")?e._deleteLike(e.getId()):e._addLike(e.getId())})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._items)})),this._cardDelete.addEventListener("click",(function(){e._deleteCard(e._items,e._element)})),this._items.likes.some((function(t){return t._id===e._userID}))&&this._cardNoLike.classList.add("card__heart_like")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupForm=t,this._formSelector=n.formSelector,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._buttonElement=this._popupForm.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._popupForm.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventLiseners()}},{key:"_setEventLiseners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(e){e.preventDefault()})),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e.toggleButtonState(),e._checkInputValidity(t)}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hideInputError",value:function(e){this._inputElement=e;var t=this._popupForm.querySelector("#".concat(this._inputElement.id,"-error"));this._inputElement.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_showInputError",value:function(e){this._inputElement=e;var t=this._popupForm.querySelector("#".concat(this._inputElement.id,"-error"));this._inputElement.classList.add(this._errorClass),t.classList.add(this._inputErrorClass),t.textContent=this._inputElement.validationMessage}},{key:"toggleButtonState",value:function(){this._popupForm.checkValidity()?(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1):(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.itemRender;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._itemRender=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._itemRender(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._overlay=this._popup.querySelector(".popup__overlay"),this._icon=this._popup.querySelector(".popup__icon"),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._overlay.addEventListener("click",this.close),this._icon.addEventListener("click",this.close)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n,r=t.formSubmitCallBack;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmitCallBack=r,n._formButton=n._popup.querySelector(".popup__button"),n._form=n._popup.querySelector(".popup__content"),n._inputs=Array.from(n._form.querySelectorAll(".popup__text")),n._formSubmit=n._formSubmit.bind(_(n)),n}return t=u,(n=[{key:"_formSubmit",value:function(){this._formSubmitCallBack(this._getInputValues())}},{key:"setEventListeners",value:function(){var e=this;s(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._formSubmit()}))}},{key:"close",value:function(){s(d(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._imageSubtitle=t._popup.querySelector(".popup__title-image"),t}return t=u,(n=[{key:"open",value:function(e){b(w(u.prototype),"open",this).call(this),this._image.src=e.link,this._image.alt=e.name,this._imageSubtitle.textContent=e.name}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.nameTitle,r=t.aboutMe,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameTitle=n,this._aboutMe=r,this._avatar=o}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._nameTitle.textContent,aboutMe:this._aboutMe.textContent}}},{key:"setUserInfo",value:function(e){this._nameTitle.textContent=e.name,this._aboutMe.textContent=e.about,this._avatar.src=e.avatar}}],n&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._token=n}var t,n;return t=e,(n=[{key:"_requestResult",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: Ошибка ".concat(e.status," - ").concat(e.statusText))}},{key:"getItemsGard",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"users/me "),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.aboutMe})}).then((function(e){return t._requestResult(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._requestResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e._id),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"replaseAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._requestResult(e)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function x(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var A,N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e,t){var n,r=t.deleteCard;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._deleteCard=r,n._form=n._popup.querySelector(".popup__content"),n._formSubmit=n._formSubmit.bind(B(n)),n._button=document.querySelector("#popup__button_confirm"),n}return t=u,(n=[{key:"_formSubmit",value:function(e){e.preventDefault(),this._deleteCard(this._items,this._element)}},{key:"setEventListeners",value:function(){R(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._formSubmit)}},{key:"open",value:function(e,t){this._items=e,this._element=t,R(D(u.prototype),"open",this).call(this)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a),M=document.querySelector(".profile__button-edit"),U=document.querySelector(".popup__text_input_name"),V=document.querySelector(".popup__text_input_job"),z=document.querySelector(".profile__title"),F=document.querySelector(".profile__subtitle"),J=document.querySelector(".profile__button-add"),G=document.querySelector("#profile_editing_form"),H=document.querySelector(".cards"),$=document.querySelector("#form_for_adding_photos"),K=document.querySelector("#form_for_adding_avatar"),Q=document.querySelector(".profile__avatar-button"),W=document.querySelector("#popup__button"),X=document.querySelector(".popup__button-card"),Y=document.querySelector("#popup_button_avatar"),Z=document.querySelector(".profile__avatar"),ee={formSelector:".popup__content",inputSelector:".popup__text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button-error",inputErrorClass:"popup__error-message_show",errorClass:"popup__text-error"};function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}new r(G,ee).enableValidation();var ne=new r($,ee);ne.enableValidation();var re=new r(K,ee);re.enableValidation();var oe=function(e){var n=new t(e,".template",{handleCardClick:ie},{deleteCard:function(e,t){_e.open(e,t)}},{addLike:function(e){se.addLike(e).then((function(e){return n.setLike(e)})).catch((function(e){return console.log(e)}))}},{deleteLike:function(e){se.deleteLike(e).then((function(e){return n.removeLike(e)})).catch((function(e){return console.log(e)}))}},A);return n.createCard(e)};function ie(e){ce.open(e)}function ue(e){e.textContent="Сохранение..."}function ae(e){e.textContent="Сохранить"}var ce=new E("#popup_image");ce.setEventListeners();var le=new i({itemRender:function(e){le.addItem(oe(e))}},H),se=new j("https://mesto.nomoreparties.co/v1/cohort-34/","5f5add00-d466-4f85-8d24-2991878e59c1"),fe=new y("#addCard",{formSubmitCallBack:function(e){ue(X);var t={link:e.link_to_the_picture,name:e.title};se.addCard(t).then((function(e){fe.close();var t=oe(e);H.prepend(t)})).catch((function(e){return console.log(e)})).finally(void(X.textContent="Создать"))}});fe.setEventListeners();var pe=new L({nameTitle:z,aboutMe:F,avatar:Z}),he=new y("#editProfile",{formSubmitCallBack:function(e){ue(W),se.editProfile(e).then((function(e){pe.setUserInfo(e),he.close()})).catch((function(e){return console.log(e)})).finally(ae(W))}});he.setEventListeners();var _e=new N("#confirmDeletionCard",{deleteCard:function(e,t){se.deleteCard(e).then((function(){t.remove(),_e.close()})).catch((function(e){return console.log(e)}))}});_e.setEventListeners();var de=new y("#addAvatar",{formSubmitCallBack:function(e){ue(Y),se.replaseAvatar(e).then((function(e){pe.setUserInfo(e),de.close()})).catch((function(e){return console.log(e)})).finally(ae(Y))}});de.setEventListeners(),M.addEventListener("click",(function(){var e=pe.getUserInfo();U.value=e.name,V.value=e.aboutMe,he.open()})),J.addEventListener("click",(function(){fe.open(),ne.toggleButtonState()})),Q.addEventListener("click",(function(){de.open(),re.toggleButtonState()})),Promise.all([se.getUserInfo(),se.getItemsGard()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];A=o._id,pe.setUserInfo(o),le.renderItems(i.reverse())})).catch((function(e){return console.log(e)}))})();