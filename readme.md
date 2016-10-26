# Examen

## Introduction		
		
Online Quiz System for G.C.E. Advanced Level, Sri Lanka. Examen allows authorized users to upload individual questions or whole question paper and students to view and answer questions online. Students can use Examen anytime, anywhere because Examen select questions based on students' preferred subjects and time allocations.
 
## Features

`examen` provides the following features:		
 - Allows authorized users (Teachers) to upload questions individually or as a whole paper		
 - Allows Teachers to upload images for questions and answers		
 - Allows Teachers to find the number of times particular questions have been tried out and the percentage of correct answers students have provided		
 - Students can try questions as a whole paper or as individual question based on specified time duration and subject. 		
 - Examen will automatically select set of questions to match with the time and subject provided by the student

## Table of Content
- [Introduction](#introduction)
- [Features](#features)
- [Install](#install)
- [Development Mode](#development-mode)
- [Production Mode](#production-mode)
- [Technologies](#technologies)
- [Examen Developer](#examen-developer)
- [Contributor](#contributors)
- [License](#license)

## Install

-**Note** that this seed project requires node v6.6.x or higher and npm 3.1x.x or higher

```bash
git clone https://github.com/shavindraSN/examen.git
cd examen

# Install dependencies
npm install

# start server
npm run develop

# Application url: http://localhost:3000
```

## Development mode
Uncomment in public/index.html:

```html
<script src="assets/js/systemjs.config.js"></script>
<script>
    System.import('app').catch(function(err) { console.error(err); });
</script>
```

## Production Mode
Comment out
```html
<!-- Production mod -->
<script src="js/bundle.min.js"></script>
```
## Technologies
- Frontend framework - **Angular 2.1.0**
- Backend framework - **ExpressJS with Node**
- Language - **Typescript**
- Database - **MariaDB**

## Examen Developer
To build new functionalities or entirely new project on top of 
the functions already have with Examen, Examen API can be used. 
Examen API provide all the functionalities as a RESTful API. 
For more information, follow the link given bellow. 

vist: [https://shavindrasn.github.io](https://shavindrasn.github.io) 

## Contributors		

[<img alt="shavindraSN" src="https://avatars1.githubusercontent.com/u/20218999?v=3" width="117">](https://github.com/shavindraSN) |[<img alt="kenthellck" src="https://avatars0.githubusercontent.com/u/13234259?v=3" width="117">](https://github.com/kenthellck) |[<img alt="ArchchanaKugathsan" src="https://avatars0.githubusercontent.com/u/16607165?v=3" width="117">](https://github.com/ArchchanaKugathsan) |[<img alt="SumeeraShakila" src="https://avatars2.githubusercontent.com/u/16667546?v=3" width="117">](https://github.com/SumeeraShakila) |
:---: |:---: |:---: |:---:  |
[shavindraSN](https://github.com/shavindraSN) |[kenthellck](https://github.com/kenthellck) |[ArchchanaKugathsan](https://github.com/ArchchanaKugathsan) |[SumeeraShakila](https://github.com/SumeeraShakila) |

## License		
 		
 MIT
