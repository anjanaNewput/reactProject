import PouchDB from 'pouchdb';
export const dbConfig = {
  db : new PouchDB('ReactDB'),
  putData: function(obj){
    console.log('put new data ');
    console.log(obj);
    dbConfig.db.put({ _id: obj.email, obj}, function(err,response) {
      if(response) {
        console.log('response');
      }else {
        db.createIndex({
          index: {
            fields: ['email']
          }
        });
      }
    });
  },
  getData: function(email){
    return (dbConfig.db.get(email, function(err, doc) {
      if(doc) {
        return doc;
      } else {
        alert("You are not registered. please register yourself first");
      }
    }));
  },
  getAllData: function() {
    return (
      dbConfig.db.allDocs({
        include_docs: true,
        attachments: true
      }, function(err, response) {
      
      })
    );
  }
}
