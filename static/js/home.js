document.addEventListener('readystatechange', () => {
  if (document.readyState !== 'complete') return;

  const btn = document.getElementById('login');
  btn.addEventListener('click', fetchJsonData);
});

async function fetchJsonData() {
  console.log('called');
  const url = 'https://api.varzesh3.com/v2.0/leaguestat/widget/5/471';
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

