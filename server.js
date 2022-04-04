var express = require("express");
var app = express();
const cors =  require('cors')
app.use(cors());

app.get("/", function(req, res){
    res.send("This is home page");
});

app.get("/projects", function(req, res){
   let projects = [
    {title: 'Currency Converter', description: 'A web app that is a currency converter made with Javascript, HTML and CSS.', level:"Advanced",img: "cur.png",linkGit:"https://github.com/TDL2627/currencyConvertor",linkLive:"https://curconvert2627.netlify.app/"},
    {title: 'Quiz', description: 'A riddle game made with HTML,PHP and CSS.', level:"Advanced",img: "quiz.png",linkGit:"https://github.com/TDL2627/quiz",linkLive:"https://tdl2627-quiz.herokuapp.com/"},
    {title: 'Omnibar', description: 'A unique navbar I created myself from scratch.', level:"Moderate",img: "omni.png",linkGit:"https://github.com/TDL2627/omniBar",linkLive:"https://omnibar.netlify.app/"},
    {title: 'myMentor', description: 'An app made for first year university students to help them with their transition.It has multiple features', level:"Advanced",img: "mentor.png",linkGit:"https://github.com/TDL2627/myMentor",linkLive:"https://mymentor2627.web.app/"},
        {title: 'Anime', description: 'A basic animation made with HTML and CSS.', level:"Moderate",img: "anime.png",linkGit:"https://github.com/TDL2627/basic-anime",linkLive:"https://tdl2627-anime.netlify.app/"},
        {title: 'Reactor', description: 'A reaction game made with VUEjs.', level:"Moderate",img: "reactor.png",linkGit:"https://github.com/TDL2627/ReactGame",linkLive:"https://reactor2627.web.app/"},
        {title: 'Clock', description: 'A clock that greets made with HTML,Javascript and CSS.', level:"Basic",img: "clock.png",linkGit:"https://github.com/TDL2627/clock",linkLive:"https://tdl2627-clock.netlify.app/"},
      {title: 'Charizard', description: 'A fan page created using fetch API.', level:"Moderate",img: "charizard.png",linkGit:"https://github.com/TDL2627/charizard",linkLive:"https://tdl2627-charizard.netlify.app/"},
     {title: 'Swegga', description: 'A web app that does cart operations.', level:"Moderate",img: "swegga.png",linkGit:"https://github.com/TDL2627/swegga",linkLive:"https://tdl2627-swegga.netlify.app/"},
       {title: 'Mock site', description: 'A duplicate website made with HTML and CSS.', level:"Basic",img: "doob.png",linkGit:"https://github.com/TDL2627/doob-single-page",linkLive:"https://tdl2627-a-single-page.netlify.app/"},
     {title: 'Cards', description: 'Basic cards made with HTML and CSS.', level:"Basic",img: "card.png",linkGit:"https://github.com/TDL2627/basic-cards",linkLive:"https://tdl2627-cards.netlify.app/"},
      {title: 'Calculator', description: 'A basic calculator made with Javascript, HTML and CSS.', level:"Moderate",img: "calculator.png",linkGit:"https://github.com/TDL2627/calculator",linkLive:"https://tdl2627-calculator.netlify.app/"},
     {title: 'Blog App', description: 'This is a colabrative full MEAN stack blog application that was made with Angular,HTML,BOOTSTRAP,CSS,NODE JS ,FIRE BASE and JavaScript. Here you can login and share your coding experience.', level:"Advanced",img: "blog.png",linkGit:"https://github.com/TDL2627/blog-app",linkLive:"https://tech-path.herokuapp.com/landing-page/"},
     {title: 'Single Page', description: 'A basic website made with Bootstrap, HTML and CSS.', level:"Moderate",img: "single.png",linkGit:"https://github.com/TDL2627/single-page",linkLive:"https://tdl2627-single-page.netlify.app/"},
      {title: 'Form', description: 'A basic functional form made with HTML and CSS.', level:"Basic",img: "form.png",linkGit:"https://github.com/TDL2627a-/basic-form",linkLive:"https://tdl2627-form.netlify.app/"},
       {title: 'Business', description: 'One of my first made with HTML and CSS.', level:"Basic",img: "interior.png",linkGit:"https://github.com/TDL2627/inerterior",linkLive:"https://interior-tdl2627.netlify.app/"},
     {title: 'Temp Converter', description:'A temperature converter made with Javascript, HTML and CSS.', level:"Moderate",img: "tempConvert.png",linkGit:"https://github.com/TDL2627/temperature-converter",linkLive:"https://tdl2627-temp-convert.netlify.app/"},
      {title: 'Ecommerce Demo', description: 'A simple crud ecommerce site made with HTML and CSS.', level:"Advanced",img: "guns.png",linkGit:"https://github.com/TDL2627/advanceCrud",linkLive:"https://guns-2627.netlify.app/"},
     {title: 'Pokemon', description: 'Cards made with data fetched from api, HTML and CSS.', level:"Moderate",img: "pokedex.png",linkGit:"https://github.com/TDL2627/pokedex",linkLive:"https://tdl2627-pokedex.netlify.app/"},
     {title: 'Portfolio MK2', description: 'A portfolio made with Javascript, HTML and CSS.', level:"Moderate",img: "port2.png",linkGit:"https://github.com/TDL2627/portfolio",linkLive:"https://tdl2627-portfolio.netlify.app/"},
     {title: 'Movie Download Site', description: 'A site to download movies with no ads made with Javascript, HTML and CSS.', level:"Moderate",img: "movie.png",linkGit:"https://github.com/TDL2627/movies",linkLive:"https://moveees.netlify.app/"},
     {title: 'Fetch From API', description: 'A site that fecthes data from premade APIs made with Javascript, HTML and CSS.', level:"Moderate",img: "fetch.png",linkGit:"https://github.com/TDL2627/fetchAPI",linkLive:"https://tdl2627-api.netlify.app/"},
     {title: 'myMusic', description: 'A web app that streams my music from google drive made with Javascript, HTML and CSS.', level:"Moderate",img: "music.png",linkGit:"https://github.com/TDL2627/musick",linkLive:"https://ourmusic.netlify.app/"},
     {title: 'BMI calculator', description: 'A web app that calculates your BMI made with Javascript, HTML and CSS.', level:"Moderate",img: "bmi.png",linkGit:"https://github.com/TDL2627/BMI-calculator",linkLive:"https://tdl2627-bmi.netlify.app/"},
     {title: 'Nike Point of Sale', description: 'A web app that calculates your BMI made with VueJS, HTML, CSS, Javascript and Mongo DB.', level:"Advanced",img: "pos.png",linkGit:"https://github.com/TDL2627/nike-store",linkLive:"https://point-of-sale-914ac.web.app/"}


     ]
     res.send(projects)
});


app.get("/testimonials", function(req, res){
    let people=[
        {name:"Godwin",title:"Head of Curriculum and Learning",pic:'Godwin.jpeg',qoute:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
         {name:"Jason",title:"Lecturer ",pic:'jason-wandrag-nobg-2.png',qoute: "'Ashley brings a unique energy to my class. He enjoys participating in class activities. It's always great to see him well-behaved in my class. I am excited about Ashley's potential and I can't wait to see how he will grow in the future.'"},
          {name:"Sibabalo",title:"Web Developer",pic:'sibablo.jpg',qoute:" 'A very creative and resourceful person. A great team player.'"},
         {name:"Jude",title:"Aspiring Web Developer",pic:'Jude3.jpg',qoute:" 'He knows what is he doing.'"},
            {name:"Bulela",title:"Aspiring Web Developer",pic:'Bulela1.jpg',qoute:"' He can work well with others.'"},
             {name:"Kischa",title:"Graphic Designer",pic:'Kischa4.jpg',qoute:"'He is very creative and has a great imagination.'"},
      ]
      res.send(people)
 });

const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});