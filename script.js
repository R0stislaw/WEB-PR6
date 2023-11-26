const header = document.querySelector("header");
const section = document.querySelector("section");
const requestURL = "https://semegenkep.github.io/json/example.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
  console.log(superHeroes);
};
function populateHeader(superHeroes) {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.innerHTML = superHeroes.squadName;
  p.innerHTML = `HomeTown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}`;
  header.appendChild(h1);
  header.appendChild(p);
}
function showHeroes(superHeroes) {
  const members = superHeroes.members;
  members.forEach((hero) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = hero.name;
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.innerHTML =
      `Secret identity: ${hero.secretIdentity}` +
      "<br>" +
      `Age: ${hero.age}` +
      "<br>" +
      `Superpowers:`;
    const ul = document.createElement("ul");
    hero.powers.forEach((power) => {
      const li = document.createElement("li");
      li.innerHTML = power;
      ul.appendChild(li);
    });
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(ul);
    section.appendChild(article);
  });
}
