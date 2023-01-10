export default {
    name: 'front_page',
    type: 'document',
      title: 'Front page content',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      }, 
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [
            {
                type: 'block', 
                styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'H5', value: 'h5'},
                {title: 'H6', value: 'h6'},
                {title: 'Quote', value: 'blockquote'}
                ]
            }
        ]
      }
    ]
  }