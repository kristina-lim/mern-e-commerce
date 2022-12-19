require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Costume = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Animal Costumes', sortOrder: 10},
    {name: 'Christmas Costumes', sortOrder: 20},
    {name: 'Fantasy Costumes', sortOrder: 30},
    {name: 'Scary Costumes', sortOrder: 50},
    {name: 'Work Costumes', sortOrder: 60},
  ]);

  await Costume.deleteMany({});
  const costumes = await Costume.create([
    {name: 'Dog Costume', emoji: '🐶', category: categories[0], price: 45.95},
    {name: 'Cat Costume', emoji: '🐱', category: categories[0], price: 45.95},
    {name: 'Rat Costume', emoji: '🐭', category: categories[0], price: 45.95},
    {name: 'Mouse Costume', emoji: '🐹', category: categories[0], price: 45.95},
    {name: 'Bunny Costume', emoji: '🐰', category: categories[0], price: 45.95},
    {name: 'Fox Costume', emoji: '🦊', category: categories[0], price: 45.95},
    {name: 'Bear Costume', emoji: '🐻', category: categories[0], price: 45.95},
    {name: 'Panda Costume', emoji: '🐼', category: categories[0], price: 45.95},
    {name: 'Polar Bear Costume', emoji: '🐻‍❄️', category: categories[0], price: 45.95},
    {name: 'Koala Costume', emoji: '🐨', category: categories[0], price: 45.95},
    {name: 'Tiger Costume', emoji: '🐯', category: categories[0], price: 45.95},
    {name: 'Lion Costume', emoji: '🦁', category: categories[0], price: 45.95},
    {name: 'Cow Costume', emoji: '🐮', category: categories[0], price: 45.95},
    {name: 'Pig Costume', emoji: '🐷', category: categories[0], price: 45.95},
    {name: 'Frog Costume', emoji: '🐸', category: categories[0], price: 45.95},
    {name: 'Monkey Costume', emoji: '🐵', category: categories[0], price: 45.95},
    {name: 'Rooster Costume', emoji: '🐔', category: categories[0], price: 45.95},
    {name: 'Penguin Costume', emoji: '🐧', category: categories[0], price: 45.95},
    {name: 'Government Pigeon Costume', emoji: '🐦', category: categories[0], price: 45.95},
    {name: 'Chick Costume', emoji: '🐤', category: categories[0], price: 45.95},
    {name: 'Santa Clause Costume', emoji: '🎅', category: categories[1], price: 50.95},
    {name: 'Mrs. Clause Costume', emoji: '🤶', category: categories[1], price: 40.95},
    {name: 'Rudolph the Red Nosed Reindeer Costume', emoji: '🦌', category: categories[1], price: 45.95},
    {name: 'Ninja Costume', emoji: '🥷', category: categories[2], price: 45.95},
    {name: 'Superhero Costume', emoji: '🦸‍♀️', category: categories[2], price: 45.95},
    {name: 'Villain Costume', emoji: '🦹‍♀️', category: categories[2], price: 45.95},
    {name: 'Wizardress Costume', emoji: '🧙‍♀️', category: categories[2], price: 50.95},
    {name: 'Wizard Costume', emoji: '🧙‍♂️', category: categories[2], price: 48.95},
    {name: 'Elvinia Costume', emoji: '🧝‍♀️', category: categories[2], price: 55.95},
    {name: 'Elf Costume', emoji: '🧝', category: categories[2], price: 50.95},
    {name: 'Silver Elf Costume', emoji: '🧝‍♂️', category: categories[2], price: 50.95},
    {name: 'Pink Genie Costume', emoji: '🧞‍♀️', category: categories[2], price: 55.95},
    {name: 'Purple Genie Costume', emoji: '🧞', category: categories[2], price: 55.95},
    {name: 'Blue Genie Costume', emoji: '🧞‍♂️', category: categories[2], price: 55.95},
    {name: 'Mermaid Costume', emoji: '🧜‍♀️', category: categories[2], price: 55.95},
    {name: 'Merman Costume', emoji: '🧜‍♂️', category: categories[2], price: 55.95},
    {name: 'Red Fairy Costume', emoji: '🧚‍♀️', category: categories[2], price: 60.95},
    {name: 'Green Fairy Costume', emoji: '🧚', category: categories[2], price: 60.95},
    {name: 'Blue Fairy Costume', emoji: '🧚‍♂️', category: categories[2], price: 60.95},
    {name: 'Angel Costume', emoji: '👼', category: categories[2], price: 60.95},
    {name: 'Troll Costume', emoji: '🧌', category: categories[3], price: 50.95},
    {name: 'Mrs. Dracula Costume', emoji: '🧛‍♀️', category: categories[3], price: 45.95},
    {name: 'Count Dracula Costume', emoji: '🧛', category: categories[3], price: 45.95},
    {name: 'Zombie Woman Costume', emoji: '🧟‍♀️', category: categories[3], price: 40.95},
    {name: 'Zombie Costume', emoji: '🧟‍♂️', category: categories[3], price: 40.95},
    {name: 'Devil Costume', emoji: '😈', category: categories[3], price: 37.95},
    {name: 'Clown Costume', emoji: '🤡', category: categories[3], price: 40.95},
    {name: 'Ghost Costume', emoji: '👻', category: categories[3], price: 42.95},
    {name: 'Skeleton Costume', emoji: '💀', category: categories[3], price: 40.95},
    {name: 'Alien Costume', emoji: '👽', category: categories[3], price: 52.95},
    {name: 'Police Officer Costume', emoji: '👮‍♂️', category: categories[4], price: 45.95},
    {name: 'Construction Worker Costume', emoji: '👷', category: categories[4], price: 35.95},
    {name: 'London Soldier Costume', emoji: '💂‍♂️', category: categories[4], price: 50.95},
    {name: 'Detective Costume', emoji: '🕵️', category: categories[4], price: 50.95},
    {name: 'Doctor Costume', emoji: '👨‍⚕️', category: categories[4], price: 50.95},
    {name: 'Farmer Costume', emoji: '🧑‍🌾', category: categories[4], price: 50.95},
    {name: 'Chef Costume', emoji: '👨‍🍳', category: categories[4], price: 50.95},
    {name: 'Pink Rockstar Costume', emoji: '👩‍🎤', category: categories[4], price: 55.95},
    {name: 'Green Rockstar Costume', emoji: '🧑‍🎤', category: categories[4], price: 55.95},
    {name: 'Blue Rockstar Costume', emoji: '👨‍🎤', category: categories[4], price: 55.95},
    {name: 'Teacher Costume', emoji: '🧑‍🏫', category: categories[4], price: 45.95},
    {name: 'Technician Costume', emoji: '🧑‍🔧', category: categories[4], price: 45.95},
    {name: 'Scientist Costume', emoji: '👨‍🔬', category: categories[4], price: 45.95},
    {name: 'Artist Costume', emoji: '👨‍🎨', category: categories[4], price: 45.95},
    {name: 'Firefighter Costume', emoji: '👩‍🚒', category: categories[4], price: 45.95},
    {name: 'Military Costume', emoji: '🧑‍✈️', category: categories[4], price: 45.95},
    {name: 'Astronaut Costume', emoji: '👩‍🚀', category: categories[4], price: 45.95},
    {name: 'Judge Costume', emoji: '👨‍⚖️', category: categories[4], price: 45.95},
    {name: 'Cowboy Costume', emoji: '🤠', category: categories[4], price: 45.95},
  ]);

  console.log(costumes)

  process.exit();
})();