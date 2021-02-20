const pictures = document.getElementById("pictures");
const input = document.getElementById("searchbar");

const photos = [
    {
        name: "photos\\aspen.jpg",
        tags: "all,nature,leaf,leaves,trees,colors,forests,fall,aspens,dark,clouds,cloudy,autumn,oranges,greens",
        location: "colorado,"
        // tags: ["all","trees","tree","colors","forest","fall","aspen","dark","clouds","cloudy","autumn","orange","green","colorado"]
    },
    {
        name: "photos\\beachBW.jpg",
        tags: "all,nature,beaches,boulders,blacks,whites,blackandwhites,rocks,water,oceans,sand,cloudy,clouds,greys,landscapes,seascapes,longexposures",
        location: "california"
        // tags: ["all","beach","black","white","rocks","california","water","ocean","sand","cloudy","clouds","grey","landscape","seascape","long","exposure"]
    },
    {
        name: "photos\\beachsunset.jpg",
        tags: "all,nature,beaches,boulders,relaxing,rocks,water,oceans,sand,cloudy,clouds,landscapes,seascapes,longexposures,colors,pinks,oranges,purples,smooth,sunsets",
        location: "california"
        // tags: ["all","beach","rocks","california","water","ocean","sand","cloudy","clouds","landscape","seascape","long","exposure","colors","pink","orange","purple","smooth"]
    },
    {
        name: "photos\\cityscape.jpg",
        tags: "all,roads,city,citylights,cities,colors,longexposure,skyscrapers,oranges,blues,sunsets,highways,cars,lights",
        location: "atlanta,georgia"
        // tags: ["all","city","long","colors","exposure","skyscrapers","orange","blue","sunset","atlanta","highway","georgia","cars","lights"]
    },
    {
        name: "photos\\mountains.jpg",
        tags: "all,nature,relaxing,mountains,sunny,landscapes,colors,light,oranges,yellows,sunrises,forests,clouds,sun,trees,appalachianmountains",
        location: "northcarolina"
        // tags: ["all","mountains","landscape","colors","mountain","light","orange","yellow","sunrise","forest","clouds","sun","trees","tennessee"]
    },
    {
        name: "photos\\nightscape.jpg",
        tags: "all,roads,city,citylights,cities,longexposures,colors,skyscrapers,oranges,blues,night,highways,cars,lights",
        location: "georgia,atlanta"
        // tags: ["all","city","long","exposure","colors","skyscrapers","orange","blue","night","atlanta","highway","georgia","cars","lights"]
    },
    {
        name: "photos\\skyscrapers.jpg",
        tags: "all,skyscrapers,blackandwhites,blacks,whites,clouds,greys,fog,buildings,city,cities,up,tall,architecture",
        location: "georgia,atlanta"
        // tags: ["all","skyscrapers","black","white","clouds","fog","atlanta","georgia","buildings","city","up"]
    },
    {
        name: "photos\\winterwaterfall.jpg",
        tags: "all,relaxing,nature,waterfalls,water,colors,blues,tree,ice,winter,icicles,creeks,sticks,browns,longexposures,branches,cold",
        location: "georgia,dukescreekfalls"
        // tags: ["all","waterfall","water","colors","georgia","blue","tree","ice","winter","icicles","creek","rocks","sticks","brown","long","exposure"]
    },
    {
        name: "photos\\tunnel.jpg",
        tags: "all,tunnels,colors,lights,oranges,downtown,krog,city",
        location: "georgia,atlanta"
    },
    {
        name: "photos\\watch.jpg",
        tags: "all,watches,browns,blacks,time,leather,clock,silvers,hamilton,accessories,accessory,round",
        location: "georgia,marietta"
    },
    {
        name: "photos\\building.jpg",
        tags: "all,skyscrapers,blacks,whites,blackandwhites,clouds,fog,buildings,city,cities,greys,tall,architecture",
        location: "georgia,atlanta"
    },
    {
        name: "photos\\rocks.jpg",
        tags: "all,gardens,trees,rocks,blacks,whites,rockformations,blackandwhites,greys,landscapes,shadows,park",
        location: "colorado,gardenofthegods,coloradosprings"
    },
    {
        name: "photos\\flashlight.jpg",
        tags: "all,flashlights,men,boys,man,male,friends,night,sky,stars,person,blues,greens,dark,lights,man,trees,longexposures",
        location: "northcarolina"
    },
    {
        name: "photos\\fountain.jpg",
        tags: "all,fountains,purple,green,water,macro,closeup,dark,night,colors,reflection,bokeh",
        location: "asheville,northcarolina"
    },
    {
        name: "photos\\chain.jpg",
        tags: "all,chains,lights,boats,oceans,docks,sun,yellows,rustic,rusty,sunsets",
        location: "southcarolina,hiltonhead"
    },
    {
        name: "photos\\hotspring.jpg",
        tags: "all,hotspring,water,trees,oranges,blues,sunny,greens,clouds,steam,smooth,colors,nature,landscapes,nationalparks",
        location: "wyoming,grandprismatic,yellowstone"
    },
    {
        name: "photos\\leconte.jpg",
        tags: "all,nature,relaxing,mountains,landscapes,colors,oranges,purples,blues,sunrises,forests,clouds,trees,foggy,appalachianmountains",
        location: "tennessee,mountleconte,mtleconte"
    },
    {
        name: "photos\\leaves.jpg",
        tags: "all,greens,leaf,leaves,shapes,vortex,circles,round,plants,nature,garden",
        location: "georgia,marietta"
    },
    {
        name: "photos\\waterfallrocks.jpg",
        tags: "all,waterfalls,rocks,relaxing,flow,longexposures,nature,greens,blues,creeks",
        location: "georgia,risingfawn,stateparks,cloudlandcanyon"
    },
    {
        name: "photos\\flower.jpg",
        tags: "all,flowers,spring,garden,pinks,greens,pretty,nature,plants,blossom,closeups,macro,bokeh,colors",
        location: "georgia,marietta"
    },
    {
        name: "photos\\sadie.jpg",
        tags: "all,sadie,dogs,pets,animals,blackandwhites,blacks,whites,tunnels,circles,round,happy,barrels,prancing,walking,running,smile,smiling,friends",
        location: "marietta,georgia"
    },
    {
        name: "photos\\waterfall.jpg",
        tags: "all,waterfalls,relaxing,flow,longexposures,nature,greens,blues,creeks",
        location: "georgia,risingfawn,stateparks,cloudlandcanyon"
    },
    {
        name: "photos\\leaf.jpg",
        tags: "all,leaf,leaves,round,circles,greens,browns,wood,nature,texture,shapes, macro, closeups",
        location: "marietta,georgia"
    },
    {
        name: "photos\\tunnelBW.jpg",
        tags: "all,tunnels,blackandwhites,blacks,whites,person,women,girl,lady,woman,female,art,spraypainting,dark,lights,graffiti",
        location: "atlanta,georgia,krogstreettunnel"
    },
    {
        name: "photos\\scarytunnel.jpg",
        tags: "all,tunnels,longexposures,person,art,spraypainting,dark,lights,cars,oranges,reds,scary,man,person,male,men,boys,graffiti,colors",
        location: "atlanta,georgia,krogstreettunnel"
    },
    {
        name: "photos\\tunnelLE.jpg",
        tags: "all,tunnels,longexposures,art,spraypainting,dark,lights,cars,oranges,graffiti,colors",
        location: "atlanta,georgia,krogstreettunnel"
    },
    {
        name: "photos\\tunnelartist.jpg",
        tags: "all,graffitiartists,man,men,male,boys,colors,yellows,dark,lights",
        location: "atlanta,georgia,krogstreettunnel"
    },
];

function inputLength() {
    return input.value.length;
}

// Load Photos

const loadPhotos = (event) => {
    photos.forEach(photo => {
        let { name } = photo;
        let { tags } = photo;
        let { location } = photo;
        const img = document.createElement("img");
        // img.classList.add(...tags);
        if (((tags.includes(input.value.toLowerCase())) || location.includes(input.value.toLowerCase())) && inputLength() > 1) {
            img.src = name;
            pictures.appendChild(img);
            img.classList.add("hovereffect");
            setTimeout(addBorder = () => {
                img.classList.add("imgborder");
            },);
        }
    })
}

const clearPhotos = () => {
    pictures.innerHTML = "";
}

const addPhotosAfterKeypress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        input.value = input.value.replace(/ /g, "");
        if (input.value === "men" || input.value === "man" || input.value === "male") {
            input.value = input.value.replace(input.value, "boys");
            // input.value = input.value.replace(/men/g, "boys");
        }
        clearPhotos();
        loadPhotos();
        input.value = "";
    }
}

// Enlarge Photo on Click

const enlargePhoto = (event) => {
    const img = document.getElementsByTagName("img");
    let t = event.target;
    if (t.tagName === "IMG") {
        t.classList.toggle("enlarge");
        t.classList.toggle("hovereffect");
    }
}

document.body.addEventListener("keypress", addPhotosAfterKeypress);
document.body.addEventListener("click", enlargePhoto);
