# Star Wars API

![Star Wars Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/800px-Star_Wars_Logo.svg.png)

Welcome to the Star Wars API! This API provides access to a wealth of data about the Star Wars universe using [SWAPI](https://swapi.dev/). It is developed with Next.js and TypeScript.

## How to Use the API?

### 1. Installation

To get started, make sure you have [Node.js](https://nodejs.org/) installed on your system. Then, clone this repository to your machine:

```bash
git clone https://github.com/your-username/star-wars-api.git
```

Install the dependencies using npm:

```bash
cd star-wars-api
npm install
```

### 2. Execution

Once you've installed the dependencies, you can run the API locally with the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

### 3. Usage

You can make requests to the API using the following routes:

- `GET /characters`: Get a list of Star Wars characters.
- `GET /planets`: Get a list of Star Wars planets.
- `GET /films`: Get a list of Star Wars films.

For example, to get the list of characters, you can make a GET request to `http://localhost:3000/api/characters`.

## Acknowledgements

- [SWAPI](https://swapi.dev/) for providing the Star Wars data.
- [Next.js](https://nextjs.org/) for making web development in React easier and more powerful.
- [TypeScript](https://www.typescriptlang.org/) for helping us write safer and more readable code.

