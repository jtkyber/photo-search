const pictures = document.getElementById("pictures");
const input = document.getElementById("searchbar");
const photos = [
    {
        name: "photos\\aspen.jpg",
        tags: '"all",trees","tree","colors","forest","fall","aspen","dark","clouds","cloudy","autumn","orange","green","colorado"'
    },
    {
        name: "photos\\beachBW.jpg",
        tags: '"all","beach","black","white","rocks","california","water","ocean","sand","cloudy","clouds","grey","landscape","seascape","long","exposure"'
    },
    {
        name: "photos\\beachsunset.jpg",
        tags: '"all","beach,rocks,california,water,ocean,sand,cloudy,clouds,landscape,seascape,long,exposure,colors,pink,orange,purple,smooth"'
    },
    {
        name: "photos\\cityscape.jpg",
        tags: '"all","city","long","colors","exposure","skyscrapers","orange","blue","sunset","atlanta","highway","georgia","cars","lights"'
    },
    {
        name: "photos\\mountains.jpg",
        tags: '"all","mountains","landscape","colors","mountain","light","orange","yellow","sunrise","forest","clouds","sun","trees","tennessee"'
    },
    {
        name: "photos\\nightscape.jpg",
        tags: '"all","city","long","exposure","colors","skyscrapers","orange","blue","night","atlanta","highway","georgia","cars","lights"'
    },
    {
        name: "photos\\skyscrapers.jpg",
        tags: '"all","skyscrapers","black","white","clouds","fog","atlanta","georgia","buildings","city","up"'
    },
    {
        name: "photos\\waterfall.jpg",
        tags: '"all","waterfall","water","colors","georgia","blue","tree","ice","winter","icicles","creek","rocks","sticks","brown","long","exposure"'
    }
];

function inputLength() {
    return input.value.length;
}

const loadPhotos = (event) => {
    photos.forEach(photo => {
        let { name } = photo;
        let { tags } = photo;
        if (tags.includes(input.value)) {
            const img = document.createElement("img");
            img.src = name;
            pictures.appendChild(img);
            img.classList.add(tags);
        }
    })
}

const clearPhotos = () => {
    pictures.innerHTML = "";
}

const addListAfterKeypress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        clearPhotos();
        loadPhotos();
        input.value = "";
    }
}

document.body.addEventListener("keypress", addListAfterKeypress);
