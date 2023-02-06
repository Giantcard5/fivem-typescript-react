<h1 align="center">🔧 FiveM React TS Resource Boilerplate</h1>

This repository is a basic boilerplate for getting started with React TS resources in FiveM. 

## Requirements
* Node > v14
* Yarn

## Getting Started

**Install Dependencies**

Navigate into the newly cloned folder and execute
the following command, to install dependencies.

```sh
yarn install
```

## Development

### Hot Building

While developing your resource, this boilerplate offers 
a `dev` script that will automatically hot rebuild on any
change within the `web` directory.

```sh
yarn dev
```
*This script still requires you restart the resource for the changes to be reflected in-game*

## Production Build
Once you have completed the development phase of your resource,
you must create an optimized & minimized production build, using
the `build` script.

```sh
yarn build
```