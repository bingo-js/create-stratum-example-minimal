import { base } from "../base.js";

export const blockPackageJson = base.createBlock({
  about: { name: "Package JSON" },
  produce({ options }) {
    return {
      files: {
        "package.json": JSON.stringify(
          {
            name: `${options.repository}`,
            description:
              "Example repository created from create-stratum-example-minimal. 💕",
            version: "0.0.0",
            repository: {
              type: "git",
              url: `git+https://github.com/${options.owner}/${options.repository}.git`,
            },
            main: "src/index.js",
            type: "module",
          },
          null,
          "\t"
        ),
      },
    };
  },
});
