# Organ and Food API 
#### Powered by BLKYBNZ ('💪Bulky Bonez🩻')

A RESTful API using Javascript, Express, and Mongoose that displays organ health facts and nutritional info for optimal organ health referenced from HealthLine. 

##### Authors: 
<ul>
<li>David White-Goode |[forextroll][github]
<li>Nasim Akbor | [NasimAkbor][github] </li>
<li>Lawrence Yee | [Newbz521][github] </li></ul>

__________

### Installing Locally

Clone Repo
`git clone https://github.com/forextroll/P8.BKND.git`

Install Dependencies
`npm i`

Seed Database
`npm run db:seed`

Run App
`npm start`

#### Heroku Deployment
`https://organ-api.herokuapp.com/organ-api`

#### API Endpoints

ORGANS 
| Method   |      Endpoint      |  Description |
|----------|:------------------:|-----------------:|
| GET |    /organ-api/organs  |   gets all organs |
| GET | /organ-api/organs/:organs |    gets a single organ |
| POST |    /organ-api/organs   |   posts an organ |
| PUT | /organ-api/organs/:organs |    updates an organ |
| DEL |    /organ-api/organs/:id  |   deletes an organ |

Model: 
```
name: { type: String }
description: { type: String }
description: { type: String }
system: { type: String }
symptom: { type: Array }
images: { type: String }
```
___

FOOD
| Method   |      Endpoint      |  Description |
|----------|:------------------:|-----------------:|
| GET |    /organ-api/foods  |   gets all foods |
| PUT | /organ-api/foods/:id |    updates an foods |

Model:
```
name: { type: String }
food: { type: Array }
```

#### Testing API Routes with Jest
For testing purposes, we've used [Jest](https://jestjs.io) and [SuperTest](https://www.npmjs.com/package/supertest) on the backend to ensure our API endpoints are operational.

Run Test:
`npm run test`

### Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Primary Language
* [Node](https://nodejs.dev/) - Primary Language
* [MongoDB](https://www.mongodb.com/) - Used as our database
* [Mongoose](https://mongoosejs.com/) - Used to add schemas to our database

### Deployed With
* [Heroku](https://id.heroku.com/login) - Hosting our App
* [Mongo DB Cloud Atlas](https://www.mongodb.com/atlas/database) - Deploying our databse in cloud

### Contributing

Please reach out to us for details on the process for submitting pull requests to us.






