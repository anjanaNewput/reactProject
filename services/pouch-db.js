import PouchDB from 'pouchdb';
import plugin from 'pouchdb-find';
PouchDB.plugin(plugin);
var db = new PouchDB('ReactNew',plugin);

db.createIndex( {
  index: {
    fields: ['obj.email'],
  }
},function(err, result) {
  if(err) {
    console.log(err);
  }else {
    console.log(result);
  }
});

db.createIndex( {
  index: {
    fields: ['obj.role'],
  }
},function(err, result) {
  if(err) {
    console.log(err);
  }else {
    console.log(result);
  }
});

export const dbConfig = {
  putData: function(obj, attachment) {
    console.log(attachment);
    var doc = {
      _id: obj.email,
      _attachments: {
        "att.pdf": {
          content_type: "application/pdf",
          data: attachment
        }
      },
      obj
    };
    return db.put(doc);
  },
  getData: function(email) {
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
  },
  findByRole: function(role) {
    return db.find({selector: {'obj.role': role}});
  },
  findByEmail: function(email) {
    return db.find({selector: {'obj.email': email}});
  },
  removeDoc: function(doc) {
    return db.remove(doc);
  }
}
