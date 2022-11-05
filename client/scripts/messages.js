// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages. Refresh messages when there are new messages
  update: (messages) => {
    for (var i = 0; i < messages.length; i++) {
      Messages._data[messages[i].message_id] = messages[i];
    }

    MessagesView.render();
  }

// iterate with for loop through messages
//    Messages._data[messages[i].message_id] = messages[i]
};