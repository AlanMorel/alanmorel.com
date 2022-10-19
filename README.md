# AlanMorel.com

This repository hosts home to the code that powers my [personal site](https://alanmorel.com/).

## Installation

Install node, npm, clone this repository, then install the dependencies

```sh
git clone https://github.com/AlanMorel/alanmorel.com
```

```sh
cd alanmorel.com
```

```sh
npm install pnpm -g
```

```sh
pnpm install
```

Create a `.env` file

```sh
VERSION=0
NODE_ENV=development
PORT=8080
ORIGIN=http://localhost:8080
DOCKER_ORIGIN=http://localhost:8080
TZ=America/New_York

SHAREX_SECRET=

TWITTER_HANDLE=
```

Create a folder called `logs` at the root:

```sh
mkdir logs
```

Visit `http://localhost:8080` to see the app running.

## Screenshots

![alt tag](https://i.imgur.com/iQRyICc.png)
![alt tag](https://i.imgur.com/lIHwdPA.png)

## License

This code is licensed under the [MIT license](LICENSE).
