import astronomy from "@public/images/astronomy.png";
import cantor from "@public/images/cantor.png";
import diet from "@public/images/diet.png";
import letters from "@public/images/letterts.png";
import kissi from "@public/images/pd.png";
import movies from "@public/images/movies.png";
import kidsAng from "@public/images/angA.png";
import starWars from "@public/images/starWars.png";

export type ItemsType = {
  image: string;
  name: string;
  code?: string;
  link: string;
  tags: string[];
};

export interface ProjectTypes {
  title: string;
  description: string;
  items: ItemsType[];
}

export const projects = [
  {
    title: "Web applications",
    description:
      "This category includes web applications using the React.js, Redux and Saga technologies. The Movie Browser project was made by a team of three. Movies Browser and Currency converter applications use API, ToDo List and Movies Browser allow to save data in Local Storage.",
    items: [
      {
        image: movies,
        name: "movies browser",
        code: "https://github.com/kamila-duda/movies-browser",
        link: "https://kamila-duda.github.io/movies-browser/",
        tags: ["React.js", "Styled Components", "Redux", "Saga"],
      },
      {
        image: starWars,
        name: "encyclopedia star wars",
        code: "https://github.com/kamila-duda/encyclopedia-star-wars",
        link: "https://kamila-duda.github.io/encyclopedia-star-wars/",
        tags: ["React.js", "Styled Components", "Redux", "Saga"],
      },
      {
        image: cantor,
        name: "currency converter",
        code: "https://github.com/kamila-duda/currency-converter-react",
        link: "https://kamila-duda.github.io/currency-converter-react/",
        tags: ["React.js", "Styled Components"],
      },
    ],
  },
  {
    title: "Games",
    description:
      "The Piggy Bank was created to teach children to count money, and the Letter game is intended to introduce people to the layout of the letters on the keyboard. The quiz allows to test knowledge of English.",
    items: [
      {
        image: kidsAng,
        name: "enaglish for kids",
        code: "https://github.com/kamila-duda/angielski",
        link: "https://kamila-duda.github.io/angielski/",
        tags: ["React.js", "StyledComponents", "Redux", "Saga"],
      },
      {
        image: letters,
        name: "letters game",
        code: "https://github.com/kamila-duda/letters_game",
        link: "https://kamila-duda.github.io/letters_game/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
    ],
  },
  {
    title: "Websites",
    description:
      "I made a diet recipe page where you can create your own shopping list and save it to Local Storage. Simple site about astronomy with a quiz, and also sample websites for companies and individuals.",
    items: [
      {
        image: diet,
        name: "Dąbrowska diet",
        code: "https://github.com/kamila-duda/dieta",
        link: "https://kamila-duda.github.io/dieta/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        image: astronomy,
        name: "astronomy webside",
        code: "https://github.com/kamila-duda/astronomia",
        link: "https://kamila-duda.github.io/astronomia/",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        image: kissi,
        name: "personal website",
        link: "http://www.iisi.pcz.pl/~pduda/index.php",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      },
    ],
  },
];
