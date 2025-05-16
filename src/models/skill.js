import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  categorie: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  projets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  dateAjout: {
    type: Date,
    default: Date.now,
  },
});

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
export default Skill;
