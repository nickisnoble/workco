# Work & Co

This is an application of sorts to [Work & Co](http://work.co). I decided I was going to copy the design of their site, but where they used React I used no JavaScript at all (save for analytics). Because apparently I'm a masochist.

I hope they find this act of theft flattering.

## Development

This project now uses Vite instead of Gulp for a modern build process.

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Points of interest

[`grid-list`](https://github.com/nickisnoble/workco/blob/82d401e28fe8088e3f04f75fbf315dea53b1d79f/assets/scss/_lists.scss#L17) – The way I got those 'borders' to work the way I wanted them to in the *Clients* section is slightly clever.

[The only JS](https://github.com/nickisnoble/workco/blob/82d401e28fe8088e3f04f75fbf315dea53b1d79f/index.html#L406) — I left a little easter egg in there...

---

&copy; Design ruthlessly stolen from Work & Co by Nick Noble, but everything else is his. 
