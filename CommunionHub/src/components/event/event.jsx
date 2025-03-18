import './event.css';
import { useState } from 'react';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';

const eventsData = [
  {
    id: 1,
    name: 'Sunday Mass',
    date: 'March 24, 2025',
    time: '10:00 AM',
    location: "St. Peter's Church",
  },
  {
    id: 2,
    name: 'Community Prayer',
    date: 'March 26, 2025',
    time: '6:00 PM',
    location: 'Church Hall',
  },
];
const Event = () => {
  const [search, setSearch] = useState('');
  const [events, setEvents] = useState(eventsData);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
  });
  const [isOpen, setModal] = useState(false);

  const Navi = useNavigate();
  const goHome = () => {
    Navi('/');
  };

  const filteredEvents = events.filter(
    event => event.name.toLowerCase().includes(search.toLowerCase()) // to search the events
  );

  // Handle input change for new event form
  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (
      !newEvent.name ||
      !newEvent.date ||
      !newEvent.time ||
      !newEvent.location
    ) {
      alert('Please fill out all fields');
      return;
    }

    const newEventData = {
      id: events.length + 1,
      ...newEvent,
    };

    setEvents([...events, newEventData]); // Update events list
    setNewEvent({ name: '', date: '', time: '', location: '' }); // Clear form fields
    setModal(false); // Close modal
  };

  return (
    <>
      <div className="two">
        <Navbar onClick={goHome} />
        <div className="box">
          <div className="container" id="ev">
            <h2>Event Listing</h2>
            <input
              type="text"
              className="search-bar"
              placeholder="Search events..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="over">
              {filteredEvents.map(event => (
                <div key={event.id} className="event">
                  <h3>{event.name}</h3>
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                </div>
              ))}
            </div>

            <button className="add-btn" onClick={() => setModal(true)}>
              Add Event
            </button>

            {isOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={() => setModal(false)}>
                    &times;
                  </span>
                  <h2>Add New Event</h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Event Name"
                    value={newEvent.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleInputChange}
                  />
                  <input
                    type="time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Event Location"
                    value={newEvent.location}
                    onChange={handleInputChange}
                  />

                  <button className="save-btn" onClick={handleAddEvent}>
                    Save Event
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
