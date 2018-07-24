(function() {
  // all funcitonality to go here

  var submitBtn = document.getElementById("submit-btn");
  var body = document.querySelector("body");
  var textDiv = document.getElementById("output");


  let emojiString = "";

  let numberOfEmojis = "";

  const emojiPool =
    "😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😙😚🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲☹️🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱😳🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀👻👽🤖💩😺😸😹😻😼😽🙀😿😾🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐚🐞🐜🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙🦑🦐🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🐘🦏🐪🐫🦒🐃🐂🐄🐎🐖🐏🐑🐐🦌🐕🐩🐈🐓🦃🕊🐇🐁🐀🐿🦔🐾🐉🐲🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🌾💐🌷🌹🥀🌺🌸🌼🌻🌞🌝🌛🌜🌚🌕🌖🌗🌘🌑🌒🌓🌔🌙🌎🌍🌏💫⭐️🌟✨⚡️☄️💥🔥🌪🌈☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨❄️☃️⛄️🌬💨💧💦☔️☂️🌊🌫🍏🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🍍🥥🥝🍅🍆🥑🥦🥒🌶🌽🥕🥔🍠🥐🍞🥖🥨🧀🥚🍳🥞🥓🥩🍗🍖🌭🍔🍟🍕🥪🥙🌮🌯🥗🥘🥫🍝🍜🍲🍛🍣🍱🥟🍤🍙🍚🍘🍥🥠🍢🍡🍧🍨🍦🥧🍰🎂🍮🍭🍬🍫🍿🍩🍪🌰🥜🍯🥛🍼☕️🍵🥤🍶🍺🍻🥂🍷🥃🍸🍹🍾🥄🍴🍽🥣🥡🥢";

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var integer = Math.floor(Math.random() * (max - min)) + min;
    if (integer % 2 === 0) {
      return integer;
    } else {
      return getRandomInt(min, max);
    }
  }

  function addEmoji(string) {
    while (string.length <= parseInt(numberOfEmojis)) {
      var randomInt = getRandomInt(0, 400);
      string += emojiPool.substring(randomInt, randomInt + 2);
    }
    return string;
  }

  function httpGetRequest(colour) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        body.style.backgroundColor = colour;
        numberOfEmojis = document.getElementById("input").value;
        var emojiOutput = addEmoji(emojiString);
        textDiv.innerText = emojiOutput;
      }
    };
    xhr.open("GET", "/", true);
    xhr.send();
  }

  submitBtn.addEventListener("click", function() {
    httpGetRequest("rgb(255, 79, 85)");
  });

  submitBtn.addEventListener("click", function(event){
    event.preventDefault()
  });
  
})();
