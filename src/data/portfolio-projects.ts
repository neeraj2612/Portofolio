import ThumbNailOneMobile from '../images/thumbnail-project-1-small.webp';
import ThumbNailTwoMobile from '../images/thumbnail-project-2-small.webp';
import ThumbNailOneDesktop from '../images/thumbnail-project-1-large.webp';
import ThumbNailTwoDesktop from '../images/thumbnail-project-2-large.webp';
import Project from '../images/Project1.png';
import Project2 from '../images/Project2.png';

interface PortfolioProjects {
  portfolioImageSmall: string;
  portfolioImageLarge: string;
  portfolioImageAlt: string;
  portfolioTile: string;
  portfolioHtml: string;
  portfolioCss: string;
  portfolioJavascript: string;
  portfolioProjectViewLink: string;
  portfolioProjectCodeLink: string;
}

export const PortfolioProjects: PortfolioProjects[] = [
  {
    portfolioImageSmall: Project,
    portfolioImageLarge: Project,
    portfolioImageAlt: 'React Recipe App',
    portfolioTile: 'React Recipe App',
    portfolioHtml: 'React',
    portfolioCss: 'Tailwind',
    portfolioJavascript: 'Redux Toolkit',
    portfolioProjectViewLink: '',
    portfolioProjectCodeLink:
      'https://github.com/neeraj2612/Recipejs/blob/main/src/pages/Recipe.jsx',
  },
  {
    portfolioImageSmall: Project2,
    portfolioImageLarge: Project2,
    portfolioImageAlt: 'Video Game Database App',
    portfolioTile: 'Video Game Database App',
    portfolioHtml: 'React',
    portfolioCss: 'Chakra UI',
    portfolioJavascript: 'Redux Toolkit',
    portfolioProjectViewLink: '',
    portfolioProjectCodeLink: '',
  },
  // {
  //   portfolioImageSmall: ThumbNailThreeMobile,
  //   portfolioImageLarge: ThumbNailThreeDesktop,
  //   portfolioImageAlt: 'Todo web app image',
  //   portfolioTile: 'Todo web app',
  //   portfolioHtml: 'html',
  //   portfolioCss: 'css',
  //   portfolioJavascript: 'Javascript',
  //   portfolioProjectViewLink:
  //     'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
  //   portfolioProjectCodeLink:
  //     'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
  // },
  // {
  //   portfolioImageSmall: ThumbNailFourMobile,
  //   portfolioImageLarge: ThumbNailFourDesktop,
  //   portfolioImageAlt: 'Entertainment web app image',
  //   portfolioTile: 'Entertainment web app',
  //   portfolioHtml: 'html',
  //   portfolioCss: 'css',
  //   portfolioJavascript: 'Javascript',
  //   portfolioProjectViewLink:
  //     'https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X',
  //   portfolioProjectCodeLink:
  //     'https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X',
  // },
  // {
  //   portfolioImageSmall: ThumbNailFiveMobile,
  //   portfolioImageLarge: ThumbNailFiveDesktop,
  //   portfolioImageAlt: 'Memory game image',
  //   portfolioTile: 'Memory game',
  //   portfolioHtml: 'html',
  //   portfolioCss: 'css',
  //   portfolioJavascript: 'Javascript',
  //   portfolioProjectViewLink:
  //     'https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM',
  //   portfolioProjectCodeLink:
  //     'https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM',
  // },
  // {
  //   portfolioImageSmall: ThumbNailSixMobile,
  //   portfolioImageLarge: ThumbNailSixDesktop,
  //   portfolioImageAlt: 'Art gallery showcase image',
  //   portfolioTile: 'Art gallery showcase',
  //   portfolioHtml: 'html',
  //   portfolioCss: 'css',
  //   portfolioJavascript: 'Javascript',
  //   portfolioProjectViewLink:
  //     'https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6',
  //   portfolioProjectCodeLink:
  //     'https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6',
  // },
];
