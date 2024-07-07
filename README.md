# carsounds-manifest-generator

A simple TypeScript CLI tool that generates `fxmanifest.lua` by searching through folders and files in your FiveM resource.

## Description

This tool automates the process of creating a `fxmanifest.lua` file for FiveM resources. It scans your project directory, identifies relevant files, and generates the manifest file with appropriate entries.

## Features

- Automatically detects and includes relevant files in your FiveM resource
- Generates a complete `fxmanifest.lua` file
- Easy to use command-line interface

## Installation

You can install it via Releases or you can build it yourself using Bun!

Using Bun, you can build it via:
```bash
bun build ./manifest_script.ts --compile --outfile=manifest_generator
```

## Usage

After building, you can use `./manifest_generator` at the root of your resource.

If you have setup the directories and files correctly it, the tool will scan your directory and generate the `fxmanifest.lua` file.

## Requirements

- Bun v1.1.12 or higher
- TypeScript v4.0 or higher

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any problems or have any questions, please open an issue on the GitHub repository.