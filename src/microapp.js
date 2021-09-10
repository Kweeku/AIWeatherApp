
// // /**
// //  * Determine the mobile operating system and returns the 
// //  * proper javascript interface
// //  */
// // export function getAyoba() {
// //     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

// //     // Windows Phone must come first because its UA also contains "Android"
// //     if (/windows phone/i.test(userAgent)) {
// //         return null;
// //     }

// //     if (/android/i.test(userAgent)) {
// //         // eslint-disable-next-line no-undef
// //         return Android;
// //     }

// //     // iOS detection from: http://stackoverflow.com/a/9039885/177710
// //     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
// //         return null; // todo 
// //     }

// //     return "unknown";
// // }


// /**
// * A boilerplate microapp for ayoba that implements a stub interface and debug logging on the page
// */

// import {AyobaStub} from './ayobastub';

// var debug = false;
// var ready = false;
// var context;
// var appcontext


// // This is the magic line that pushes error event to the magic console
// window.onerror = function (msg, url, line, col, error) { console.log(msg, url, line, col, error); };
// console.log("Starting...");
// var Ayoba = getAyoba();
// // Let's wait for the page to load before doing anything
// export function onNicknameChanged(nickname) {
//     currentNickname = nickname
//     console.log("USERNAME ::::",nickname)
// }

// window.document.onreadystatechange = function afterpagedLoad() {
//         if (document.readyState === 'complete') {
//             if (Ayoba === null) {
//                 console.log("Looks like we're not inside ayoba, stubbinng the situation...");
//                 Ayoba = new AyobaStub();
//                 Ayoba.triggerNicknameChanged();
//             }
//             else {
//                 console.log("Looks like we're in ayoba...");
//             };
//             console.log("List of methods available:");
//             Object.getOwnPropertyNames(Ayoba).forEach((value) => {
//                 console.log(value);
//             })
//             console.log(Object.getOwnPropertyNames(Ayoba));
//             window.onload=function(){
//             const copyButton = document.getElementById("btn_copy");
//             copyButton.addEventListener('click', () => {
//                 copyMessage("logger");
//             });
//             }
//             console.log("Now let's wait till the presence is updated...");
//           }
//         }

        




// /**
// * This function ensures that the console output is visible to the user on the page for debugging purposes
// */
// (function (logger) {
//     console.old = console.log;
//     console.log = function () {
//         var output = "", arg, i;

//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             output += "<span class=\"log-" + (typeof arg) + "\">";

//             if (
//                 typeof arg === "object" &&
//                 typeof JSON === "object" &&
//                 typeof JSON.stringify === "function"
//             ) {
//                 output += JSON.stringify(arg);
//             } else {
//                 output += arg;
//             }

//             output += "</span>&nbsp;";
//         }
//     if(logger != null){
//         logger.innerHTML += output + "<br>"
//     };
//         console.old.apply(undefined, arguments);
//     };
// })(document.getElementById("logger"));

// /**
//  * Checks if the microapp is running inside ayoba and on which OS 
//  * returns the OS name or null if not running inside ayoba
//  */
// export function getAyoba() {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     // Windows Phone must come first because its UA also contains "Android"
//     /*eslint-disable no-undef*/
//     if (/windows phone/i.test(userAgent)) {
//         return null;
//     }

//     if (/android/i.test(userAgent)) {
//         try {
//             return Android;
//         } catch (error) {
//             return null;
//         }
//     }

//     // iOS detection from: http://stackoverflow.com/a/9039885/177710
//     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         return null; // todo 
//     }
//     /*eslint-enable no-undef*/

//     return null;
// }

// /**
// * This function is called when the microapp is loaded and ready to be used
// */
// export function start(){
//     //Now that presence is updated and Ayoba is initialised, let's try calling a few functions
//     ready = true;
//     console.log("Let's try calling available methods..")
//     if (Object.getOwnPropertyNames(Ayoba).includes("getSelfJid")) {
//         console.log("Calling getSelfJid()...");
//         console.log("JID: " + getSelfJid());
//     };
//     if (Object.getOwnPropertyNames(Ayoba).includes("getMsisdn")) {
//         console.log("Calling getMsisdn()...");
//         console.log("MSISDN: " + getMsisdn());
//     };
//     if (Object.getOwnPropertyNames(Ayoba).includes("getCountry")) {
//         console.log("Country: " + getCountry());
//     };
//     if (Object.getOwnPropertyNames(Ayoba).includes("getLanguage")) {
//         console.log("Language: " + getLanguage());
//     };
// }

// /**
// * This function is called to close the microapp
// */
// export function finish() {
//     console.log(Ayoba.finish());
// }

// function sendMessage() {
//     Ayoba.sendMessage(document.getElementById("inputText").value);
// }

// export function composeMessage() {
//     Ayoba.composeMessage(document.getElementById("inputText").value);
// }

// export function copyMessage(theIndex) {
//     var strInputCode = document.getElementById(theIndex).innerHTML;
//     var cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "\n");
//     const el = document.createElement('textarea');
//     el.value = cleanText;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
// }

// export function sendMedia() {
//     Ayoba.sendMedia('https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg', 'image/jpg');
// }

// export function sendLocation() {
//     Ayoba.sendLocation(document.getElementById("inputTextLat").value, document.getElementById("inputTextLon").value);
// }

// export function getCountry() {
//     var country = Ayoba.getCountry();
//     document.getElementById("countryText").textContent = country
//     return country
// }

// export function getMsisdn() {
//     var msisdn = Ayoba.getMsisdn();
//     document.getElementById("msisdnText").textContent = msisdn
//     return msisdn
// }

// export function getSelfJid() {
//     var jid = Ayoba.getSelfJid();
//     document.getElementById("selfjidText").textContent = jid
//     return jid
// }

// export function getCanSendMessage() {
//     var canSendMessage = Ayoba.getCanSendMessage();
//     document.getElementById("cansendText").textContent = canSendMessage
//     return canSendMessage
// }

// export function getLanguage() {
//     var language = Ayoba.getLanguage();
//     document.getElementById("languageText").textContent = language
//     return language
// }

// export function getURLParameter(sParam) {
//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');
//     for (var i = 0; i < sURLVariables.length; i++) {
//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam) {
//             return sParameterName[1];
//         }
//     }
// }

// export function getSelfJidFromUrl() {
//     var selfJid = getURLParameter("jid")
//     document.getElementById("selfjidText").textContent = selfJid
//     return selfJid
// }

// /*
//  * The Ayoba native interface calls this method every time
//  * the app receives a new location event.
//  * 
//  * Remember this listener will only be called when the native
//  * permission is accepted by the user. 
//  * 
//  * In some border cases, also can receive lat=0.0, lon=0.0. Most of
//  * cases, will mean Ayoba cannot retrieve the GPS coordinates.
//  */
// export function onLocationChanged(lat, lon) {
//     document.getElementById("locationInputText").textContent = lat+", "+lon;
//     console.log("Event: location changed, lat: " + lat + ", lon: " + lon);
// }

// /*
//  * The Ayoba native interface calls this method every time
//  * the user profile changes (nickname or avatar)
//  */
// export function onProfileChanged(nickname, avatarPath) {
//     document.getElementById("nicknameInputText").textContent = nickname
//     document.getElementById("avatarImage").src = avatarPath
//     console.log("Event: profile changed, nickname: " + nickname + ", avatar path: " + avatarPath);
// }

// /*
//  * The Ayoba native interface calls this method every time
//  * the user nickname changes (infact, always online)
//  */
// export function onNicknameChanged(nickname) {
//     var checkNickname = document.getElementById("nicknameInputText").textContent 
//     if(checkNickname != null){
//         var nickname = checkNickname
//         console.log("Event: nickname changed: " + nickname);
//     }

//     //Only call start the 1st time the app is loaded
//     if (!ready){ start();};
// }

// /*
//  * The Ayoba native interface calls this method every time
//  * the user presence changes (infact, always online)
//  */
// export function onPresenceChanged(presence) {
//     document.getElementById("presenceInputText").textContent = presence
//     console.log("Event: presence changed: " + presence);
// }

// /*
//  * The Ayoba native interface calls this method every time
//  * the user avatar changes (infact, always online)
//  */
// export function onAvatarChanged(avatar) {
//     document.getElementById("avatarImage").src = avatar
//     console.log("Event: avatar changed: " + avatar);
// }

// /*
//  * This method should be implemented to retrieve the "sendMedia(...)" result
//  * 
//  * @param {int} responseCode: result code
//  *  0: the location could not be sent
//  *  1: the location has been sent successfully
//  * @param encodedUrl: Base64 encoded media file’s url
//  */
// export function onMediaSentResponse(responseCode, encodedUrl) {
//     document.getElementById("inputText").value = responseCode+" - "+encodedUrl;
//     console.log("Event: media sent, response code: " + responseCode + " URL: " + encodedUrl);
// }

// /*
//  * This method should be implemented to retrieve the "sendLocation(...)" result
//  *
//  * @param {int} responseCode: result code
//  *  0: the location could not be sent
//  *  1: the location has been sent successfully
//  */
// export function onLocationSentResponse(responseCode) {
//     document.getElementById("inputText").value = responseCode
// }

// export function getContactJid() {
//     var contactJid = getURLParameter("contactjid")
//     document.getElementById("inputText").value = contactJid
//     return contactJid
// }

// export function getContactName() {
//     var contactName = getURLParameter("contactname")
//     document.getElementById("inputText").value = contactName
//     return contactName
// }

// export function getContacts() {
//     var contactsJson = Ayoba.getContacts();
//     document.getElementById("inputText").value = contactsJson
//     return contactsJson;
// }

// export function takePicture() {
//     var responseCode = Ayoba.takePicture();
//     return responseCode;
// }

// /*
//  * This method should be implemented to retrieve the "sendPicture(...)" result
//  *
//  * @param {int} responseCode: result code
//  *  0: the picture could not be taken
//  *  1: the picture has been taken successfully
//  */
// export function onPictureRetrievedResponse(responseCode, picturePath) {
//     document.getElementById("inputText").value = responseCode
//     document.getElementById("pictureRetrieved").src = picturePath
// }

// /*
//  * Starts a conversation with a user using his JID
//  */
// export function startConversation() {
//     Ayoba.startConversation('07aaf1be5b25b7c8c6a89159bc849e1d37ca7d1c@dev.ayoba.me');
// }

// export function getFile() {
//     var responseCode = Ayoba.getFile();
//     return responseCode;
// }

// /*
//  * This method should be implemented to retrieve the "sendFileRetrievedResponse(...)" result
//  *
//  * @param {int} responseCode: result code
//  *  -1: the file could not be retrieved
//  *  1: the file has retrieved successfully
//  * @param {String} filePath: user selected files paths array
//  */
// export function onFileRetrievedResponse(responseCode, filePath) {
//     document.getElementById("inputText").value = responseCode.concat(" - ").concat(filePath)
//     document.getElementById("pictureRetrieved").src = filePath
// }

/**
* A boilerplate microapp for ayoba that implements a stub interface and debug logging on the page
*/


// 
import { RiWindowLine } from "react-icons/ri";
import { AyobaStub} from "./ayobastub";

// TODO: Create a wrapper for this
var currentNickname = "";
var currentPhone = "";

// This is the magic line that pushes error event to the magic console
window.onerror = function (msg, url, line, col, error) { console.log(msg, url, line, col, error); };
console.log("Starting...");
var Ayoba = getAyoba();

console.log(Ayoba);
// Alternative to load event
window.document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
      setTimeout(initiatePage, 3000);
  }
}

// export function onNicknameChanged(name){
//     console.log(name);
// }

window.user = {name:"",country:"",location:{lat:1,lon:1}}

export function initiatePage() {
    
    if (Ayoba === null || Ayoba === undefined) {
        console.log("Looks like we're not inside ayoba, stubbinng the situation...");
        Ayoba = AyobaStub

        Ayoba.triggerNicknameChanged();

        // Hide chat
    }
    else {
        console.log("Looks like we're in ayoba...");
    };

    console.log("List of methods available:");
    // Trigger to obtain name
    Ayoba.triggerNicknameChanged();

    Object.getOwnPropertyNames(Ayoba).forEach((value) => {
        console.log(value);
    })

    console.log("Now let's wait till the presence is updated...")
}



/**
 * Checks if the microapp is running inside ayoba and on which OS 
 * returns the OS name or null if not running inside ayoba
 */
export function getAyoba() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return null;
    }

    if (/android/i.test(userAgent)) {
        return window["Android"]
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return null; // todo 
    }

    return null;
}

/**
* This function is called when the microapp is loaded and ready to be used
*/
 

/**
* This function is called to close the microapp
*/
export function finish() {
    console.log(Ayoba.finish());
}



export function onNicknameChanged(nickname) {
    currentNickname = nickname
    window.user.name = nickname
    console.log("USERNAME ::::",nickname)
}

export function onLocationSentResponse(nickname) {
    console.log("sent response",nickname)
}

export function onLocationChanged(lat,lon) {
    window.location.lat= lat
    window.location.lon= lon
    console.log("Location:",lat,lon)
}
