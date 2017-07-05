import PouchDB from 'pouchdb';
import plugin from 'pouchdb-find';
PouchDB.plugin(plugin);
var db = new PouchDB('ReactNew',plugin);

export const dbConfig = {
  putData: function(obj, attachment) {
    console.log(attachment);
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
    db.createIndex( {
      index: {
        fields: ['email'],
      }
    },function(err, result) {
      if(err) {
        console.log(err);
      }else {
        console.log(result);
      }
    });
    return db.put(doc);
  },
  getData: function(email) {
    var em = email;
    db.find({
      selector: {email: em},
      fields: ['name', 'password']
    }, function (err, result) {
      if (err) { return console.log(err); }
      console.log(result);
    });
    return (
      db.get(email)
    );
  },
  getAllData: function() {
    return (
      db.allDocs({
        include_docs: true,
        attachments: true
      }, function(err, response) {
    }));
  }
}
