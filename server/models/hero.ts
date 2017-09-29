import * as mongoose from "mongoose";

export interface IHeroModel extends mongoose.Document{
    heroName: String,
    heroPower: String
} 

const HeroSchema = new mongoose.Schema({
    heroName: String,
    heroPower: String
});

export const Hero: mongoose.Model<IHeroModel> = mongoose.model<IHeroModel>("heroes", HeroSchema);