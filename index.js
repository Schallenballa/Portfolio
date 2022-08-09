window.onload = function() {
  const returnVar =
  fetch(
      "https://api.github.com/repos/Schallenballa/Portfolio/branches/main"
    )
    .then(response => {
      response.json().then(json => {
        sanitizeHTML("Zachary Schallenberger © Last Updated - " + json.commit.commit.author.date.slice(0,10) + " @ " + json.commit.commit.author.date.slice(11,16));
      });
    })
    .catch(error => {
      console.log(error);
    });
}

/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function (str) {
	var temp = document.getElementById('fetchDate');
	temp.textContent = str;
	return temp.innerHTML;
};
