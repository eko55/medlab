# Medical Laboratory Application

#Start the backend server
Execute the following command from the root of the project:

    mvn spring-boot:run

#API Swagger Documentation:
http://localhost:8080/swagger-ui/index.html#/

Requirements for frontend:
Node.js installed
npm vite@latest

#Start the frontend:
Navigate to ***frontend*** directory and execute the following commands:

    npm install
    npm run dev (or npm start)

****Requirements for frontend:***
Node.js installed
npm vite@latest

#Website url: http://localhost:5173/

#Features supported by the application:
1. Регистриране на потребители и вход в системата.
2. Възможност за задаване на роли на потребителите (служител, пациент).
3. Въвеждане, показване, редактиране и изтриване на данни за:
   3.1. Клиничната лаборатория и болничното заведение, към което тя се намира;  
   3.2. Служител на лабораторията;  
   3.3. Пациент на лабораторията;   
   3.4. Услуги, предлагани от лабораторията, т.е. изследвания, които лабораторията
   може да провежда;    
   3.5. Направени изследвания.  
4. Служителите на лабораторията трябва да могат да регистрират пациенти и да
   добавят направени изследвания.
5. Справки за:  
   5.1. Всички служители в лабораторията;   
   5.2. Всички клиенти на лабораторията;    
   5.3. Всички изследвания, които са били регистрирани; 
   5.4. Всички изследвания, които са регистрирани от даден служител;    
   5.5. Всички изследвания, които са направени на даден пациент.
6. Всеки служител може да вижда всички направени изследвания.
7. Всеки пациент може да вижда единствено своите изследваният