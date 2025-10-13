# Rent-A-Ride MERN

A MERN conversion of the static car rental site. Includes:
- Express + MongoDB backend with `Car` CRUD
- React (Vite) client listing cars by category
- Workspace scripts for dev and build

## Quick start

1. Create `.env` in `server/` (or copy `.env.example`):

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/rent_a_ride
CLIENT_ORIGIN=http://localhost:5173
```

2. Install and seed:

```
npm install --workspaces
npm run seed
```

3. Run both server and client:

```
npm run dev
```

- Client: `http://localhost:5173`
- Server: `http://localhost:5000`
- API: `GET /api/cars?category=luxury|suv|economy`

## Notes
- Client proxies `/api` to the server (see `client/vite.config.js`).
- Images are served from client `public/images`. Seed data references these paths.
