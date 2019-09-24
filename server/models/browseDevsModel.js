const mongoose = require('mongoose');

const browseDevsSchema = new mongoose.Schema({
  userImage: {
    data: Buffer,
    contentType: String,
    default: 'https://via.placeholder.com/250x200'
  },
  userName: {
    type: String,
    default: 'John Doe'
  },
  userRole: {
    type: String,
    default: "Doing nothing tbh, but it's ok for me"
  },
  userLocation: {
    type: String,
    default: 'Somewhere over the rainbow!'
  },
  userProfileLink: {
    type: String
  },
  userSkills: [
    {
      firstSkill: {
        type: String
      },
      SecondSkill: {
        type: String
      },
      thirdSkill: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('browseDevs', browseDevsSchema);