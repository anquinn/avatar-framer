The README.md in this directory came with the repo we forked this from. This
README file contains instructions specific to DxE's usage.

Use the devcontainer configuration in this project to avoid installing Jekyll
and Node on your personal computer.

To deploy this project, run `pnpm run build` and copy the contents of the
`_site` directory of this repo to the `frame-generator` directory of our
[static-s3 repo](https://github.com/dxe/static-s3/), and follow the S3 repo's
instructions for deploying to AWS S3.
