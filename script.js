const pictures = document.getElementById("pictures");
const input = document.getElementById("searchbar");
const photos = [
    {
        name: "photos\\aspen.jpg",
        tags: '"trees","tree","colors","forest","fall","aspen","dark","clouds","cloudy","autumn","orange","green","colorado"'
    },
    {
        name: "photos\\beachBW.jpg",
        tags: '"beach","black","white","rocks","california","water","ocean","sand","cloudy","clouds","grey","landscape","seascape","long","exposure"'
    },
    {
        name: "photos\\beachsunset.jpg",
        tags: '"beach,rocks,california,water,ocean,sand,cloudy,clouds,landscape,seascape,long,exposure,colors,pink,orange,purple,smooth"'
    },
    {
        name: "photos\\cityscape.jpg",
        tags: '"city","long","exposure","skyscrapers","orange","blue","sunset","atlanta","highway","georgia","cars","lights"'
    },
    {
        name: "photos\\mountains.jpg",
        tags: '"mountains","landscape","mountain","light","orange","yellow","sunrise","forest","clouds","sun","trees","tennessee"'
    },
    {
        name: "photos\\nightscape.jpg",
        tags: '"city","long","exposure","skyscrapers","orange","blue","night","atlanta","highway","georgia","cars","lights"'
    },
    {
        name: "photos\\skyscrapers.jpg",
        tags: '"skyscrapers","black","white","clouds","fog","atlanta","georgia","buildings","city","up"'
    },
    {
        name: "photos\\waterfall.jpg",
        tags: '"waterfall","water","georgia","blue","tree","ice","winter","icicles","creek","rocks","sticks","brown","long","exposure"'
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
