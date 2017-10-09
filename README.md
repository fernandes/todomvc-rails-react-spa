# TodoMVC Rails React

todomvc.com example built using rails 5, [webpacker](https://github.com/rails/webpacker), react v16, redux and saga.

## Development

```
bundle install
cd vendor && yarn install && cd ..
foreman start
open http://localhost:5000/
```

If you wanna simulate a production environment compile the assets and run in production environment

```bash
rake assets:precompile # will compile webpack too
RAILS_SERVE_STATIC_FILES=true SECRET_KEY_BASE="secretkey" RAILS_ENV=production rails s -b 0.0.0.0 -p 5000
```

## TODO

The code is port of a v0.13 react version, so I intend to make it follow the best practices described on ~v15~ v16 documentation.

- [X] Add system tests
- [x] Add redux and rails API
  - [x] REST
  - [ ] GraphQL
- [ ] add tests (probably current tests are broken because of login)
- [ ] Add Flow (or prop types?)
- [ ] improve index fetching (pagination, next url…)
- [ ] rehydrate JWT from localstorage
- [ ] navigate between all/completed/active using react router
- [ ] use humps and normalizr (good for complex APIs, but not needed on this case)
- [ ] use styled components for todo mvc css (so we can practice and find best practices)
- [ ] I’d like to remove (internal) state for some components and write them as functional, but not a big deal atm

## Thanks

Based on original work [todomvc react](https://github.com/tastejs/todomvc/tree/gh-pages/examples/react) created by [petehunt](http://github.com/petehunt/).
