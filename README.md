DevOps Portfolio: React + AWS EC2 + Nginx

A high-performance landing page deployed on a cloud-based infrastructure. This project demonstrates a full deployment lifecycle, from local React development to hosting on a hardened Linux environment.

🚀 Live Demo
Public IP: http://35.182.4.208
Note: This is a live environment hosted on an AWS EC2 instance.

🛠️ Tech Stack & Skills
* Frontend: React.js, Lucide-React icons, CSS3 (Glassmorphism & CSS Animations).
* Web Server: Nginx (Reverse Proxy & Static File Hosting).
* Cloud: AWS EC2 (Ubuntu 22.04 LTS).
* DevOps: Linux CLI, SSH, SCP, Systemd, Filesystem Hierarchy Standard (FHS).
  
📋 Features
* Responsive UI: Modern, mobile-first design with a "glassmorphism" aesthetic.
* Production Build: Optimized React production bundle for minimal load times.
* SPA Routing: Custom Nginx server blocks to handle Single Page Application (SPA) routing and prevent 404 errors on refresh.
* Linux Hardening: Managed system-level permissions and ownership via chown and chmod.

  
⚙️ Deployment Workflow
This project followed a rigorous deployment pipeline:
1. Local Build: Compiled the React application into static assets using npm run build.
2. Infrastructure Setup: Provisioned an AWS EC2 instance and configured Inbound Security Group Rules (Port 80 for HTTP).
3. Environment Prep: Configured the Linux Filesystem by modifying /var/www/html ownership to the ubuntu user for secure file transfer.
4. Data Transfer: Synchronized the build directory to the cloud server via SCP.
5. Nginx Configuration: Modified /etc/nginx/sites-available/default to implement try_files logic for React Router support.
Nginx

# Nginx Configuration snippet used:
location / {
    root /var/www/html;
    index index.html;
    try_files $uri $uri/ /index.html;
}

🧠 Lessons Learned
* Navigating the Linux File Hierarchy to properly place and serve web assets.
* Debugging Nginx Status and logs via systemctl and journalctl.
* Resolving Permission Denied errors by understanding user/group ownership in a Unix environment.

👨‍💻 Author
 Emmanuel Adekiitan Cloud Network Infrastructure and DevOps Engineer www.linkedin.com/in/emmanuel-adekiitan-0b0460183 | [GitHub](https://github.com/emmanuel-adekiitan/DevOps_Portfolio/edit/main/README.md)

