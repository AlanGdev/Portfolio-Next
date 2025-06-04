import Project from '@/models/project';
import Technology from '@/models/techno';
import dbConnect from '@/lib/mongodb';

exports.createProject = async (req, res) => {
  try {
    console.log('Données reçues :', req.body);
    console.log('Images traitées :', req.processedImages);

    const {
      nom,
      description,
      categorie,
      lien_github,
      lien_demo,
      technologies,
      problematics,
    } = req.body;

    if (!nom || !description || !categorie || !technologies) {
      return res
        .status(400)
        .json({ message: 'Tous les champs requis doivent être remplis' });
    }

    // Vérification et conversion des technologies en ObjectId
    let formattedTechnologies = [];
    let formattedProblematics = [];
    try {
      const parsedProblematics =
        typeof problematics === 'string'
          ? JSON.parse(problematics)
          : problematics;
      formattedProblematics = parsedProblematics;

      const parsedTechnologies =
        typeof technologies === 'string'
          ? JSON.parse(technologies)
          : technologies;
      formattedTechnologies = parsedTechnologies.map(
        (tech) => new mongoose.Types.ObjectId(tech)
      );
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'Format incorrect des technologies.' });
    }

    const newProject = new Project({
      nom,
      description,
      categorie,
      lien_github,
      lien_demo,
      problematics: formattedProblematics,
      image: req.processedImages.image || null,
      images_detail: req.processedImages.images_detail || [],
      technologies: formattedTechnologies,
    });

    await newProject.save();
    res
      .status(201)
      .json({ message: 'Projet ajouté avec succès', project: newProject });
  } catch (error) {
    console.error('Erreur serveur :', error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

export async function getProjects() {
  await dbConnect();
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des projets');
  }
}

export async function getOneProject(id) {
  console.log('find One');
  console.log(id);
  await dbConnect();
  try {
    const project = await Project.findById(id).populate('technologies');
    //const project = { nom: 'alan' };
    if (!project) {
      throw new Error('Projet non trouvé');
    }
    console.log(project);
    return project;
  } catch (error) {
    throw new Error('Erreur serveur');
  }
}
