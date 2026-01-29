# People - Management Portal (Angular 8)

People Management Portal to manage a list of people with three views:
- List all people
- Edit a person
- Delete a person

The app uses JSONPlaceholder (`https://jsonplaceholder.typicode.com`) as a demo REST API. Swap the base URL in `src/environments/environment.ts` if you have your own API.

## Prerequisites
- Node.js 12–14 recommended for Angular 8. Node 18 works with `--openssl-legacy-provider`.
- npm 6+

## Setup
```bash
cd people-spa
npm install
```

## Run locally
1) If using Node 18+, set once per shell:
```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
```
2) Start the dev server:
```bash
npm start
```
3) Open `http://localhost:4200`.
4) Stop: press `Ctrl+C` in the terminal.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
```bash
npm run build
```
Artifacts go to `dist/people-spa`.

## Routes
- `/people`: list people
- `/people/:id/edit`: edit a person
- `/people/:id/delete`: delete a person

## API Service
Update `apiBaseUrl` in `src/environments/environment.ts` to point to your REST API if needed.

## Project Structure
- `src/app/people-list`: list view
- `src/app/person-edit`: edit view
- `src/app/person-delete`: delete view
- `src/app/services/people.service.ts`: HTTP CRUD

## Notes
- Minimal template and comments removed for clarity.
- Differential loading and source maps disabled to simplify Node 18 builds.

### Troubleshooting
- OpenSSL error on build/serve with Node 17+: set `NODE_OPTIONS` as shown above.
- Source map/SourcemapConsumer wasm errors: already mitigated via disabled source maps; if seen, clear cache (`rimraf node_modules/.cache`), then re-run.
