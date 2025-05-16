import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema({
  nom: { type: String, required: true, unique: true },
  image: { type: String, required: true }, // URL de l'image
  domaine: {
    type: String,
    required: true,
  },
  date_creation: { type: Date, default: Date.now },
});

const Technology =
  mongoose.models.Technology || mongoose.model('Technology', technologySchema);

export default Technology;
