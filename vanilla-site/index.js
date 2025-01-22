/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
const sanitizeHTML = function (str) {
    const temp = document.getElementById('fetchDate');
    temp.textContent = str;
	return temp.innerHTML;
};
window.onload = function() {
    fetch(
        "https://api.github.com/repos/Schallenballa/Portfolio/branches/main"
    )
        .then(response => {
            response.json().then(json => {
                const stringParam = "Zachary Schallenberger © Last Updated - " + json.commit.commit.author.date.slice(0, 10) + " @ " + json.commit.commit.author.date.slice(11, 16);
                sanitizeHTML(stringParam);
            });
        })
        .catch(error => {
            console.log(error);
        });
}
