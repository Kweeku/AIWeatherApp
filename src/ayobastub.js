  // import * as microAyoba from './microapp'       
        
  // export function finish() {
  //   return "This api call will close the ayoba microApp";
  //     }

  // export function sendMessage() {
  //     return "message has been send..!"
  // }

  // export function composeMessage() {
  //     return "This Api will open the chat"  
  // }

  // export function sendMedia() {
  //     return ("https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg , image/jpg");
  // }

  // export function sendLocation() {
  //     return "Latitude: -26.185357775567436" + " " + "Longitude: 28.019023561909993";
  // }

  // export function getCountry() {
  //     var country = "ZA";
  //     return country;
  // }

  // export function getContacts() {
  //     var jsonContacts = "27833241313";
  //     return jsonContacts
  // }

  // export function getMsisdn() {
  //     var msisdn = "27833241313";
  //     return msisdn;
  // }

  // export function getCanSendMessage() {
  //     var canSendMessage = "1";
  //     return canSendMessage;
  // }

  // export function getLanguage() {
  //     var language = "en";
  //     return language
  // }

  // export function getSelfJid() {
  //     var selfJid = "65c3kdflfc5c7c3hb30lc7615beda57031p2d2df@dev.ayoba.me";
  //     return selfJid;
  // }


  // export function triggerLocationChanged() {
  //     microAyoba.onLocationChanged(-26.185357775567436, 28.019023561909993);
  // }

  // export function triggerProfileChanged() {
  //   microAyoba.onProfileChanged("test name", "https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg");
  // }

  // export function triggerPresenceChanged() {
  //   microAyoba.onPresenceChanged("test presence");
  // }

  // export function triggerMediaSentResponse() {
  //   microAyoba.onMediaSentResponse(1);
  // }

  // export function triggerLocationSentResponse() {
  //   microAyoba.onLocationSentResponse(1);
  // }

  // export function triggerNicknameChanged() {
  //   microAyoba.onNicknameChanged("test nickname");
  // }


  // export class AyobaStub {
  //   constructor() {
  //     this.finish = this.finish;
  //     this.getMsisdn = this.getMsisdn;
  //     this.getCanSendMessage = this.getCanSendMessage;
  //     this.getLanguage = this.getLanguage;
  //     this.getSelfJid = this.getSelfJid;
  //     this.getContacts = this.getContacts;
  //     this.getCountry = this.getCountry;
  //     this.sendMessage = this.sendMessage;
  //     this.composeMessage = this.composeMessage;
  //     this.sendMedia = this.sendMedia;
  //     this.sendLocation = this.sendLocation;
  //     this.triggerLocationChanged = this.triggerLocationChanged;
  //     this.triggerProfileChanged = this.triggerProfileChanged;
  //     this.triggerPresenceChanged = this.triggerPresenceChanged;
  //     this.triggerMediaSentResponse = this.triggerMediaSentResponse;
  //     this.triggerLocationSentResponse = this.triggerLocationSentResponse;
  //     this.triggerNicknameChanged = this.triggerNicknameChanged;
  //   }
  
    // finish() {
    //     return "This api call will close the ayoba microApp";
    // }
  
    // sendMessage() {
    //     return "message has been send..!"
    // }
  
    // composeMessage() {
    //     return "This Api will open the chat"
    // }
  
    // sendMedia() {
    //     return ("https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg , image/jpg");
    // }
  
    // sendLocation() {
    //     return "Latitude: -26.185357775567436" + " " + "Longitude: 28.019023561909993";
    // }
  
    // getCountry() {
    //     var country = "ZA";
    //     return country;
    // }
  
    // getContacts() {
    //     var jsonContacts = "27833241313";
    //     return jsonContacts
    // }
  
    // getMsisdn() {
    //     var msisdn = "27833241313";
    //     return msisdn;
    // }
  
    // getCanSendMessage() {
    //     var canSendMessage = "1";
    //     return canSendMessage;
    // }
  
    // getLanguage() {
    //     var language = "en";
    //     return language
    // }
  
    // getSelfJid() {
    //     var selfJid = "65c3kdflfc5c7c3hb30lc7615beda57031p2d2df@dev.ayoba.me";
    //     return selfJid;
    // }
  
    // triggerLocationChanged() {
    //     onLocationChanged(-26.185357775567436, 28.019023561909993);
    // }
  
    // triggerProfileChanged() {
    //     onProfileChanged("test name", "https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg");
    // }
  
    // triggerPresenceChanged() {
    //     onPresenceChanged("test presence");
    // }
  
    // triggerMediaSentResponse() {
    //     onMediaSentResponse(1);
    // }
  
    // triggerLocationSentResponse() {
    //     onLocationSentResponse(1);
    // }
  
    // triggerNicknameChanged() {
    //     onNicknameChanged("Benedict");
    // }
  
  // }
import { onLocationChanged } from "./microapp";
import { onLocationSentResponse } from "./microapp";
import { onNicknameChanged } from "./microapp";
  export const AyobaStub = {
    getMsisdn: function(){
      return "0837828008";
  },

      getCountry: function(){
        var country = "ZA";
        return country;
    },
      sendLocation: function(){
      return "Latitude: -26.185357775567436" + " " + "Longitude: 28.019023561909993";
  },
   triggerLocationChanged:function() {
        onLocationChanged(-26.185357775567436, 28.019023561909993);
    },
        triggerLocationSentResponse: function() {
        onLocationSentResponse(1);
    },
        triggerNicknameChanged: function() {
          onNicknameChanged("Benedict");
    }
  }