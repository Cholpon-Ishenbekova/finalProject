# FinalOOProject - Work Tracker App

## Overview

This Full Stack Project, Work Tracker App, is an implementation of the existing frontend project, "Work Time Tracker App." This project introduces a backend that includes functionalities such as managing records and staff, and providing operations for creating, updating, and deleting records and staff members.

## Getting Started (Frontend)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start the frontend application:
   ```bash
   npm start
   ```
   

## Backend Setup

### Database

- The project utilizes AWS RDS for database storage.

### Deployment

- The backend is deployed on an EC2 instance where the JAR file is hosted.

### Entities

- Two main entities: **Record** and **Staff**.
- Server ports:
  - **Staff:** [http://34.239.137.242:8085/staff](http://34.239.137.242:8085/staff)
  - **Record:** [http://34.239.137.242:8085/record](http://34.239.137.242:8085/record)

## Main Features

### /staff Page

- Implements CRUD operations for managing staff members.
- Connected with Spring Boot through API and Axios.
- ![Staff Page](https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/beb6122a-aa17-4d4a-9679-c7dbf267e181)

### /add-staff Page

- Connects to a POST request to save new staff data.
- Saved data is stored in the staff database (RDS) and immediately displayed on the /staff page.
- ![Add Staff Page](https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/4255cccb-a80c-428b-8eaf-0ae539db1282)

### /add-record Page

- Utilizes POST requests to save records and update requests (updateRecord).
- <img width="886" alt="image" src="https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/88a17890-8cd1-4d4d-880e-5bbc0f6e1e8b">
- In Postman using aws public address
- <img width="351" alt="image" src="https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/3e43611f-0e48-45df-8dac-b3d7c08cdb3b">

### /records Page

- Implements CRUD operations for managing records.
- Connected with Spring Boot through API and Axios.
- <img width="913" alt="image" src="https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/a09ff6c4-75f4-4e4f-8a22-d46af53d902b">


### Using Postman
1) Staff
   ```bash
   [post] http://34.239.137.242:8085/staff 
   ```
```bash
  {
  "firstName": "cholpon",
  "lastName": "smth",
  "department": "IT",
  "email": "ermek@gmail.kg"

}
   ```



<img width="873" alt="image" src="https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/fb1d48ba-ff21-4fe9-9829-190d8da4da55">

2) Record
   ```bash
   [post] http://34.239.137.242:8085/record
   ```
   ```bash
      {
        "firstName": "Bakyt",
        "lastName": "Bakytov",
        "status": "In",
        "dayTime": "01/01/2022 10:30:00"
    }```

<img width="627" alt="image" src="https://github.com/Cholpon-Ishenbekova/finalOOProject/assets/68575387/b9a68b7e-eade-4c6e-a17e-60637b5f4eb2">

## Conclusion

This project provides a comprehensive solution for tracking work-related data, managing staff, and maintaining records efficiently. The integration of frontend and backend components enhances the overall user experience, providing seamless interactions with the application.
