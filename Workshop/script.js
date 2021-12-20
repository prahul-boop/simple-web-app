let match_id = 2432997;
let timer = 86400000;

for(let i = 1; i<4; i++)
{
  setTimeout(function(){
    match_id = match_id + 2;
    fetch("https://cricket-live-data.p.rapidapi.com/match/".concat(match_id.toString()), {
     "method": "GET",
     "headers": {
       "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
       "x-rapidapi-key": "809886ed89msh930c80beee96369p134394jsn66a7a0b7cfcf"
     }
    })
     .then(response => {
       console.log(response);
       if(!response.ok)
       {
         throw Error("Oooh La la");
       }
       return response.json()
     })
     .then(data => {
       let api = new XMLHttpRequest();
       api.open("GET", "https://api.telegram.org/bot5065713297:AAFlIS_nyjbQvjOPtd1QclHau-3mE229pzE/sendMessage?chat_id=1346901426&text=".concat(data.results.fixture.match_title, "\n", data.results.fixture.venue), true);
       api.send();
       console.log(Success!);
     })
     .catch(error =>{
       console.log(error);
     });
  } , i*timer);
}
