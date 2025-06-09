import Skill from '@/models/skill';
import dbConnect from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function getSkills() {
  await dbConnect();
  try {
    const skills = await Skill.find().populate('projets');
    return skills;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des données');
  }
}
