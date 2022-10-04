const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const round = urlParams.get("round");

// load the json file from round_data.json
async function round_() {
    const response = await fetch("round_data.json");
    const data = await response.json();
    return data;
}

// get the data from the json file
round_().then((data) => {
    // get the round data
    for (let i = 0; i < data.length; i++) {
        if (data[i].round == round) {
            round_data = data[i];
            console.log(round_data);
        }
    }

    // add the ACSL wiki link to the resources
    const ACSL = document.getElementById("ACSL");
    const ACSL_link = document.createElement("a");
    ACSL_link.href = "https://www.acsl.org/";
    ACSL_link.innerHTML = "ACSL-wiki entry";
    ACSL.appendChild(ACSL_link);
    // add all other resources
    const resources = document.getElementById("Resources");
    for (let i = 0; i < round_data.Resources.length; i++) {
        console.log('hi');
        const resource = document.createElement("li");
        const resource_link = document.createElement("a");
        resource_link.href = round_data.Resources[i].link;
        resource_link.innerHTML = round_data.Resources[i].description;
        resource.appendChild(resource_link);
        resources.appendChild(resource);
    }


    const Psets = document.getElementById("Psets");
    // emmed the pset .doc link as an iframe
    const pset_link = document.createElement("iframe");
    pset_link.src = round_data.pset;
    pset_link.width = "45%";
    pset_link.height = "500px";
    Psets.appendChild(pset_link);
    // add the pset solutions link as an iframe
    const pset_solutions_link = document.createElement("iframe");
    pset_solutions_link.src = round_data.pset_solutions;
    pset_solutions_link.width = "45%";
    pset_solutions_link.height = "500px";
    Psets.appendChild(pset_solutions_link);


    // emmbed the youtube playlist link as an iframe
    // TODO: THIS IS NOT WORKING
    const Videos = document.getElementById("Videos");
    const videos_link = document.createElement("iframe");
    videos_link.src = round_data.Playlist;
    videos_link.width = "100%";
    videos_link.height = "500px";
    videos_link.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    Videos.appendChild(videos_link);



});