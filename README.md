# swt-marketplace

# Getting Started

# Requirements

1. node v14.18.0
2. Text editor (Recommended: VSCode or SublimeText or Atom)
3. I prefer to use yarn (https://classic.yarnpkg.com/en/docs/getting-started)

# Installation

The installation depends on the operating system, click [here](https://nodejs.org/en/) for details. On Mac using Homebrew run `brew install node` on Linux `sudo apt install nodejs`

# 2. Text Editor

Any text editor of your choice can be used. However Visual Studio Code and Atom are highly recommended.

#### Folder Structure

There are two folders in the parent folder `swt-marketplace`. This folder contains all the files to run both the backend and the frontend. Frontend folder `client`, backend folder `server`.

```
client
    node_modules
    public
        favicon_io
        apple-touch-icon.png
        favicon.ico
        index.html
        manifest.json
        robots.txt
        Siyacoda.png
        siyacoda.svg
    src
        components
            AddLearner.js
            EditLearner.js
            ListLearner.js
        App.css
        index.css
        index.js
        reportWebVitals.js
        .gitignore
        package-lock.json
        package.json
server
    currently no database
README.md

```

# Formatting The Code

eslint (https://eslint.org/)

# formatting a file example

On VS code, yu can change your settings to format after saving.
Select Prettier as your code formatter

# Running The Project

# Clone the project

```
git clone https://github.com/SafariWorldToken/swt-marketplace.git
```

## Project setup

```
yarn/npm install
```

### Compiles and hot-reloads for development

```
yarn/npm serve
```

### Compiles and minifies for production

```
yarn/npm build
```

### Lints and fixes files

```
yarn/npm lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
