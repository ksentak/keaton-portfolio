import React from 'react';
import ProjectItem from './projectitem';
import ReactColors from '../images/react-colors.png';
import ReactAuth from '../images/react-auth.png';
import LibertyBeans from '../images/liberty-beans.png';
import GoogleBooks from '../images/GoogleBooks.png';
import Omega from '../images/omega.png';
import VueNotes from '../images/vueNotes.png';

const Projects = () => {
  return (
    <div className='Projects'>
      <div className='container'>
        {/* Row 1 */}
        <div className='row'>
          <div className='col-12'>
            <h1 className='section-title'>
              <span className='main-color'>Portfolio</span> Projects
            </h1>
          </div>
        </div>
        {/* Row 2 */}
        <div className='row text-center'>
          <ProjectItem
            imgSrc={ReactColors}
            imgAlt={'React-Colors Project'}
            projectDescription={`A react application that allows users to view, create, and delete different color palettes. The user can copy any individual color's HEX, RGB, or RGBA code to their clipboard, as well as adjust the shade of each palette.`}
            title={'React Colors'}
            viewCode={'https://github.com/ksentak/react-colors'}
            viewSite={'https://react-colors-01.netlify.com/'}
          />
          {/* Project 2 */}
          <ProjectItem
            imgSrc={ReactAuth}
            imgAlt={'React-Auth Project'}
            projectDescription={`A user authentication application I built using React, Passport, and JWT that serves as a template for others and allows a user to sign up/log in. Input validation is included in and deployment to Heroku is made easy.`}
            title={'React User Authentication'}
            viewCode={'https://github.com/ksentak/react-user-auth'}
            viewSite={'https://react-user-auth.herokuapp.com/'}
          />
          {/* Project 3 */}
          <ProjectItem
            imgSrc={LibertyBeans}
            imgAlt={'Liberty-Beans Project'}
            projectDescription={`A small business coffee shop website that I built to display my skills in front-end web development. This website was created with a mobile-first design and a simple user interface, in order to provide a better user experience. Additionally, I developed a React version of this site.`}
            title={'Liberty Beans Coffee'}
            viewCode={'https://github.com/ksentak/LB-Coffee'}
            viewSite={'https://ksentak.github.io/LB-Coffee/'}
          />
          {/* Project 4 */}
          <ProjectItem
            imgSrc={GoogleBooks}
            imgAlt={'Google-Books Project'}
            projectDescription={`A MERN application in which a user can search for different books using the Google Books API. Once the user searches for a specific book, results are rendered and the user can either favorite a book or view more info about the book.`}
            title={'Google Books'}
            viewCode={'https://github.com/ksentak/google-books-app'}
            viewSite={'https://google-books-app-01.herokuapp.com/'}
          />
          {/* Project 5 */}
          <ProjectItem
            imgSrc={Omega}
            imgAlt={'Omega Project'}
            projectDescription={`A full-stack MERN application which allows users to create, plan, and keep track of their weekly workouts.`}
            title={'Omega'}
            viewCode={'https://github.com/ksentak/omegawo-app'}
            viewSite={'https://omegaworkout01.herokuapp.com/'}
          />
          {/* Project 6 */}
          <ProjectItem
            imgSrc={VueNotes}
            imgAlt={'Vue Notes Project'}
            projectDescription={`Vue Notes is based off of Google's note-taking app, Keep. Using Vue, Vuex, Vuetify, & Firebase, a user can jot down notes to serve as reminders for later. The application has total CRUD functionality and notes can be colored coded for optimal organization.`}
            title={'Vue Notes'}
            viewCode={'https://github.com/ksentak/vue-notes'}
            viewSite={'https://vue-notes01.netlify.app/'}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
