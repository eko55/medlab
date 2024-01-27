INSERT INTO laboratories (name,address,email,phone,hospital_name)
VALUES ('A-Lab','Sofia Some Random Street 1','alab@lab.com','0888111111','Sofia Hospital A'),
 ('B-Lab','Sofia Some Random Street 2','blab@lab.com','0888111112','Sofia Hospital B'),
 ('C-Lab','Sofia Some Random Street 3','clab@lab.com','0888111113','Sofia Hospital C');

INSERT INTO employees (personal_number,first_name,last_name,lab_id)
VALUES ('9511112345','Antoaneta','Antonova',1),
 ('9411112345','Bogdan','Bogdanov',1),
 ('9311112345','Vesela','Vasileva',2),
 ('9211112345','Geoergi','Georgiev',2),
 ('9111112345','Dimitar','Dimitrov',3),
 ('9011112345','Emil','Emilov',3);

INSERT INTO patients (personal_number,first_name,last_name,lab_id)
VALUES ('9511112345','Asen','Asenov',1),
 ('9411112345','Boyan','Boyanov',1),
 ('9311112345','Valentin','Valentinov',2),
 ('9211112345','Galina','Georgieva',2),
 ('9111112345','Diyana','Dimitrova',3),
 ('9011112345','Emiliya','Emilova',3);


INSERT INTO lab_tests (name,description,reference_range,units,price,lab_id)
VALUES ('WBC','WBC(white blood cells) are part of the complete blood count (CBC)','3.50 - 10.50','10^9/l',10,1),
('WBC','WBC(white blood cells) are part of the complete blood count (CBC)','3.50 - 10.50','10^9/l',15,2),
('WBC','WBC(white blood cells) are part of the complete blood count (CBC)','3.50 - 10.50','10^9/l',20,3),
('RBC','RBC(red blood cells) are part of the complete blood count (CBC)','4.40 - 5.90','10^12/l',10,1),
('RBC','RBC(red blood cells) are part of the complete blood count (CBC)','4.40 - 5.90','10^12/l',15,2),
('RBC','RBC(red blood cells) are part of the complete blood count (CBC)','4.40 - 5.90','10^12/l',20,3),
('HGB','Measures the amount of hemoglobin in your blood','135 - 180','g/l',12,1),
('HGB','Measures the amount of hemoglobin in your blood','135 - 180','g/l',14,2),
('HGB','Measures the amount of hemoglobin in your blood','135 - 180','g/l',16,3),
('HCT','Hematocrit - measures the proportion of red blood cells in the blood','0.400 - 0.550','l/l',13,1),
('HCT','Hematocrit - measures the proportion of red blood cells in the blood','0.400 - 0.550','l/l',11,2),
('HCT','Hematocrit - measures the proportion of red blood cells in the blood','0.400 - 0.550','l/l',17,3);

INSERT INTO tests_results (date,lab_test_id,values,patient_id,lab_employee_id)
VALUES ('2024-01-02',1,3.94,1,1),
 ('2024-01-02',4,5.11,1,1),
 ('2024-01-02',7,145,1,1),
 ('2024-01-02',10,0.439,1,1),

 ('2024-01-02',2,4.94,2,2),
 ('2024-01-02',5,6.25,2,2),
 ('2024-01-02',8,151,2,2),

 ('2024-01-02',3,4.94,3,3),
 ('2024-01-02',6,6.94,3,3),
 ('2024-01-02',9,158,3,3),
 ('2024-01-02',11,0.470,3,3),

 ('2024-01-02',1,7.25,4,4),
 ('2024-01-02',1,5,4,4);