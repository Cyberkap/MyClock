# TimeKeeper AWS

## Project Description:

I led the development and deployment of the "Highly Available Clock Service" on Amazon Web Services (AWS), drawing valuable insights from Stéphane Maarek's tutorials. This project delivers a reliable and scalable time and date information solution accessible via a simple button click.

## Project Duration: 
  2 Hours

## Key Achievements:

### **1. EC2 Instance Deployment & Install Web server:**
   Successfully provisioned EC2 instances on AWS and securely uploaded the code files using .pem key authentication.
   
1. SSH into your EC2 instance.
   
       ssh -i /path/key-pair-name.pem instance-user-name@instance-public-ip

2. Elevate your privileges with **sudo su**
   
3. Install a webserver **yum install httpd -y**
 
4. Start the webserver **service httpd start**

5. Configure the web server to restart if it gets stopped **chkconfig httpd on**
   
6. Move your necessary code files to **/var/www/html path**
   
       scp -i /path/key-pair-name.pem /path/my-file.html ec2-user@instance-public-dns-name:path/


### 2. AMI Creation: 
  Designed an efficient Amazon Machine Image (AMI) to expedite the launch of new instances with identical configurations.

### 3. Auto Scaling Group (ASG): 
  Implemented an Auto Scaling Group to ensure the project maintains optimal capacity. The ASG dynamically adjusts the number of instances, scaling between 2 and 5 based on traffic and demand.
  
### 4. Multi-Availability Zone (Multi-AZ) Deployment: 
  Ensured high availability and disaster recovery by distributing EC2 instances across three different Availability Zones (AZs).
  
### 5. Load Balancing: 
  Integrated an Application Load Balancer (ALB) with health checks, guaranteeing that traffic is only directed to healthy instances for uninterrupted service.

### 6. CloudWatch Alarms: 
  Configured proactive resource management with CloudWatch alarms, triggering when CPU utilization exceeds 50%, enabling swift resource optimization.
### 7. Route 53 Integration: 
  Made the project accessible through the custom domain myclock.click, hosted on AWS Route 53. Alias records were configured to direct traffic to the ALB, offering a user-friendly and highly available web service. Use .click TLD for a cheaper cost.
  
  **Note: I have de-registered my domain!**

## Results:
The "Highly Available Clock Service" now provides users with accurate time, date, and day information at the click of a button. This AWS-based solution ensures uninterrupted service availability, scalability, and efficient resource management, making it a reliable resource for time-related information.
