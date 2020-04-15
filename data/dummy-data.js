import Category from '../models/category';
import Goods from '../models/goods';

export const CATEGORIES = [
  new Category('c1', 'Coffee'),
  new Category('c2', 'Tea'),
  new Category('c3', 'Spicy'),
  new Category('c4', 'Accessories'),
];

export const GOODS = [
  // Goods from category Coffee
  new Goods('g1', 'c1', 'Brazil coffee pack', 'Description for Brazil coffee pack', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 150, 100, 0),
  new Goods('g2', 'c1', 'Gonduras coffee pack', 'Description for Gonduras coffee pack', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 70, 100, 0),
  new Goods('g3', 'c1', 'Americano', 'Description for Americano', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 75, 100, 0),
  new Goods('g4', 'c1', 'Cappuccino', 'Description for Cappuccino', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 15.5, 100, 0),
  new Goods('g5', 'c1', 'Raf', 'Description for Raf', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 33, 100, 0),
  new Goods('g6', 'c1', 'v60 coffee', 'Description for v60 coffee', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 144.99, 100, 0),
  new Goods('g7', 'c1', 'Blend', 'Description for Blend', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Coffee', 170, 100, 0),

  // Goods from category Tea
  new Goods('g8', 'c2', 'Black Tea', 'Description for Black Tea', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Tea', 25, 100, 0),
  new Goods('g9', 'c2', 'Green Tea', 'Description for Green Tea', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Tea', 0.99, 100, 0),
  new Goods('g10', 'c2', 'Japan Tea', 'Description for Japan Tea', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Tea', 1, 100, 0),
  new Goods('g11', 'c2', 'Tea with Lemon', 'Description for Tea with lemon', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Tea', 100, 100, 0),

  // Goods from category Spicy
  new Goods('g12', 'c3', 'Hot pepper', 'Description for Hot pepper', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 50, 100, 0),
  new Goods('g13', 'c3', 'Cinnamon', 'Description for Cinnamon', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 10, 100, 0),
  new Goods('g14', 'c3', 'Turmeric', 'Description for Turmeric', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 123, 100, 0),
  new Goods('g15', 'c3', 'Saffron', 'Description for Saffron', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 54.9, 100, 0),
  new Goods('g16', 'c3', 'Moruga Scorpion Mash', 'Description for Moruga Scorpion Mash', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 370, 100, 0),
  new Goods('g17', 'c3', 'Carolina Reaper Mash', 'Description for Carolina Reaper Mash', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 175, 100, 0),
  new Goods('g18', 'c3', 'Pepper Red Habanero', 'Description for Pepper Red Habanero', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 90, 100, 0),
  new Goods('g19', 'c3', 'Ancho', 'Description for Ancho', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 100, 100, 0),
  new Goods('g20', 'c3', 'Kashmiri Chilli', 'Description for Kashmiri Chilli', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 30, 100, 0),
  new Goods('g21', 'c3', 'Habanero', 'Description for Habanero', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 185, 100, 0),
  new Goods('g22', 'c3', 'Chipotle Mash', 'Description for Chipotle Mash', 'https://via.placeholder.com/75x75/0000FF/FFFFFF/?text=Spicy', 185, 100, 0),

  // Goods from category Accessories
  new Goods('g23', 'c4', 'Coffee Machine', 'Description for Brazil coffee pack', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Accessories', 2000, 100, 0),
  new Goods('g24', 'c4', 'Kettle', 'Description for Kettle', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Accessories', 500, 100, 0),
  new Goods('g25', 'c4', 'Serviette', 'Description for Serviette', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Accessories', 250, 100, 0),
  new Goods('g26', 'c4', 'Coffee Machine x60 PRO', 'Description for Coffee Machine x60 PRO', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Accessories', 4000, 100, 0),
  new Goods('g27', 'c4', 'Сool Coffee Machine x90 Extreme', 'Description for Сool Coffee Machine x90 Extreme', 'https://via.placeholder.com/75x75/008000/FFFFFF/?text=Accessories', 5000, 100, 0),
];
