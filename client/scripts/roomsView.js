// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.click(function() {
      RoomsView.handleClick();
    });

    RoomsView.$select.change(function() {
      RoomsView.handleChange();
    });
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    var roomList = Rooms.get();
    roomList.forEach((roomName) => {
      RoomsView.renderRoom(roomName);
    });

  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    if (roomName === Rooms.getSelectedRoom()) {
      var $option = $('<option selected>').val(roomName).text(roomName);
    } else {
      var $option = $('<option>').val(roomName).text(roomName);
    }
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.setSelectedRoom(RoomsView.$select.val());
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var room = prompt('Enter room name: ');
    Rooms.add(room);
    RoomsView.renderRoom(room);

  }

};
