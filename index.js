window.onload = function() {
  const returnVar =
  fetch(
      "https://api.github.com/repos/Schallenballa/Portfolio/branches/main"
    )
    .then(response => {
      response.json().then(json => {
        document.getElementById('fetchDate').innerHTML = "Zachary Schallenberger © Last Updated - " + json.commit.commit.author.date.slice(0,10) + " @ " + json.commit.commit.author.date.slice(11,16);
      });
    })
    .catch(error => {
      console.log(error);
    });
}
