const Teacher = require('../model/teacherModel');

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your API key, secret, and cloud name
cloudinary.config({
  cloud_name: "dack2trjn",
  api_key: "762237592924862",
  api_secret: "vryaIr1KMyVR7e9t_C-wjYDNsoc",
});

// Controller to add an event to the database
const addTeacher = async (req, res) => {
  try {
    const { name,position,subject, phone, description } = req.body;
    const fileBuffer = req.file.buffer; // Access the file buffer

    // Upload the file to Cloudinary
    const cloudinaryResult = await cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error uploading to Cloudinary' });
      }
      // Create a new event with the Cloudinary URL
      const newEvent = new Teacher({
                  name,position,subject, phone, description,
        file: result.secure_url,
      });

      // Save the event to the database
      newEvent.save()
        .then(savedEvent => res.json(savedEvent))
        .catch(saveError => res.status(500).json({ message: 'Error saving event to the database' }));
    }).end(fileBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to get all events
const getTeacher = async (req, res) => {
  try {
    const events = await Teacher.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to delete an event by ID
const deleteTeacher = async (req, res) => {
  try {
    const eventId = req.params.id;

    // Check if the event exists
    const existingEvent = await Teacher.findById(eventId);
    if (!existingEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Delete the event from Cloudinary
//     await cloudinary.uploader.destroy(existingEvent.file_id);

    // Delete the event from the database
//     await existingEvent.remove();
await Teacher.findByIdAndDelete(req.params.id); 

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { addTeacher, getTeacher, deleteTeacher };