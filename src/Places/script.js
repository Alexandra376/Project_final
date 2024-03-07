const main = document.getElementById("main");

const getData = async () => {
    const response = await fetch('https://alexandra376.github.io/Api/data.json');
    const data = await response.json();

    data.forEach(item => {
        const { title, image, description, link } = item;

        const card = document.createElement("div");
        const placesTitle = document.createElement("h2");
        const placesImage = document.createElement("img");
        const placesDescription = document.createElement("p");
        const placesLink = document.createElement("a");

        card.className = "card";
        description.className = "description";

        placesTitle.textContent = title;
        placesImage.src = image;
        placesDescription.textContent = description;
        placesLink.href = link;

        main.append(card);
        card.append(placesTitle, placesImage, placesDescription, placesLink);
    });
}
getData();
