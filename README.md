# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Set a pomodoro timer and short & long break timers
- Customize how long each timer runs for
- See a circular progress bar that updates every minute and represents how far through their timer they are
- Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/kamiliano1/pomodoro-app](https://github.com/kamiliano1/pomodoro-app)
- Live Site URL: [https://pomodoro-app-pearl-seven.vercel.app/](https://pomodoro-app-pearl-seven.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/)
- [React Recoil](https://recoiljs.org/) - state management
- customHooks

### What I learned

I found this project to be quite challenging. I couldn't find any other way to create a circular progress bar besides using SVG.
To manage states I've used React Recoil. breakTypeAtom to manage which break is active and the actual time of it, settingsAtom is taking care of which color, and font is activated, if Modal is open, and if the clock is paused.
Current font and color I passed through useSettings hook.

### Continued development

In this project is possible to add more adjustable settings, additional fonts, colors, and different styles of progress bar.

## Author

- Website - [Kamil Szymon](https://github.com/kamiliano1)
- Frontend Mentor - [@kamiliano1](https://www.frontendmentor.io/profile/kamiliano1)
