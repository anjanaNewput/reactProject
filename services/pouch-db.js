import PouchDB from 'pouchdb';
var db = new PouchDB('ReactDB');
export const dbConfig = {
  db : db,
  putData: function(obj, attachment){
    var doc = {
      _id: obj.email,
      _attachments: {
        "att.txt": {
          content_type: "application/pdf",
          data: attachment
        }
      },
      obj
    };
    dbConfig.db.put(doc, function(err, response) {
      console.log(response);
    });
  },
  getData: function(email) {
    return (
      dbConfig.db.get(email, function(err, doc) {
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
    }));
  }
}
