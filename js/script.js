var clientId = "jsbQwXIeybQ-iq80Silc2vQTJJKK0JVoyEK6p5pKrjg";
var page = 1
var url;
function search() {

    document.getElementById("result").innerHTML = "";
    page = 1;
    let query = document.getElementById("searchBox").value.replace(" ", "-");
    document.getElementById("topic").innerHTML = `<h1>${query}</h1>`;
    url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&per_page=30&query=" + query;

    var image;

    console.log(url);
    fetch(url)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            console.log(data);

            data.results.forEach(newImg => {

                image = `<a target="_blank" href="${newImg.urls.full}">
                            <img alt="${ newImg.alt_description}" src="${newImg.urls.regular}"/>
                        </a>`
                $("#result").append(image);
            });
        })
}

function loadMore() {
    page++;
    console.log(url + "&page=" + page);
    fetch(url + "&page=" + page)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            console.log(data);

            data.results.forEach(newImg => {

                image = `<a target="_blank" href="${newImg.urls.full}">
                            <img alt="${ newImg.alt_description}" src="${newImg.urls.regular}"/>
                        </a>`

                $("#result").append(image);
            });
            $('#result').justifiedGallery({
                rowHeight: 200,
                lastRow: 'nojustify',
                margins: 20
            });
        })
}

function listView() {
    console.log("List View");

}

function gridView() {
    console.log("Grid View");

}