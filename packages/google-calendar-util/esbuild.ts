import { z } from 'zod'
import yargs from 'yargs'
import type { BuildOptions, Plugin, LogLevel } from 'esbuild'
import * as esbuild from 'esbuild'
import * as gasPlugin from 'esbuild-gas-plugin'
import process from 'process'

const GasPlugin: Plugin = gasPlugin.GasPlugin

const fileArgsSchema = z.object({
    watch: z.boolean().default(false), //use file flag
})

export const getArgs = (): z.infer<typeof fileArgsSchema> => {
    const args: z.infer<typeof fileArgsSchema> = fileArgsSchema.parse(
        yargs(process.argv).argv,
    )
    return args
}

export const buildAll = () => {
    const args = getArgs()
    console.log('the args are !!!!!', args)

    esbuild
        .build({
            target: 'ES2019',

            entryPoints: ['src/index.ts'],
            bundle: true,
            minify: false,
            logLevel: 'info',
            outfile: 'dist/bundle.js',
            plugins: [GasPlugin],
        })
        .catch(() => process.exit(1))
}

export default buildAll()
export {}
