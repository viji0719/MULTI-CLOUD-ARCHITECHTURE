# MULTI-CLOUD-ARCHITECHTURE

**COMPANY** : CODETECH IT SOLUTIONS

**NAME** : PRAGATHI P

**INTERN ID** : CT04DG1065

**DOMAIN** :Cloud Computing

**DURATION** : 4 WEEKS

**MENTOR** :Neela Santhosh Kumar

**DESCRIPTION**:

**Multi-Cloud Architecture:**
**Introduction**
In the modern digital landscape, relying solely on a single cloud provider can introduce risks related to vendor lock-in, downtime, and performance bottlenecks. To address this, Multi-Cloud Architecture has become a robust solution — distributing services across two or more cloud platforms to ensure high availability, resilience, and flexibility. This project demonstrates the concept of multi-cloud interoperability using Amazon Web Services (AWS) and Render by hosting the frontend and backend on two different cloud platforms, respectively.

**Objective**
The core objective of this project is to showcase interoperability between different cloud service providers — AWS and Render — where:
Frontend static files (HTML, CSS, JS) are hosted on AWS S3 with Static Website Hosting.
Backend APIs are deployed and served from Render, a free cloud platform for web apps and APIs.
The final outcome is a fully working web application where the user interacts with a frontend hosted on AWS, and API calls are made to a backend hosted on Render. This separation ensures the demonstration of a true multi-cloud system.

**Architecture Overview**
This architecture is split into two major components:
AWS S3 Bucket (Frontend Layer)
AWS S3 is used to host the static web assets: index.html, app.js, and style.css.
Static Website Hosting is enabled, and the default document is set to index.html.
The S3 bucket is made publicly accessible to allow web hosting.
Once uploaded, the website is available at a public S3 endpoint.
Render Web Service (Backend Layer)
A backend server is developed using Node.js and Express.
An endpoint /hello is created to return a sample response like “Backend is live!”.
CORS (Cross-Origin Resource Sharing) is configured using the cors middleware to allow requests from the AWS S3 domain.
The backend is deployed to Render using GitHub integration or direct upload.

**Working Demonstration**
The user opens the hosted site from the AWS S3 public URL.
On clicking the “Call Backend” button, the frontend script triggers a fetch() request to the Render backend's /hello endpoint.
The Render backend responds with a predefined message.
The response is shown on the frontend using JavaScript DOM manipulation.
This roundtrip showcases the communication flow between two separate cloud services — AWS and Render — in real-time.

**Challenges Faced**
CORS Policy Block: Initially, the browser blocked API requests due to CORS restrictions. This was resolved by enabling the cors middleware in the Express server on Render.
Static File Hosting Errors: Common errors like 404 NoSuchKey from AWS were encountered due to misconfigured index files or incorrect object key names. Ensuring proper file names and enabling website hosting fixed the issue.
Backend Deployment Errors: The deployment on Render failed initially due to missing dependencies like express and cors. After creating a proper package.json and installing all required modules, the issue was resolved.

**Benefits of This Multi-Cloud Approach**
Avoid Vendor Lock-In: By using two cloud platforms, this architecture reduces dependency on a single vendor.
Optimized Cost & Resources: Static sites can be cheaply hosted on AWS S3, while backend APIs can be freely deployed on Render.
Improved Resilience: If one platform experiences downtime, other services can still operate independently.
Scalability & Flexibility: Each layer can be scaled or replaced independently depending on performance or cost needs.

**Conclusion**
This project successfully demonstrates how different cloud providers can work together seamlessly to build modern web applications. The multi-cloud setup ensures cost-efficiency, high availability, and reduced risk while encouraging flexibility in cloud adoption strategies. Using AWS S3 for frontend hosting and Render for backend APIs offers a perfect beginner-friendly yet powerful example of multi-cloud architecture in action.

**OUTPUT**
![Image](https://github.com/user-attachments/assets/7f6b0f7c-5714-4173-8b1c-7bc09473bf11)
![Image](https://github.com/user-attachments/assets/13d3cf3d-a4f8-42e8-b396-41986c89d25d)
![Image](https://github.com/user-attachments/assets/9c40a5dc-b6b4-4af2-a97e-ec0d90fd466b)
![Image](https://github.com/user-attachments/assets/b9635b71-6eaa-45b6-ae87-b7200d244c70)
![Image](https://github.com/user-attachments/assets/f1ac1e42-9a71-4578-bc66-9c9b94ba9488)
![Image](https://github.com/user-attachments/assets/baff19c9-43c7-48e4-bf51-db90ac18f697)
![Image](https://github.com/user-attachments/assets/e1d24a9d-cfb9-4443-8d28-2553bb008b41)
![Image](https://github.com/user-attachments/assets/8a6e648d-3bad-4e08-a577-ea40af8a37bd)
![Image](https://github.com/user-attachments/assets/fc5156cb-d3da-49f2-ac9d-c15fb6b98e6d)
![Image](https://github.com/user-attachments/assets/653e1c58-b42c-42fd-bda8-a8a3a3b04ab7)
![Image](https://github.com/user-attachments/assets/ff099874-2ecd-4cfc-8415-fb277437831a)


