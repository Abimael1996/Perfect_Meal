INSERT INTO nutritionist (first_name, last_name, email, password) 
VALUES ("Valeria", "Villaseñor", "valevilla@gmail.com", "valerita1234");

INSERT INTO patient (first_name, last_name, weight, height, sex, goal, age, activity, nutritionist_id) 
VALUES ("Abimael", "Monarrez", "169", "6.0", "Male", "Gain", "25", "Moderate", "1");

INSERT INTO meal_plan (name, patient_id)
VALUES ("Abi's Plan", 1);

 INSERT INTO day (day, plan_id)
 VALUES ("7", 1), ("1", 1), ("2", 1), ("3", 1), ("4", 1), ("5", 1), ("6", 1);

 INSERT INTO meal (meal_time, day_id)
 VALUES ("1", 1), ("2", 1), ("4", 5);

 INSERT INTO food (name, meal_id)
 VALUES ("Banana Shake"), ("Strawberry Shake"), ("Vanilla Shake"), ("Chocolate Shake"), ("Mango Shake"), ("Blueberry Shake"), ("Oatmeal Shake"), ("Hamburger"), ("Salad"), ("Water");

 INSERT INTO meal_food (meal_id, food_id)
 VALUES (1, 1), (2, 3), (3, 5);

 INSERT INTO ingredient (name)
 VALUES ("Bannana"), ("Strawberry"), ("Vanilla"), ("Chocolate"), ("Mango"), ("Blueberry"), ("Oatmeal"), ("Milk");

 INSERT INTO food_ingredient (food_id, ingredient_id)
 VALUES (1, 1), (1, 8), (2, 2), (2, 8), (3, 3), (3, 8), (4, 4), (4, 8), (5, 5), (5, 8), (6, 6), (6, 8), (7, 7), (7, 8);
