# OpenTek-myShop
OpenTek-myShop


Seeds Data

category_taxs: [{"id":"1", name: "imported", "sales_tax": "5"}, {"id":"2", name: "non imported", "sales_tax": "10"}];

category_products: [{"id": "1", "name": "food"}, {"id": "2", "name": "book"}, {"id": "3", "name":"medical"}, {"id": "4", "name": "other"}];

products: [
	{"id": "1", "category_products_id": "1", category_taxs_id: "2", "name": "Chocolate", "price": "0.85"},
	{"id": "2", "category_products_id": "2", category_taxs_id: "2", "name": "Book First", "price": "30000"},
	{"id": "3", "category_products_id": "2", category_taxs_id: "2", "name": "Book Second", "price": "20000"},
	{"id": "4", "category_products_id": "3", category_taxs_id: "1", "name": "Imported perfume", "price": "50000"}
]

carts: [{"id": "1", owner_id: "1", "product_id": "1", "quantity": "5"}];
