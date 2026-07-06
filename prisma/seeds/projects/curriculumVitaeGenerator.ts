import { div, list, paragraph } from '../helpers/portableText.dsl';
import { content, image } from '../helpers/portableText.dsl';
import { text, bold } from '../helpers/portableText.dsl';

import { Locale } from '../../../src/generated/prisma';

export const curriculumVitaeGenerator = {
  [Locale.pl]: content(
    paragraph(
      text(
        'A simple web application for generating your own curriculum vitae (CV).'
      ),

      text(
        "Just fill out the form, and you'll get a ready-to-download PDF file you can send to potential employers."
      )
    ),

    paragraph(
      text('The live PDF preview updates in real time as you edit the form.'),

      text(
        'You can also customize the colors and layout to suit your preferences — everything you need to create the perfect CV.'
      )
    ),

    paragraph(
      text('The application does not store any personal data.'),

      text(
        'You can safely save your configuration locally on your device and reload it later to continue where you left off.'
      )
    ),

    div(bold('Deployment 🚀')),

    paragraph(
      text(
        'You can use the Curriculum Vitae Generator application online for free. You don’t need to download the repository data or install anything to create your own CV PDF file. New job opportunities are waiting for you, good luck! 😊'
      )
    ),

    div(
      bold('Deploy: https://amaranthusss.github.io/curriculum-vitae-generator/')
    ),

    div(bold('Core Technologies 💻')),

    ...list([
      'React – A JavaScript library for building interactive user interfaces with a component-based architecture.',
      'TypeScript – A superset of JavaScript that adds static typing for better code quality and maintainability.',
      'AntDesign – A popular UI framework for React, providing a rich set of pre-styled components.',
      'Zustand – A lightweight state management library for React, offering a simple API and minimal boilerplate.',
      'PdfMake – A JavaScript library for dynamically generating PDFs in the browser or server-side.',
      'DayJs – A lightweight JavaScript library for handling and formatting dates with a simple API.',
      'Vite – A modern build tool that provides fast development and optimized production builds for frontend frameworks.',
      'Yarn – A fast and secure package manager for JavaScript and Node.js projects.'
    ]),

    div(bold('Scripts 📝')),

    ...list([
      'yarn build – Builds the static files for the application version.',
      'yarn dev – Starts the development server to run the application locally.'
    ])
  ),

  [Locale.en]: content(
    paragraph(
      text(
        'A simple web application for generating your own curriculum vitae (CV).'
      ),

      text(
        "Just fill out the form, and you'll get a ready-to-download PDF file you can send to potential employers."
      )
    ),

    paragraph(
      text('The live PDF preview updates in real time as you edit the form.'),

      text(
        'You can also customize the colors and layout to suit your preferences — everything you need to create the perfect CV.'
      )
    ),

    paragraph(
      text('The application does not store any personal data.'),

      text(
        'You can safely save your configuration locally on your device and reload it later to continue where you left off.'
      )
    ),

    div(bold('Deployment 🚀')),

    paragraph(
      text(
        'You can use the Curriculum Vitae Generator application online for free. You don’t need to download the repository data or install anything to create your own CV PDF file. New job opportunities are waiting for you, good luck! 😊'
      )
    ),

    div(
      bold('Deploy: https://amaranthusss.github.io/curriculum-vitae-generator/')
    ),

    div(bold('Core Technologies 💻')),

    ...list([
      'React – A JavaScript library for building interactive user interfaces with a component-based architecture.',
      'TypeScript – A superset of JavaScript that adds static typing for better code quality and maintainability.',
      'AntDesign – A popular UI framework for React, providing a rich set of pre-styled components.',
      'Zustand – A lightweight state management library for React, offering a simple API and minimal boilerplate.',
      'PdfMake – A JavaScript library for dynamically generating PDFs in the browser or server-side.',
      'DayJs – A lightweight JavaScript library for handling and formatting dates with a simple API.',
      'Vite – A modern build tool that provides fast development and optimized production builds for frontend frameworks.',
      'Yarn – A fast and secure package manager for JavaScript and Node.js projects.'
    ]),

    div(bold('Scripts 📝')),

    ...list([
      'yarn build – Builds the static files for the application version.',
      'yarn dev – Starts the development server to run the application locally.'
    ])
  )
};
