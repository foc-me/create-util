const typescript = require("@rollup/plugin-typescript")
const copy = require("rollup-plugin-copy")
const cleanup = require("rollup-plugin-cleanup")
const pick = require("@focme/rollup-plugin-pick")
const package = require("./package.json")

const banner = `/**
 * ${package.name} v${package.version}
 * @license MIT
 * Copyright (c) 2025 - present Fat Otaku Team
 **/`

module.exports = {
    input: "./lib/index.ts",
    output: [,
        { dir: "./dist/dist", format: "cjs", banner },
        { dir: "./dist/esm", format: "esm", banner }
    ],
    plugins: [
        typescript({
            outDir: null,
            declaration: false,
            declarationDir: null
        }),
        cleanup({ extensions: "ts" }),
        copy({
            targets: [
                { src: ["./readme.md"], dest: "./dist" }
            ]
        }),
        pick([
            "name",
            "version",
            ["main", "./dist/index.js"],
            ["module", "./lib/index.js"],
            ["types", "./type/index.d.ts"],
            ["exports", {
                ".": {
                    types: "./type/index.d.ts",
                    import: "./esm/index.js",
                    require: "./dist/index.js"
                }
            }],
            "description",
            "keywords",
            ["files", ["dist", "esm", "lib", "type", "readme.md", "package.json"]],
            "author",
            "repository",
            "license"
        ])
    ]
}