import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'owl',

  projectId: 'qrrqiewa',
  dataset: 'production',
  basePath: "/admin",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
