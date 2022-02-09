var express = require("express");
var app = express();
const cors = require('cors')
app.use(cors());

app.get("/", function(req, res){
    res.send("This is home page");
});

app.get("/projects", function(req, res){
   let projects = [
        {title: 'Anime', description: 'A basic animation made with HTML and CSS.', level:"Moderate",img: require("@/assets/project/anime.png"),linkGit:"https://github.com/TDL2627/basic-anime",linkLive:"https://tdl2627-anime.netlify.app/"},
     {title: 'Clock', description: 'A clock that greets made with HTML,Javascript and CSS.', level:"Basic",img: require("@/assets/project/clock.png"),linkGit:"https://github.com/TDL2627/clock",linkLive:"https://tdl2627-clock.netlify.app/"},
      {title: 'Charizard', description: 'A fan page created using fetch API.', level:"Moderate",img: require("@/assets/project/charizard.png"),linkGit:"https://github.com/TDL2627/charizard",linkLive:"https://tdl2627-charizard.netlify.app/"},
     {title: 'Swegga', description: 'A web app that does cart operations.', level:"Moderate",img: require("@/assets/project/swegga.png"),linkGit:"https://github.com/TDL2627/swegga",linkLive:"https://tdl2627-swegga.netlify.app/"},
     {title: 'Omnibar', description: 'A unique navbar I created myself.', level:"Moderate",img: require("@/assets/project/omni.png"),linkGit:"https://github.com/TDL2627/omniBar",linkLive:"https://omnibar.netlify.app/"},
      {title: 'Quiz', description: 'A riddle game made with HTML,PHP and CSS.', level:"Advanced",img: require("@/assets/project/quiz.png"),linkGit:"https://github.com/TDL2627/quiz",linkLive:"https://tdl2627-quiz.herokuapp.com/"},
       {title: 'Mock site', description: 'A duplicate website made with HTML and CSS.', level:"Basic",img: require("@/assets/project/doob.png"),linkGit:"https://github.com/TDL2627/doob-single-page",linkLive:"https://tdl2627-a-single-page.netlify.app/"},
     {title: 'Cards', description: 'Basic cards made with HTML and CSS.', level:"Basic",img: require("@/assets/project/card.png"),linkGit:"https://github.com/TDL2627/basic-cards",linkLive:"https://tdl2627-cards.netlify.app/"},
      {title: 'Calculator', description: 'A basic calculator made with Javascript, HTML and CSS.', level:"Moderate",img: require("@/assets/project/calculator.png"),linkGit:"https://github.com/TDL2627/calculator",linkLive:"https://tdl2627-calculator.netlify.app/"},
     {title: 'Blog App', description: 'This is a colabrative full MEAN stack blog application that was made with Angular,HTML,BOOTSTRAP,CSS,NODE JS ,FIRE BASE and JavaScript. Here you can login and share your coding experience.', level:"Advanced",img: require("@/assets/project/blog.png"),linkGit:"https://github.com/TDL2627/blog-app",linkLive:"https://tech-path.herokuapp.com/landing-page/"},
     {title: 'Single Page', description: 'A basic website made with Bootstrap, HTML and CSS.', level:"Moderate",img: require("@/assets/project/single.png"),linkGit:"https://github.com/TDL2627/single-page",linkLive:"https://tdl2627-single-page.netlify.app/"},
      {title: 'Form', description: 'A basic functional form made with HTML and CSS.', level:"Basic",img: require("@/assets/project/form.png"),linkGit:"https://github.com/TDL2627a-/basic-form",linkLive:"https://tdl2627-form.netlify.app/"},
       {title: 'Business', description: 'One of my first made with HTML and CSS.', level:"Basic",img: require("@/assets/project/interior.png"),linkGit:"https://github.com/TDL2627/inerterior",linkLive:"https://interior-tdl2627.netlify.app/"},
     {title: 'Temp Converter', description:'A temperature converter made with Javascript, HTML and CSS.', level:"Moderate",img: require("@/assets/project/tempConvert.png"),linkGit:"https://github.com/TDL2627/temperature-converter",linkLive:"https://tdl2627-temp-convert.netlify.app/"},
      {title: 'Ecommerce Demo', description: 'A simple crud ecommerce site made with HTML and CSS.', level:"Advanced",img: require("@/assets/project/guns.png"),linkGit:"https://github.com/TDL2627/advanceCrud",linkLive:"https://guns-2627.netlify.app/"},
     {title: 'Pokemon', description: 'Cards made with data fetched from api, HTML and CSS.', level:"Moderate",img: require("@/assets/project/pokedex.png"),linkGit:"https://github.com/TDL2627/pokedex",linkLive:"https://tdl2627-pokedex.netlify.app/"}
     
     ]
     res.send(projects)
});


app.get("/testimonials", function(req, res){
    let people=[
        {name:"Godwin",title:"Head of Curriculum and Learning",pic:require('@/assets/people/Godwin.jpeg'),qoute:" 'Based on the time that I have known Ashley, he will measure up to high organisational expectations.'"},
         {name:"Jason",title:"Lecturer ",pic:require('@/assets/people/jason-wandrag-nobg-2.png'),qoute: "'Ashley brings a unique energy to my class. He enjoys participating in class activities. It's always great to see him well-behaved in my class. I am excited about Ashley's potential and I can't wait to see how he will grow in the future.'"},
          {name:"Sibabalo",title:"Web Developer",pic:require('@/assets/people/sibablo.jpg'),qoute:" 'A very creative and resourceful person. A great team player.'"},
         {name:"Jude",title:"Aspiring Web Developer",pic:require('@/assets/people/Jude3.jpg'),qoute:" 'He knows what is he doing.'"},
            {name:"Bulela",title:"Aspiring Web Developer",pic:require('@/assets/people/Bulela1.jpg'),qoute:"' He can work well with others.'"},
             {name:"Kischa",title:"Graphic Designer",pic:require('@/assets/people/Kischa4.jpg'),qoute:"'He is very creative and has a great imagination.'"},
      ]
      res.send(people)
 });

const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});