// $document.ready(function(){

// });

const fetch = require("node-fetch");
const url = "https://api.varzesh3.com/v2.0/leaguestat/widget/5/471";

const fetchJsonData = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};


//fetchJsonData(_url);
