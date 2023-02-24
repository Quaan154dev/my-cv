const express = require("express");
const app = express();

const projects = [
    {
        id: 1,
        title: "Shop Dogs Project",
        techno: [
            "HTML",
            "CSS",
            "ReactJS",
            "Responsive",
        ],
        description: "This is a crazy tiny dog with big alien eyes",
        link:"https://expense-tracker-reactjs-nu.vercel.app/",
        imageUrl: "http://res.cloudinary.com/dzxfabtze/image/upload/v1675849029/rixsuaqaow81x1cuityh.png",
    },
    {
        id: 2,
        title: "Note-App",
        techno: [
            "HTML",
            "CSS",
            "JS",
            "ReactJS",
        ],
        description: "This is a crazy tiny dog with big alien eyes",
        link:"https://note-app-fawn.vercel.app/",
        imageUrl: "https://res.cloudinary.com/dzxfabtze/image/upload/v1676904240/bvu59wfn5fu8mmi4olgf.png",
    },
    {
        id: 3,
        title: "Macintosh",
        techno: [
            "HTML",
            "CSS",
            "Responsive",
        ],
        description: "Cloning Macintosh's website,this is the project I worked on for the first few days .",
        link:"https://macintosh-1ii2.vercel.app/",
        imageUrl: "https://res.cloudinary.com/dzxfabtze/image/upload/v1676740089/tswnxpeqlzlqgntwvu5g.png",
    },
];

app.get("/v1/project", (req, res) => {
    res.status(200).json(projects);
});
app.listen("8080",() => {
    console.log("Server is running........");
});