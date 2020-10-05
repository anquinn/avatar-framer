# avatar-framer

A simple tool to create framed profile pictures for social media in support of a cause. Dynamically generate a static site based off of configuration options and the number of frame images provided. Just provide the images, a logo and your copy. Runs entirely in your browser (no images are uploaded to a server) to minimize privacy concerns. Based on http://avatar.joebiden.com.

**Demo:** http://andrewquinn.ca/avatar-framer/

**Goal:** Create an easily configurable static site, that can be quickly generated in a few minutes to support whatever cause you're working on.

## Contributing
Open to additions and pull requests.

## Installation

### Install Node.js and Jekyll

Before using avatar-framer, you must ensure that Node.js and Jekyll are installed on your system. To install, do the following:

1. Install [Node.js](https://nodejs.org) and npm.

2. Install [Jekyll](https://jekyllrb.com/docs/installation)

3. Install dependancies:
```
npm install
```

### Usage - Generate your site
1. Add your frames to `img/frames`
2. Add your preview images to `img/previews`
3. Generate the site:

```
jekyll build
```

4. Create styles and and minify assets:

```
npm run build
```

### Configuration
All configuration options can be found in `_config.yml`. Colors can be configured in `tailwind.config.js`.

#### HTML Head
`title`: HTML page title
`description`: meta description of the page

#### Copy
`title-text`: main page title text. **Default:** "Show you’re on #TeamBartlet by helping get out the vote on social media!"

`step-1`: text of step one. **Default:** "Upload your picture or another square image below."

`step-2`: text of step two. **Default:** "Use the photo tools to scale, rotate, and move your image over the preview."

`step-3`: text of step three. **Default:** "Select your frame."

`step-4`: text of step four. **Default:** "Download your new profile image!"

`step-5`: text of step five. **Default:** "Post on social media using the hashtag #TeamBartlet."

`footer-text`: text content for the footer. Is placed under the footer nav and logo. **Default:** "&copy; 2020 Campaign Works, Inc. All rights reserved."

#### Download Button
`download-button-text`: text of the download button. **Default**: "Download profile picture"

#### Upload Text
`upload-text`: text of the upload div. **Default**: "Drop files here or click to upload."

#### Header Nav Link
`nav-link`: url of the button in the header nav

`nav-link-text`: text of the button in the header nav

#### Logo & Favicon
`logo`: name of the logo file in `/img` directory. **Default**: "logo.png"
`favicon`: name of the favicon file in `/img` directory. **Default**: "favicon.ico"

#### Footer Links
`footer-links`: YAML list of links for the footer nav. Example:
```YAML
  - text: "Awesome page 1"
    link: "http://google.com"

  - text: "Other page 2"
    link: "http://google.com"
```

### Colors
avatar-framer is setup with primary and secondary colors in `tailwind.config.js` to generate the site. You can edit the primary and secondary colors directly, or add your own. All [tailwind default colors](https://tailwindcss.com/docs/background-color) are also available.
```js
theme: {
  extend: {
    colors: {
      primary: {
        default: '#1e429f',
        dark: '#233876',
      },
      secondary: {
        default: "#e02424",
      }
    }
  },
},
```

### Header & Footer
The header including the top nav, and footer can be edited directly by updating `nav.html` and `footer.html` in the `_includes` directory respectively. 


### Image requirements
#### Frames
* Frames should be `2000px x 2000px` for maximum resolution.
* Frames should be in png format to allow for transparency.
* All the frames should be named `frame-1`, `frame-2` etc.

#### Previews
* Previews should be at least `400px x 400px` and square.
* Previews should be named `preview-1`, `preview-2` etc. and match the frame numbering.


### Deployment
After generating your site, copy the contents of `_site` to your sever.
