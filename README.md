# SVG Logo Generator

## ✏️ Description:

The goal for this project was to create a simple, yet effective .svg generator for a dev use when trying to create vector graphics for their project. The user can start by opening the command line, then running node on index.js. This will take the user through a set of simple questions, to help them decide the style they want for their svg. They first choose a shape, then the background color, text, and text color. Once this is complete, the code will take the user's input and generate the .svg file within the project. These files can be viewed in the browser to check if the style matches the expectations.


## 📜 License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License. See LICENSE in the repo for more information.


## User Story

* AS a freelance web developer
* I WANT to generate a simple logo for my projects
* SO THAT I don't have to pay a graphic designer


## Acceptance Criteria

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for text
* THEN I can enter  up to three characters
* WHEN I am prompted for the text color
* THEN I can enter a color keyword (OR a hexidecimal color)
* WHEN I am prompted for a shape
* THEN I am presented with a list of shapes to choose from: circle, triangle, and square
* WHEN I am prompted for the shape's color
* THEN I can enter a color keyword (OR a hexidecimal color)
* WHEN I have entered input for all the prompts
* THEN an SVG file is creted named 'logo.sv'
* AND the output text 'Generated logo.svg' is printed in the command line
* WHEN I open the 'logo.svg' file in a browser
* THEN I am shown a 300x200 pixel image that matches the criteria I entered


## 🖥️ Technologies Used

* Node.js (npm Inquirer, Jest)
* JavaScript
* .svg files


## ⚙️ Installation

N/A


## ✍️ Usage

Run 'Node index.js' in the integrated terminal. Answer the inquirer questions and once complete, the .svg file will be generated and added to the project files.


## 📸 Assets

The following video contains a sample walkthrough of this project's functionality and tests:

https://drive.google.com/file/d/1DZz5nhPm49yviaU-SLJZmFeP_a-sRYoA/view
