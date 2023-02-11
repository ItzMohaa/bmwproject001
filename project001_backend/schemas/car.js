import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name:'price',
      title:'Price',
      description:'Price in USD!',
      type:'string'


    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description:'Keep it short!'
      
    }),
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
