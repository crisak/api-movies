<p align="center">
  <a href="http://localhost:5173/">
    <img alt="NativApps" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFgpu8qjjCakQ/company-logo_200_200/0/1519922047330?e=1674086400&v=beta&t=Hg2ZK_ybAX2tIQY3MeNCb-baO7c-lPMqNsvye4iVYYE" width="92px" height="92px"/>
  </a>
</p>
<h1 align="center">
  ⚙️ API NativApps - Movies
</h1>

## 📜 Endpoint available

**Production:**

```bash
https://api-movies-production.up.railway.app/api/v1
```

### GET - /movies

_Get all movies of year 2020 by default_

Query strings: `none`

<details>
<summary>Example request</summary>

**Request**

URL: `https://{HOST}/movies`

Method: `GET`

**Responses**

Status: `200`

Body

```json
[
  {
    "id": "tt9561862",
    "name": "Love, Death & Robots",
    "category": "series",
    "imagePoster": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "year": "2019"
  },
  ...
]
```

</details>

### GET - /movies?year={value}

_Get all movies with a year_

Query strings: `true`

<details>
<summary>Example request</summary>

**Request**

URL: `https://{HOST}/movies?year=2018`

Method: `GET`

Query string: `year`

**Responses**

Status: `200`

Body

```json
[
  {
    "id": "tt9561862",
    "name": "Love, Death & Robots",
    "category": "series",
    "imagePoster": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "year": "2018"
  },
  ...
]
```

</details>

### PUT - /movies

_Update all movies in database(PostgreSQL) with year 2020 by default_

Query strings: `none`

<details>
<summary>Example request</summary>

**Request**

URL: `https://{HOST}/movies`

Method: `PUT`

**Responses**

Status: `200`

Body

```json
[
  {
    "id": "tt9561862",
    "name": "Love, Death & Robots",
    "category": "series",
    "imagePoster": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "year": "2019"
  },
  ...
]
```

</details>

### PUT - /movies?year={value}

_Update all movies in database(PostgreSQL) with a year_

Query strings: `true`

<details>
<summary>Example request</summary>

**Request**

URL: `https://{HOST}/movies?year=2018`

Method: `PUT`

Query string: `year`

**Responses**

Status: `200`

Body

```json
[
  {
    "id": "tt9561862",
    "name": "Love, Death & Robots",
    "category": "series",
    "imagePoster": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    "year": "2018"
  },
  ...
]
```

</details>

## 🐳 Install dependencies

```bash
$ yarn install
```

## 🚀 Deploy API

```bash
$ yarn deploy
```

## 🧪 Scripts available

### Run tests

```bash
$ yarn test
```

### Run coverage test

Creates a `coverage` directory in root of project.

```bash
$ yarn coverage
```

### Build app

Creates a `dist` directory with a production build of your app.

```bash
$ yarn build
```

### Run linter

```bash
$ yarn lint
```

## 📄 File naming conventions

This helps us visually identify what task each file is going to do and allows us to perform more efficient searches when developing, this help us the development experience

- `movies.router.ts` for create controllers files

- `movies.controller.ts` for create controllers files

- `measures.util.ts` for create utilities files

  - `map-values.util.ts`

- `users.service.ts` for create utilities files

- `movie.dto.ts` for create DTOS files

- `movie-join.model.ts` for create models files

## 🎯 Architecture of directories

```bash
├── package.json
├── __mocks__
│   └── services
│       ├── OMDb-api.service.ts
│       ├── index.ts
│       └── movies.service.ts
├── __tests__
│   └── server.test.ts
├── src
│   ├── app.ts
│   ├── config
│   │   ├── connect-db.ts
│   │   └── index.ts
│   ├── controllers
│   │   ├── index.ts
│   │   └── movies.controller.ts
│   ├── dtos
│   │   ├── OMDb-api.dto.ts
│   │   ├── error.dto.ts
│   │   ├── index.ts
│   │   └── movie.dto.ts
│   ├── environment.d.ts
│   ├── models
│   │   ├── index.ts
│   │   ├── movie-join.model.ts
│   │   ├── movie.model.ts
│   │   └── types.model.ts
│   ├── movies.routes.ts
│   ├── server.ts
│   └── services
│       ├── OMDb-api.service.ts
│       ├── index.ts
│       └── movies.service.ts
```
