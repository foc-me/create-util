const typescript = require("@rollup/plugin-typescript")
const terser = require("@rollup/plugin-terser")
const copy = require("rollup-plugin-copy")
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
        terser(),
        copy({
            targets: [
                { src: ["./readme.md"], dest: "./dist" }
            ]
        }),
        pick([
            "name",
            "version",
            ["main", "dist/index.js"],
            ["module", "lib/index.js"],
            ["exports", {
                import: "./esm/index.js",
                default: "./dist/index.js"
            }],
            ["types", "type"],
            "description",
            "keywords",
            ["files", ["dist", "esm", "lib", "type", "readme.md", "package.json"]],
            "author",
            "repository",
            "license"
        ])
    ]
}