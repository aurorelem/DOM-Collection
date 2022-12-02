const collection = [
   {
      title: "In the shadow of the moon",
      kind: "Movie",
      genre: "Thriller",
      realisator: "Jim Mickle",
      releaseYear: "2020",
      cast: [
        "Michael C. Hall",
        "Boyd Holbrook",
        "Cleopatra Coleman",
      ],
      description: "Un policier est obsédé par la traque d'un mystérieux tueur en série dont les crimes défient toutes explications...",
      picture: "./assets/shadow-of-the-moon.jpg", 
      link: "https://www.youtube.com/watch?v=iU7B59T1l70",
    },

    {
      title: "Dark",
      kind: "Serie",
      genre: ["Science fiction", "Thriller"],
      realisator: "Louis Hofmann",
      releaseYear: "2017",
      cast: [
        "Louis Hofmann",
        "Lisa Vicari",
        "Moritz Jahn",
      ],
      description: "Un enfant disparu lance quatre familles dans une quête éperdue pour trouver des réponses. La chasse au coupable fait émerger les péchés et les secrets d'une petite ville.",
      picture: "./assets/dark.jpg",
      link: "https://www.youtube.com/watch?v=vx9HQwjTcXI",
    },

    {
      title: "Une offrande à la tempête",
      kind: "Movie",
      genre: ["Policier", "Thriller"],
      realisator: "Fernando González Molina",
      releaseYear: "2021",
      cast: [
        "Leonardo Sbaraglia",
        "Marta Etura",
        "Álvaro Cervantes",
      ],
      description: "Dans ce troisième volet de la trilogie du Baztán, Amaia enquête sur d'horribles rituels et des décès suspects d'enfants, tandis que son entourage court un grave danger.",
      picture: "./assets/offrande-à-la-tempête.jpg",
      link: "\watch",  // A tester car me met directement ça au lieu du lien
    },

    {
      title: "L'aliéniste",
      kind: "Serie",
      genre: ["Drame", "Historique","Policier"],
      realisator: "Hossein Amini",
      releaseYear: "2018",
      cast: [
        "Daniel Brühl",
        "Luke Evans",
        "Dakota Fanning",
      ],
      description: "Dans le New York de la fin du 19ème siècle sous la responsabilité du chef de police Theodore Roosevelt, le spécialiste des maladies mentales Laszlo Kreizler s'intéresse à un impitoyable tueur qui laisse derrière lui les corps mutilés d’enfants. Face à l'impassibilité des pouvoirs publics, Kreizler tente d’identifier le responsable de ces meurtres horribles, épaulé par l'illustrateur criminel John Moore et Sara Howard, la première femme à faire son entrée dans l'univers très masculin de la police.",
      picture: "./assets/l-aliéniste.jpg",
      link: "\watch",
    },
  
    {
      title: "Mindhunter",
      kind: "Serie",
      genre: ["Drame", "Policier","Thriller"],
      realisator: "Joe Penhall",
      releaseYear: "2017",
      cast: [
        "Jonathan Groff II",
        "Holt McCallany",
        "Anna Torv",
      ],
      description: "Comment anticiper la folie quand on ignore comment fonctionnent les fous ? Deux agents du FBI imaginent une enquête aux méthodes révolutionnaires et se lancent dans une véritable odyssée pour obtenir des réponses.",
      picture: "./assets/mindhunter.jpg",
      link: "\watch",
    },
  
    {
      title: "Dahmer",
      kind: "Serie",
      genre: ["Drame", "Thriller","Biopic"],
      realisator: "Ryan Murphy",
      releaseYear: "2022",
      cast: [
        "Evan Peters",
        "Richard Jenkins",
        "Penelope Ann Miller",
      ],
      description: "Le parcours du cannibale de Milwaukee, l’un des tueurs en série les plus connus aux Etats-Unis : de son enfance difficile à sa condamnation en 1992, et comment l’incompétence et l’apathie de la police lui ont permis de poursuivre ses crimes durant plusieurs années.",
      picture: "./assets/dahmer.jpg",
      link: "\watch",
    },
  
    {
      title: "Zodiac",
      kind: "Serie",
      genre: "Thriller",
      realisator: "David Fincher",
      releaseYear: "2007",
      cast: [
        "Jake Gyllenhaal",
        "Mark Ruffalo",
        "Anthony Edwards",
      ],
      description: `Zodiac, l'insaisissable tueur en série qui sévit à la fin des années 60 et répandit la terreur dans la région de San Francisco, fut le Jack l'Eventreur de l'Amérique. Prodigue en messages cryptés, il semait les indices comme autant de cailloux blancs, et prenait un malin plaisir à narguer la presse et la police. Il s'attribua une trentaine d'assassinats, mais fit bien d'autres dégâts collatéraux parmi ceux qui le traquèrent en vain.
      Robert Graysmith, jeune et timide dessinateur de presse, n'avait ni l'expérience ni les relations de son brillant collègue Paul Avery, spécialiste des affaires criminelles au San Francisco Chronicle. Extérieur à l'enquête, il n'avait pas accès aux données et témoignages dont disposait le charismatique Inspecteur David Toschi et son méticuleux partenaire, l'Inspecteur William Armstrong. Le Zodiac n'en deviendrait pas moins l'affaire de sa vie, à laquelle il consacrerait dix ans d'efforts et deux ouvrages d'une vertigineuse précision..`,
      picture: "./assets/zodiac.jpg",
      link: "https://www.youtube.com/watch?v=6bFZL61OFzU",
    },
  
    {
      title: "Octobre",
      kind: "Movie",
      genre: ["Policier", "Thriller"],
      realisator: "Soren Sveistrup",
      releaseYear: "2021",
      cast: [
        "Esben Dalgaard Andersen",
        "Danica Curcic",
        "David Dencik",
      ],
      description: "Deux détectives de Copenhague enquêtent sur une affaire de meurtre ultra médiatisée.",
      picture: "./assets/octobre.jpg",
      link: "\watch",
    },
  
    {
      title: "De chair et d'os",
      kind: "Movie",
      genre: ["Policier", "Thriller"],
      realisator: "Fernando González Molina",
      releaseYear: "2020",
      cast: [
        "Marta Etura",
        "Nene",
        "Leonardo Sbaraglia",
      ],
      description: "Un an après avoir résolu une série de meurtres, Amaia est touchée de près par un mystère lié à sa précédente enquête. Deuxième partie de la trilogie du Baztan.",
      picture: "./assets/de-chair-et-d-os.jpeg",
      link: "\watch",
    },

    {
      title: "Ragnarök",
      kind: "Serie",
      genre: ["Drame", "Fantastique"],
      realisator: "Adam Price",
      releaseYear: "2020 ",
      cast: [
        "David Stakston",
        "Jonas Strand Gravli",
        "Herman Tømmeraas",
      ],
      description: "Dans un village norvégien pollué et troublé par la fonte des glaciers, la fin des temps semble bien réelle. Mais un combat doit opposer une légende à un mal ancestral.",
      picture: "./assets/ragnarök.jpg",
      link: "https://www.youtube.com/watch?v=sYzsPT5MYQk",
    },
  ];

  function listElement() {
    let main = document.createElement("main");
    let section = document.createElement("section");

    for (let element of collection) {
      let article = document.createElement("article");
      article.classeName = element.name;


      let picture = document.createElement("img");
      picture.setAttribute("src", element.picture);
      article.appendChild(picture);

      let genre = document.createElement("h5");
      genre.innerText = element.genre;
      article.appendChild(genre);

      let kind = document.createElement("h6");
      kind.innerText = element.kind;
      article.appendChild(genre);

      let title = document.createElement("h2");
      title.innerText = element.title;
      article.appendChild(title);

      let realisator = document.createElement("h1");
      realisator.innerText = element.realisator;
      article.appendChild(realisator);

      let cast = document.createElement("h3");
      cast.innerText = element.cast;     
      article.appendChild(cast);

      let releaseYear = document.createElement("h4");
      releaseYear.innerText = element.releaseYear;
      article.appendChild(releaseYear);

      let description = document.createElement("p");
      description.innerText = element.description;
      article.appendChild(description);

      section.appendChild(article)
      main.appendChild(section)
      document.body.insertBefore(main, document.getElementsByTagName("footer")[0])

    }

  }
  listElement();


