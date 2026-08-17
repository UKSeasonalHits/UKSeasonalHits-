# UK's Biggest Seasonal Hits

Flat GitHub-ready starter radio website and admin control room.

## What it does
- Public radio website
- Admin login
- No SQL/database setup
- Local browser music library for testing
- Search/remove/play local audio
- Save a public radio stream URL
- Save station settings
- Responsive design

## Important
The included library is a browser/local testing library. It does not copy Spotify audio or rebroadcast Spotify streams.

For a real station, connect the public player to the stream supplied by your radio hosting provider. Keep private streaming credentials out of frontend JavaScript.

## Admin password
Edit `PASSWORD` in `admin.js` before deploying. This demo login is NOT production-grade authentication.

## Caster.fm
Caster.fm documents public player widgets and API integration. For a production integration, use its official API/player approach and never expose a private API token in browser code.
