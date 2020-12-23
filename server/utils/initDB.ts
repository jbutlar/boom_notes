import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
 
const adapter = new FileSync('db.json')
const db = lowdb(adapter)
 
// Set some defaults
db.defaults({ notes: [] })
  .write()

  export default ''
