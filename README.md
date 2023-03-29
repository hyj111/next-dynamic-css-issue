# next-dynamic-css-issue

## Issue 

If a css module in a lazy load component is referenced in advance, the packaged code will cause the lazy load component style to be lost, but it is normal under dev

## Steps to reproduce

1) Clone repo and run `npm install && npm run build && npm run start`
2) Open a browser and go to [http://localhost:3000](http://localhost:3000)
3) Click the link to go to the "other page"

