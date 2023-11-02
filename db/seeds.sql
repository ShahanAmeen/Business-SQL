USE work_db;

INSERT INTO deparment(name) 
VALUES ("Athletics"),("IT"),("Management");

INSERT INTO role(title, salary, deparment_id)
VALUES ("Junior Developer", 80000, 2), 
 ("Athletic Director", 78000, 1),
 ("Manager in Training", 48000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Shahan", "Ameen", 1, 3 ), 
("Jack", "Doe", 2, 3),
("Yo", "Shmoe", 3, null);
