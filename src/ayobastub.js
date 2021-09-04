  import * as microAyoba from './microapp'       
        
  export function finish() {
    return "This api call will close the ayoba microApp";
      }

  export function sendMessage() {
      return "message has been send..!"
  }

  export function composeMessage() {
      return "This Api will open the chat"  
  }

  export function sendMedia() {
      return ("https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg , image/jpg");
  }

  export function sendLocation() {
      return "Latitude: -26.185357775567436" + " " + "Longitude: 28.019023561909993";
  }

  export function getCountry() {
      var country = "ZA";
      return country;
  }

  export function getContacts() {
      var jsonContacts = "27833241313";
      return jsonContacts
  }

  export function getMsisdn() {
      var msisdn = "27833241313";
      return msisdn;
  }

  export function getCanSendMessage() {
      var canSendMessage = "1";
      return canSendMessage;
  }

  export function getLanguage() {
      var language = "en";
      return language
  }

  export function getSelfJid() {
      var selfJid = "65c3kdflfc5c7c3hb30lc7615beda57031p2d2df@dev.ayoba.me";
      return selfJid;
  }


  export function triggerLocationChanged() {
      microAyoba.onLocationChanged(-26.185357775567436, 28.019023561909993);
  }

  export function triggerProfileChanged() {
    microAyoba.onProfileChanged("test name", "https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg");
  }

  export function triggerPresenceChanged() {
    microAyoba.onPresenceChanged("test presence");
  }

  export function triggerMediaSentResponse() {
    microAyoba.onMediaSentResponse(1);
  }

  export function triggerLocationSentResponse() {
    microAyoba.onLocationSentResponse(1);
  }

  export function triggerNicknameChanged() {
    microAyoba.onNicknameChanged("test nickname");
  }


