# pern-todo-list
Simple fullstack application using PERN tech stack.

NEON (https://neon.com/) is being used as Database.

<img width="698" height="456" alt="Screenshot 2025-09-26 at 11 13 19" src="https://github.com/user-attachments/assets/92c533c2-d923-4228-989c-a6fcd8af0fd0" />

## Usage

## Server

### Install dependencies

```
cd server
npm install
```

### Set Enviroment Variables

Create the .env file in the root directory with the following variables:
- PORT=3000
- DATABASE_URL={your connection string to NEON}

### Run the backend server (http://localhost:3000) connected to NEON DB

```
npm run dev
```

## Client

### Install dependencies

```
cd client
npm install
```

### Set Enviroment Variables

Create the .env file in the root directory with the following variables:
- VITE_API_URL=http://localhost:3000/todos

### Run React frontend server (http://localhost:5173)

```
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
