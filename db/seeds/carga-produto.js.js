/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {"id": 1, "descricao": "Camisa", "marca": "Nike", "preco": 49.90},
    {"id": 2, "descricao": "Tênis", "marca": "Nike", "preco": 49.90},
    {"id": 3, "descricao": "Short", "marca": "Mizuno", "preco": 123.90},
    {"id": 4, "descricao": "Sapato", "marca": "Nike", "preco": 100.90},
    {"id": 5, "descricao": "Cueca", "marca": "Nike", "preco": 49.90},
    {"id": 6, "descricao": "Meia", "marca": "Nike", "preco": 49.90}
  ]);
};
