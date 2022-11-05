// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages. Refresh messages when there are new messages
  get: () => {
    return _.chain(Object.values(Messages._data));
  },

  update: (messages) => {
    for (var i = 0; i < messages.length; i++) {
      Messages._data[messages[i].message_id] = Messages.defaultValue(messages[i]);
    }
    // console.log(Object.values(Messages._data));
    MessagesView.render();
  },

  defaultValue: (message) => {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    message.updatedAt = message.updatedAt || new Date();
    return message;
  }

// iterate with for loop through messages
//    Messages._data[messages[i].message_id] = messages[i]
};