// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),
  _selectedRoom: '',

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  get: () => {
    return Rooms._data;
  },

  updateRooms: () => {
    Messages.get().each((message) => {
      Rooms._data.add(message.roomname);
    });

    RoomsView.render();
  },


  add: (roomName) => {
    Rooms._data.add(roomName);


    // maybe change selected room
    RoomsView.render();
  },


  setSelectedRoom: (roomName) => {
    Rooms._selectedRoom = roomName;
    MessagesView.render();
  },

  getSelectedRoom: () => {
    return Rooms._selectedRoom;
  }
};