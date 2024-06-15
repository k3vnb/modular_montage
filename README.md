# Modular Montage
**An exploration of client-side modular React architecture.**

This app is used by the developer for testing and demoing various systems, patterns, and widgets for modern web apps.  Currently demoing theme and layout switching, educational games, modals, feedback systems, and regularly updated with new stuff.

-------------------

**Content**

- [Modular Montage](#modular-montage)
  - [Tech stack](#tech-stack)
  - [Using themes and styles in the codebase](#using-themes-and-styles-in-the-codebase)
  - [Scripts](#scripts)
    - [Install](#install)
    - [Scaffold New Component](#scaffold-new-component)
  - [Games](#games)
  - [Design Principles](#design-principles)
  - [About me](#about-me)

## Tech stack
- React / TypeScript
- Storybook
- [MUI System](https://mui.com/system/getting-started/) provides a foundation for building custom themes and styled components.  It includes versatile tools for composability and extensibility.
- [MUI - Base UI](https://mui.com/base-ui/getting-started/) provides many unstyled customizable components & hooks for common web elements. The main benefit is `WAI-ARIA` semantic markup, metadata & interactive behavior (ie, tab/focus or click actions) and exposing native web attributes of such elements through the  `props` interfaces of our custom components.
- NVM (Node Version Manager)

## Using themes and styles in the codebase
- A large focus of this app is dedicated to systematic theming and the ability to switch between themes.
- The `Theme` is a global object that contains all the theme properties (ie, color palette, spacing, typography) used to style the app.
- Theme properties are accessed through `MUI System` provided hooks and components.
- The custom, typed property `theme.styles`  is the main interface for palette, typography and other custom style systems.  It is programmed for more typesafe consumption and better [IntelliSense](https://code.visualstudio.com/docs/languages/typescript#_intellisense) prompts.
- Theme colors are referenced via a semantic token - `primary`, `secondary`, `special`, `success`, `warning`, `error`, `info`, `neutral`.

## Scripts
### Install
- first run `nvm` (Node v. 20.11.1 required):
```
nvm use
```
- npm install
```
npm install
```
- Run the app on `localhost:3000`
```
npm run start
```
- Run Storybook on `localhost:6006`
```
npm run storybook
```

### Scaffold New Component
The `scaffold:component` command is used to generate new component files. It takes two arguments: the name of the component and the path to the directory inside `./src` where the component files should be generated.

- Example 1:
```
npm run scaffold:component -- ButtonGroup global/components
```
This will automatically generate files for a new `ButtonGroup` component in `src/global/components/` 

- Example 2:
``` 
npm run scaffold:component -- About pages
```
This will automatically generate files for a new `About` component in `src/pages/` 


## Games
- Learning and exploring design systems tends to inspire ideas for games.  Building games helps me to see better patterns for improving those systems.  
- The `Color Games` are designed to be a simple tool for eye-training and gaining familiarity with HSL and RGB color generation. 


## Design Principles
- Adhering to`WAI-ARIA` best practices makes web apps accessible to a broader user base.  It also makes web apps stronger, more robust, more testable while providing better user experience for all users by leveraging the benefits of 30-something years of web development standards.  
- [Atomic Design](https://atomicdesign.bradfrost.com/)  is the guiding principle of component architecture, UX/UI best practices, and generally a great way to think about design systems.
- The books _Don’t Make Me Think_ and _The Design of Everyday Things_ are somewhere in my thoughts every time I add a thing to a web interface.  This particular app goes a bit against the current of those books because the app is a kind of meta entity without an inherent purpose except to poke around and press some buttons and fiddle with some widgets. So there’s going to be some random design choices that might make you think or just go ‘huh?’, but hopefully you’re cool with that just this once.

## About me
Hi! I’m a professional web app developer and amateur artist based in Portland, Oregon.  I have spent the past many years building components, patterns, widgets, layouts, APIs and all that kind of stuff for enterprise web applications.  I built this repo as a starter kit for myself, a place for getting into established and experimental architecture, and as a way to share some ideas and snippets with others.  Some of these ideas will be spun off into their own apps.  Some patterns might become examples of what _not_ to do, and these will be iterated into better examples of what _to do_ in a future push!

I have too much respect and awe for dedicated graphic designers and UX experts to consider myself among their ranks — my specialty is translating great design into fluid robust interactions between the user and the application.  A good UI developer is an unseen advocate for the users, especially the users who find themselves in an edge case or an error state, so that’s my headspace — loading animations, clear feedback, error messages, seamless transitions, and a graceful guidance back to the happy path.  Send me a message at boyle.kevin.michael@gmail.com.
