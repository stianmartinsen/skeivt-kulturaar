# Skeivt Kulturår Kalender

## Get started
This is a Yarn multirepo, with the frontend residing in the `web` directory and the headless CMS backend in the `sanity` directory.
The frontend uses Next.js with "incremental static regeneration" by using async `getStaticProps` and setting a revalidation time, and is hosted on Netlify.
Every successful build merged to the main branch gets deployed automatically.

### Requirements
In order to get any information from the CMS while developing, you need a `.env.development.local` file inside the `web` directory with a Sanity token:

```
SANITY_ACCESS_TOKEN=yourToken
```

If you want to use your own provided project or a different dataset, you can also set these environment variable in the same file:

```
SANITY_PROJECTID=yourProjectId
SANITY_STUDIO_API_DATASET=yourDataset
```

### Local development
In the root directory of the repo:
1. `yarn`
2. `yarn web dev`

If you want to see/use the Sanity studio while developing:

`yarn sanity dev`

#### Adding packages
`yarn web add react-something` to add to the frontend package.

`yarn sanity add sanity-something` to add to the Sanity package.
