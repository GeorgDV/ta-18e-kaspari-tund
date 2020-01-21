const axios = require("axios");
const $ = require("cheerio");

const Path = require("path");
const Fs = require("fs");

async function downloadImage(id){
    const path = Path.resolve(__dirname, id + ".jpg");
    const writer = Fs.createWriteStream(path);
    const response = await axios.get("https://xkcd.com/" + id + "/");
    let imgEl = $("#comic img", response.data).first();
    data = {
        title: imgEl.attr("title"),
        img: imgEl.attr("src"),
        alt: imgEl.attr("alt"),
    };
    const imgResponse = await axios({
        url: "https:" + data.img, 
        method: "GET",
        responseType: "stream"
    });
    imgResponse.data.pipe(writer);
} 

for (let i = 2226; i > 0; i--)
{
    downloadImage(i);
}
