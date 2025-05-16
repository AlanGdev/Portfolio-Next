import mongoose from 'mongoose';

const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.plugin(uniqueValidator, { message: 'Cet email est déjà utilisé.' });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
