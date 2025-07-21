import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://pyromancy2023.lndo.site/wp/graphql',
    documents: 'graphql/**/*.graphql',
    generates: {
        'graphql/types/generated-types.ts': {
            plugins: [
                'add',
                'typescript',
                'typescript-operations',
                'typescript-vue-apollo',
            ],
            config: {
                content:
                    '/* * Graphql Generated Types and Operations * */\n/* * FILE IS GENERATED: DO NOT EDIT * */',
                dedupeFragments: true,
                inlineFragmentTypes: 'combine',
                nonOptionalTypename: true,
                avoidOptionals: false,
                maybeValue: 'T | undefined',
                dedupeOperationSuffix: true,
                withCompositionFunctions: true,
                vueCompositionApiImportFrom: 'vue',
                scalars: {
                    Int: 'number',
                    String: 'string',
                    Boolean: 'boolean',
                    DateTime: 'Date',
                    Money: 'number',
                    Decimal: 'number',
                    URL: 'string',
                    HTML: 'Element',
                },
            },
        },
    },
}

export default config
