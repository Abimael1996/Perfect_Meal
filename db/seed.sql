INSERT INTO nutritionist (first_name, last_name, email, password) 
VALUES ("Valeria", "Villaseñor", "valevilla@gmail.com", "valerita1234");

INSERT INTO patient (first_name, last_name, email, password, weight, height, sex, goal, age, date_of_birth, nutritionist_id) 
VALUES ("Abimael", "Monarrez", "abimaelmona@gmail.com", "abi123455", "169", "6.0", "male", "gain", "25", "1996-07-18", "1");

INSERT INTO patient (first_name, last_name, email, password, weight, height, sex, goal, age, date_of_birth, nutritionist_id) 
VALUES ("Roman", "Beltran", "roman23@gmail.com", "roman123455", "190", "5.10", "male", "lose", "23", "1998-03-08", "1");

INSERT INTO patient (first_name, last_name, email, password, weight, height, sex, goal, age, date_of_birth, nutritionist_id) 
VALUES ("Julia", "Osuna", "julia@gmail.com", "julia1898i9", "143", "5.06", "female", "lose", "19", "2000-03-08", "1");

INSERT INTO meal_plan (name, patient_id)
VALUES ("Abi's Plan", 1);

INSERT INTO day (name, plan_id)
VALUES ("Monday", 1), ("Tuesday", 1), ("Wednesday", 1), ("Thursday", 1), ("Friday", 1), ("Saturday", 1), ("Sunday", 1);

INSERT INTO meal (meal, day_id)
VALUES (1, 1), (2, 1), (4, 5), (1, 1), (5, 1);

INSERT INTO food (name)
VALUES ("Banana Shake"), ("Strawberry Shake"), ("Vanilla Shake"), ("Chocolate Shake"), ("Mango Shake"), ("Blueberry Shake"), ("Oatmeal Shake"), ("Hamburger"), ("Salad"), ("Water");

INSERT INTO meal_food (meal_id, food_id)
VALUES (1, 1), (2, 3), (3, 5), (4, 2), (5, 8);

INSERT INTO ingredient (name)
VALUES ("Bannana"), ("Strawberry"), ("Vanilla"), ("Chocolate"), ("Mango"), ("Blueberry"), ("Oatmeal"), ("Milk");

INSERT INTO food_ingredient (food_id, ingredient_id)
VALUES (1, 1), (1, 8), (2, 2), (2, 8), (3, 3), (3, 8), (4, 4), (4, 8), (5, 5), (5, 8), (6, 6), (6, 8), (7, 7), (7, 8);
