import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String, required: true },
  categorie: {
    type: String,
    enum: ['Front-End', 'Back-End', 'Full-Stack'],
    required: true,
  },
  lien_github: { type: String, required: true },
  lien_demo: { type: String },
  image: { type: String, required: true },
  images_detail: [{ type: String }],
  problematics: [{ type: String }],
  technologies: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Technology', required: true },
  ],
  date_creation: { type: Date, default: Date.now },
});

const Project =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
