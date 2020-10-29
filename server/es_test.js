const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  host: {
    host: 'localhost',
    port: 8080,
  },
})

try {
  // const response = client.search({
  //   index: 'test15',
  //   body: {
  //     "query": {
  //       "bool": {
  //         "must": {
  //           "match": {
  //             "name": "kwon"
  //           },
  //           "range": {
  //             "age": {
  //               "gte": 17,
  //               "lte": 20
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // })
  const response = client.index({
    index: 'library',
    body: {
      title: 'The Book',
      author: 'KHK',
      location: 123,
      text: 'Hello World',
    }
  })
  console.log(response)
} catch (error) {
  console.log(error.message)
}
