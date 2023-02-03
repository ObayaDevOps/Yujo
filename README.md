This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

##  Headless CMS
For updating the webpage Content, we use Sanity, it can hold any type of content, Images, Text, Videos. Sanity will store the info and deliver it to the webpage quickly using its CDN (Content Delivery Network)

Link: https://www.sanity.io/

To Manage the account, log in to the admin panel add '/manage' to the end of the URL:

Link: https://www.sanity.io/manage

From here the key info to change is :
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXXXX
NEXT_PUBLIC_SANITY_DATASET=production

These are crucial environment variable and can be changed locally in '.env.local' and on prod in Vercel Dashboard:  project -> settings -> environment variables

Remember, if the URL is changed the CORS will need to be added - Manage Panel :API -> CORS -> add new base url

To manage the Webpage Content, log into 'Sanity Studio': Just add '/studio' to the end of the URL or 'Admin Panel' in the footer

Link: https://www.sanity.io/docs/sanity-studio

Learn about Sanity Studio SetUp: https://www.sanity.io/docs/setup-and-deployment


To Create something new on the webpage, you will need to add a 'Schema' to the codebase:

Learn more: https://www.sanity.io/docs/schemas-and-forms

Note: That only 'document' type schemas will be available to create in the studio, all other lower-type schemas will need to be made of 'documents'

Image Hosting on Sanity: 


TO C

## Email Form Submission

This website uses 'nodemailer': https://nodemailer.com/about/

Change the vercel environment variables / .env.local

SMTP_USER=XXXXXXXXXXX@gmail.com
SMTP_PASSWORD=XXXXXXXXXXXX
RECIPIENT_ADDRESS=XXXXXXXXXXXXX@gmail.com


## Image Hosting
For Speed and Performance, this website Hosts and retirevies all images on Cloudinary, an account is Needed.
Can Log in via Github credentials.

Link:https://cloudinary.com/
React/NextJs SetUp: https://cloudinary.com/documentation/react_quick_start

Next Js Image Optimisation and Set Up : https://vercel.com/docs/concepts/image-optimization/remote-images
Getting Blurred Placeholders: https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/


## Useful UI Components
 ChakraUI:https://chakra-ui.com/docs/
 ChakraUi Components: https://chakra-templates.dev/page-sections/hero
 Dark Mode: https://chakra-ui.com/getting-started/comparison#dark-mode-%F0%9F%8C%9C
 Carousel: https://www.npmjs.com/package/react-responsive-carousel
 Google Fonts: https://fonts.google.com/
 Chakra Themeing: https://chakra-ui.com/docs/styled-system/customize-theme#theme-extension-withdefaultcolorscheme




## Analytics + Testing Performance
Run your URL through this to view your speed. 
Lighthouse WebPortal: https://pagespeed.web.dev/

Vercel Web Vitals:https://vercel.com/docs/concepts/analytics/web-vitals


Audience/Visitor Analytics: https://vercel.com/docs/concepts/analytics/audiences

## Booking Calendar
Use the 'Calendly' Service Free Tier : https://calendly.com/

Integrated using 'React-Calendly' package: https://github.com/tcampb/react-calendly


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
