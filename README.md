# Wedding Invite (Next.js 14, App Router)

## Chalane ke liye
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Deploy: Vercel par repo import kar dijiye (koi setting nahi chahiye).

## Kya kahan hai
- `lib/config.js`        Naam, date (`countdownTo`), venue, parivaar, functions, contacts. Yahin sab badlein.
- `lib/archSvg.js`       Hero ke mehraab ki Ganesh ji illustration. `WEDDING.photo` bhar dein to wahan photo aa jaayegi.
- `lib/initWedding.js`   Countdown, schedule, gallery, chatbot, music, intro (browser side logic).
- `components/WeddingMarkup.tsx`  Page ka HTML (JSX).
- `app/globals.css`      Saari styling. Colours `:root` ke variables mein hain.
- `app/layout.tsx`       Title aur fonts.

## Gallery mein photos
`public/photos/` mein images rakhiye aur `lib/config.js` mein:
```js
export const GALLERY = [
  { src: "/photos/1.jpg", cat: "Pre-wedding", cap: "Jaipur mein", hero: true },
  { src: "/photos/2.jpg", cat: "Family", cap: "Parivaar" },
];
```
Categories apne aap tabs ban jaati hain. `hero: true` wali photo hero ke mehraab mein aati hai.
