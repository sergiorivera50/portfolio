# N.E.D. Boilerplate

Something that I believe all professionals in the tech industry would agree to is the fact that many times we build prototypes or applications with very similar programmatic foundations. In the case of implementing REST APIs, you may use technologies like Node.js aided by frameworks like Express. Hence I created the N.E.D. boilerplate, which stands for Node.js + Express + Docker and is a template for developing RESTful APIs with Node.js & Express according to modern containerisation standards. Its current core features are as follows:

- TypeScript: supported by default (as it should be).
- Express API: routes, middlewares, controllers and configs.
- Unit tests: with Jest and Supertest for ease of use.
- OAuth 2.0: boilerplate config + middleware for authenticated requests.
- Docker: dockerised development environment + production-grade image.
- ESLint: with recommended rules for enforcing a cohesive coding style.

## 📦 Packaged Module

To ensure the accessibility of such templates, I published a public binary in the popular NPM registry [npmjs.com](https://www.npmjs.com/) that anyone can easily run with `npx create-ned-app`, which immediately sets up your environment according to the boilerplate.

## 🌐 Useful Links

The NPM package can be found [here](https://www.npmjs.com/package/create-ned-app). Meanwhile, the boilerplate code can be explored in [my GitHub repository](https://github.com/sergiorivera50/ned-boilerplate).
