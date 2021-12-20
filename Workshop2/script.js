let match_id1 = 2432997;

function myShow()
{
  let match_id = document.getElementById("search").value;
  console.log(match_id);
  fetch("https://cricket-live-data.p.rapidapi.com/match/".concat(match_id1.toString()), {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
        "x-rapidapi-key": "99b8bcd459msh582d55ea4bb9023p1e95d6jsn312ceac70d1e"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json()
    })
    .then(data => {
      console.log(data.fixture);
    })
    .catch(error => {
      console.log(error);
    });
}

function mySend() {
  let api = new XMLHttpRequest();
  api.open("GET", "https://api.telegram.org/bot5065713297:AAFlIS_nyjbQvjOPtd1QclHau-3mE229pzE/sendMessage?chat_id=1346901426&text=".concat(document.getElementById("textarea").value), true);
  api.send();
}
