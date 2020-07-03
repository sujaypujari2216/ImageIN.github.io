var clientId = "jsbQwXIeybQ-iq80Silc2vQTJJKK0JVoyEK6p5pKrjg";
var page = 1
var url;
var query = "random";
var i = 0;


var topbtn = document.getElementById("topbtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
}

function gototop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

first()
function first() {
    page = 1;
    i = 0;

    document.getElementById("topic").innerHTML = `<h1>random</h1><small id=count></small>`;
    url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&per_page=30&query=random";

    var image;

    fetch(url)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            // console.log(data);

            data.results.forEach(newImg => {

                i++;
                if (newImg.description == null) {
                    newImg.description = "no description";
                    //console.log(newImg.description);
                }

                image = `<div class="desc">
                            <a target="_blank" href="${newImg.urls.full}">
                                <img alt="${ newImg.alt_description}" src="${newImg.urls.small} title="${newImg.description}""/>
                            </a>
                            <div class="data">
                                <div class="img-desc">${ newImg.description}</div>
                                <div class="likes"><i class="fa fa-heart"></i>${newImg.likes}</div>
                                <div class="tags"><ul>Tags:`;
                newImg.tags.forEach(tag => {
                    image = image + `<li>${tag.title}</li>
                                    `;
                });

                // <li>${newImg.tags[1].title}</li>
                // <li>${newImg.tags[2].title}</li>
                image = image + `</ul>
                                </div>
                                <div class="download">
                                    <button>
                                        <a target="_blank" href="${newImg.links.html}">
                                            <i class="fa fa-download"></i>Download
                                        </a>
                                    </button>
                                </div>
                                <div class="open">
                                    <button>
                                        <a target="_blank" href="${newImg.urls.full}">
                                            <i class="fa fa-external-link-square"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>`
                $("#result").append(image);
            });
            document.getElementById("count").innerHTML = `showing ${i} of ${data.total}`;
            if (i == 0 || i == data.total)
                document.getElementById("load").innerHTML = "";
        })
}
function search() {

    document.getElementById("result").innerHTML = "";
    page = 1;
    i = 0;
    query = document.getElementById("searchBox").value.replace(" ", "-");
    document.getElementById("topic").innerHTML = `<h1>${query}</h1><small id=count></small>`;
    url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&per_page=30&query=" + query;

    var image;

    fetch(url)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            // console.log(data);

            data.results.forEach(newImg => {

                i++;
                if (newImg.description == null) {
                    newImg.description = "no description";
                    //console.log(newImg.description);
                }

                image = `<div class="desc">
                            <a target="_blank" href="${newImg.urls.full}">
                                <img alt="${ newImg.alt_description}" src="${newImg.urls.small} title="${newImg.description}""/>
                            </a>
                            <div class="data">
                                <div class="img-desc">${ newImg.description}</div>
                                <div class="likes"><i class="fa fa-heart"></i>${newImg.likes}</div>
                                <div class="tags"><ul>Tags:`;
                newImg.tags.forEach(tag => {
                    image = image + `<li>${tag.title}</li>
                                    `;
                });

                // <li>${newImg.tags[1].title}</li>
                // <li>${newImg.tags[2].title}</li>
                image = image + `</ul>
                                </div>
                                <div class="download">
                                    <button>
                                        <a target="_blank" href="${newImg.links.html}">
                                            <i class="fa fa-download"></i>Download
                                        </a>
                                    </button>
                                </div>
                                <div class="open">
                                    <button>
                                        <a target="_blank" href="${newImg.urls.full}">
                                            <i class="fa fa-external-link-square"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>`
                $("#result").append(image);
            });
            document.getElementById("count").innerHTML = `showing ${i} of ${data.total}`;
            if (i == 0 || i == data.total)
                document.getElementById("load").innerHTML = "";
        })
}

function loadMore() {
    page++;
    // console.log(url + "&page=" + page);
    fetch(url + "&page=" + page)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            // console.log(data);

            data.results.forEach(newImg => {

                i++;
                if (newImg.description == null) {
                    newImg.description = "no description";
                    //console.log(newImg.description);
                }

                image = `<div class="desc">
                            <a target="_blank" href="${newImg.urls.full}">
                                <img alt="${ newImg.alt_description}" src="${newImg.urls.small} title="${newImg.description}""/>
                            </a>
                            <div class="data">
                                <div class="img-desc">${ newImg.description}</div>
                                <div class="likes"><i class="fa fa-heart"></i>${newImg.likes}</div>
                                <div class="tags"><ul>Tags:`;
                newImg.tags.forEach(tag => {
                    image = image + `<li>${tag.title}</li>
                                    `;
                });

                // <li>${newImg.tags[1].title}</li>
                // <li>${newImg.tags[2].title}</li>
                image = image + `</ul>
                                </div>
                                <div class="download">
                                    <button>
                                        <a target="_blank" href="${newImg.links.html}">
                                            <i class="fa fa-download"></i>Download
                                        </a>
                                    </button>
                                </div>
                                <div class="open">
                                    <button>
                                        <a target="_blank" href="${newImg.urls.full}">
                                            <i class="fa fa-external-link-square"></i>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>`
                $("#result").append(image);
            });
            document.getElementById("count").innerHTML = `showing ${i} of ${data.total}`;
            if (i == 0 || i == data.total)
                document.getElementById("load").innerHTML = "";
        })
}

function listView() {
    // console.log("List View");
    $('#result').addClass('list').removeClass('grid');
    $('#list').addClass('active');
    $('#grid').removeClass('active');

}

function gridView() {
    // console.log("Grid View");
    $('#result').addClass('grid').removeClass('list');
    $('#grid').addClass('active');
    $('#list').removeClass('active');
}