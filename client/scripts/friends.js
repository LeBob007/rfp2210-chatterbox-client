// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set(),

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: (friendName) => {
    if (!Friends.isFriend(friendName)) {
      Friends._data.add(friendName);
    } else {
      Friends._data.delete(friendName);
    }

    // RENDER MESSAGES AGAIN
    MessagesView.render();
  },

  isFriend: (friendName) => {
    return Friends._data.has(friendName);
  }



};