import PouchDB from 'pouchdb';
export const dbConfig = {
  db : new PouchDB('NewDB'),
  putData: function(obj){
    dbConfig.db.put({ _id: obj.email, obj}, function(err,response) {
    });
  },
  getData: function(email){
    return dbConfig.db.get(email, function(err, doc) {
      if(doc) {
        return doc;
      } else {
        alert("You are not registered. please register yourself first");
      }
    });
  },
  getAllData: function() {
    return new Promise(function (resolve, reject) {
       dbConfig.db.allDocs({
           include_docs: true,
           attachments: true
         }, function(err, response) {
           if(response) {
             setTimeout(function () {
               resolve (response);
             }, 100);
           }
        });
     
   });
  
  }
}
