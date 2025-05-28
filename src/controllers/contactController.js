import Contact from '@/models/contact';
import dbConnect from '@/lib/mongodb';

export async function createMessage(req) {
  await dbConnect();
  console.log('Connexion MongoDB établie');
  try {
    const { nom, email, message } = await req.json();
    if (!nom || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Tous les champs sont requis' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newContact = await Contact.create({ nom, email, message });
    return new Response(
      JSON.stringify({
        message: 'Contact créé avec succès!',
        contact: newContact,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: 'Erreur lors de la création du contact',
        error: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
