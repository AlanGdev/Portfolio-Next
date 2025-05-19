import Technology from '@/models/techno';
import dbConnect from '@/lib/mongodb';

export async function getTechnos() {
  await dbConnect();
  try {
    const technos = await Technology.find();
    return technos;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données');
  }
}
