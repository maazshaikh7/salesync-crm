### SaleSync CRM –

Where Every Customer Relationship Matters

Submitted in Partial Fulfillment of Requirements
for the Degree of
Bachelor of Computer Applications

By

Maaz Shaikh
Seat No: 31011222063

Guide
Leena Shewale

S.K Somaiya
Somaiya Vidyavihar University
Vidyavihar
2024-25

## Certificate

This is to certify that the project report on dissertation entitled SaleSync CRM is a bonafide record of the dissertation work done by Maaz Shaikh in the year 2024-2025 under the guidance of Leena Shewale, Department of Information Technology and Computer Science in partial fulfillment of requirement for the Bachelor of Computer Applications degree of Somaiya Vidyavihar university.

## Certificate of Approval of Examiners

This is to certify that the project report on dissertation entitled SaleSync CRM is a bonafide record of the dissertation work done by Maaz Shaikh in partial fulfillment of requirement for the Bachelor of Computer Applications degree of Somaiya Vidyavihar University

## DECLARATION

I declare that this written report submission represents the work done based on my and / or others' ideas with adequately cited and referenced the original source. I also declare that I have adhered to all principles of academic honesty and integrity as I have not misinterpreted or fabricated or falsified any idea/data/fact/source/original work/ matter in my submission.

I understand that any violation of the above will be cause for disciplinary action by the college and may evoke the penal action from the sources which have not been properly cited or from whom proper permission is not sought.

## Abstract

**SALESYNC CRM - Where Every Customer Relationship Matters**

In today's competitive business landscape, effective customer relationship management is crucial for sustainable growth and success. SaleSync CRM addresses this need by providing a comprehensive solution for businesses to manage their customer interactions, sales pipelines, and task workflows efficiently.

SaleSync CRM is a modern, intuitive customer relationship management system designed to streamline sales processes and enhance customer engagement. The platform offers a centralized hub for managing contacts, tracking deals through various stages of the sales pipeline, and organizing tasks to ensure timely follow-ups and activities.

At the core of SaleSync is its user-friendly interface that prioritizes accessibility and efficiency. The system features a responsive design that works seamlessly across devices, allowing sales teams to access critical information whether they're in the office or on the go. The dashboard provides at-a-glance insights into key performance metrics, helping teams stay focused on high-priority opportunities.

SaleSync CRM stands out with its comprehensive contact management capabilities, intuitive deal tracking system, and task management features. The platform enables users to store detailed customer information, track interactions, monitor deal progress through customizable pipeline stages, and manage follow-up activities efficiently.

As you navigate through the SaleSync CRM system, you'll discover a powerful yet simple tool designed to enhance productivity, improve customer relationships, and drive sales growth. Whether you're a small business or a growing enterprise, SaleSync provides the tools needed to organize, track, and optimize your sales processes.

Welcome to SaleSync CRM – where every customer relationship matters, and every sale is an opportunity for growth.

**Key words:** CRM, sales management, customer relationships, deal tracking, task management, sales pipeline

## Contents

**List of Figures**

- 3.5 SDLC Model
- 3.6 Gantt Chart
- 4.1 Use Case Diagram
- 4.2 Data Flow Diagram
- 4.3 ER Diagram
- 4.4 Activity Diagram
- 4.5 System Screens
- 5.1 Flowchart

**List of Tables**

- 3.4.1 Client-side Software requirements
- 3.4.2 Client-side Hardware requirements (Laptop or PC)
- 3.4.3 Client-side Hardware requirements (Mobile Phone)
- 3.4.4 Developer-side Software requirements
- 3.4.5 Developer-side Hardware requirements
- 4.3.2 Data Dictionary of ER diagram
- 5.3 Test Cases and Test Results

## Chapter 1: Introduction

### 1.1 Introduction and background of the project

SaleSync CRM is a comprehensive customer relationship management system designed to help businesses efficiently manage their sales processes, customer interactions, and task workflows. The system provides a centralized platform for tracking contacts, deals, and activities, enabling sales teams to stay organized and focused on closing opportunities.

The application offers a modern, intuitive interface that prioritizes user experience, making it easy for sales professionals to navigate and utilize the system effectively. With features like contact management, deal tracking, task organization, and performance analytics, SaleSync CRM provides all the tools necessary for successful sales management.

**Background Study:**

Traditional CRM systems often suffer from complexity, requiring extensive training and adaptation periods. Many existing solutions are either too simplistic, lacking necessary features, or too complex, overwhelming users with options they don't need. Additionally, many CRM systems require constant internet connectivity and database management, creating barriers for businesses with limited technical resources.

SaleSync CRM addresses these challenges by offering a balanced solution that combines comprehensive functionality with ease of use. The system utilizes local storage for data persistence, eliminating the need for complex database setups while still providing robust data management capabilities. The responsive design ensures accessibility across devices, allowing sales teams to stay productive whether they're in the office or on the move.

### 1.2 Objectives of project and problem statement

**1.2.1 Problem Statement:**

Sales teams often struggle with disorganized customer data, inconsistent follow-up processes, and limited visibility into their sales pipeline. Traditional methods like spreadsheets or paper-based systems become increasingly inefficient as businesses grow, leading to missed opportunities, lost information, and reduced productivity. Existing CRM solutions frequently require complex setup, constant internet connectivity, and significant technical resources, creating barriers for adoption.

SaleSync CRM addresses these challenges by providing an intuitive, comprehensive solution that works offline and requires minimal technical setup.

**1.2.2 Objectives of the project:**

The SaleSync CRM system will serve the following objectives:

- **Contact Management:** Enable users to store and organize detailed customer information, including contact details, company information, and interaction history.
- **Deal Tracking:** Provide a visual pipeline for tracking sales opportunities through various stages, from lead generation to closed deals.
- **Task Management:** Allow users to create, assign, and monitor tasks related to customer follow-ups and sales activities.
- **Performance Analytics:** Offer dashboard visualizations and reports to help teams understand their sales performance and identify areas for improvement.
- **User-Friendly Interface:** Deliver an intuitive, responsive design that works across devices and requires minimal training to use effectively.
- **Offline Functionality:** Utilize local storage for data persistence, enabling the system to function without constant internet connectivity or complex database setups.

### 1.3 Scope, Advantages, and applicability of project

**1.3.1 Scope:**

The scope of SaleSync CRM encompasses the design and development of a comprehensive customer relationship management system that enables businesses to effectively manage their sales processes. The system includes modules for contact management, deal tracking, task organization, and performance analytics, all integrated within a cohesive, user-friendly interface.

Key components within the scope include:

- A responsive dashboard providing at-a-glance performance metrics
- Comprehensive contact management with detailed customer profiles
- Visual sales pipeline for tracking deals through various stages
- Task management system for organizing follow-up activities
- Data visualization tools for analyzing sales performance
- Local storage implementation for data persistence without complex database requirements

**1.3.2 Advantages:**

- **Centralized Information:** All customer data, deal details, and task information are stored in one accessible location.
- **Improved Organization:** Structured approach to managing contacts, deals, and tasks reduces information loss and improves follow-up consistency.
- **Enhanced Visibility:** Visual pipeline and dashboard analytics provide clear insights into sales performance and opportunities.
- **Increased Productivity:** Streamlined workflows and organized information help sales teams focus on high-value activities.
- **Simplified Adoption:** Intuitive interface reduces training requirements and encourages system usage.
- **Technical Accessibility:** Local storage implementation eliminates the need for complex database setups or constant internet connectivity.
- **Cross-Device Compatibility:** Responsive design ensures the system works effectively across desktop and mobile devices.

**1.3.3 Applicability of project:**

SaleSync CRM is applicable across various business contexts:

- **Small to Medium Businesses:** Provides an accessible CRM solution without the technical complexity or cost of enterprise systems.
- **Sales Teams:** Offers tools specifically designed for managing customer relationships and sales pipelines.
- **Service Businesses:** Helps service providers track client interactions and follow-up activities.
- **Startups:** Provides a lightweight yet comprehensive solution for managing early customer relationships.
- **Remote Teams:** Enables distributed sales teams to maintain consistent processes and shared customer information.
- **Resource-Limited Organizations:** Offers CRM functionality without requiring significant technical infrastructure or expertise.

## Chapter 2: Survey of technologies

### 2.1 Existing technologies

**2.1.1 Frontend Technologies:**

- **HTML/CSS/JavaScript:** These are the building blocks of web development, used for creating the structure, styling, and interactivity of web pages.
- **React.js or Vue.js:** Popular frontend frameworks for building dynamic and interactive user interfaces.
- **Bootstrap or Material UI:** Frontend frameworks for responsive web design, providing pre-built UI components and layouts.

**2.1.2 Backend Development:**

- **Node.js and Express.js:** Server-side JavaScript runtime environment and framework for building scalable web applications and APIs.
- **MongoDB or MySQL:** Databases for storing customer information, sales data, and user activities.

**2.1.3 State Management:**

- **Redux or Context API:** Libraries and patterns for managing application state in complex applications.
- **localStorage/sessionStorage:** Browser-based storage mechanisms for persisting data without a backend database.

### 2.2 Technologies implemented for the project

**2.2.1 Frontend Technologies:**

- **HTML/CSS/JavaScript:** Core web technologies used for structure, styling, and functionality.
- **React.js:** Component-based JavaScript library for building the user interface, enabling reusable UI components and efficient rendering.
- **Tailwind CSS:** Utility-first CSS framework for creating custom designs without leaving HTML.
- **shadcn/ui:** Component library built on Radix UI primitives, providing accessible and customizable UI components.

**2.2.2 Application Architecture:**

- **Next.js:** React framework providing server-side rendering, routing, and development features.
- **React Context API:** Used for state management across components without prop drilling.

**2.2.3 Data Persistence:**

- **localStorage:** Browser-based storage mechanism for persisting application data without requiring a backend database.
- **UUID:** Library for generating unique identifiers for contacts, deals, and tasks.

**2.2.4 Visualization:**

- **Recharts:** Composable charting library built on React components for creating dashboard visualizations.

**2.2.5 Development Tools:**

- **TypeScript:** JavaScript superset adding static types for improved code quality and developer experience.
- **ESLint:** Tool for identifying and fixing problems in JavaScript code.
- **Prettier:** Code formatter ensuring consistent code style.

## Chapter 3: Requirement and Analysis

### 3.1 Problem statement

In today's competitive business environment, effective customer relationship management is essential for sustainable growth and success. However, many businesses struggle with disorganized customer data, inconsistent follow-up processes, and limited visibility into their sales pipeline. Traditional methods like spreadsheets or paper-based systems become increasingly inefficient as businesses grow, leading to missed opportunities, lost information, and reduced productivity.

Existing CRM solutions often present their own challenges. Many require complex setup processes, constant internet connectivity, and significant technical resources, creating barriers for adoption, particularly among small to medium-sized businesses. Additionally, these systems frequently offer either too few features, limiting their utility, or too many features, overwhelming users with options they don't need.

SaleSync CRM addresses these challenges by providing a balanced solution that combines comprehensive functionality with ease of use. The system offers robust contact management, deal tracking, and task organization features within an intuitive interface that prioritizes user experience. By utilizing local storage for data persistence, SaleSync eliminates the need for complex database setups while still providing effective data management capabilities.

The goal of SaleSync CRM is to empower sales teams with the tools they need to effectively manage customer relationships, track sales opportunities, and organize follow-up activities, all within a system that is accessible, intuitive, and adaptable to various business contexts.

### 3.2 Feasibility Study

**3.2.1 Technical Feasibility**

- The project utilizes established web technologies (React, Next.js, Tailwind CSS) with strong community support and documentation.
- Local storage implementation eliminates the need for complex database setup while providing sufficient data persistence for the intended use cases.
- The responsive design approach ensures compatibility across devices without requiring separate codebases for different platforms.
- Development team has the necessary skills and experience with the selected technologies.

**3.2.2 Operational Feasibility**

- The system's intuitive interface minimizes training requirements, facilitating adoption by users with varying technical proficiency.
- Local storage implementation enables offline functionality, allowing the system to operate in environments with limited internet connectivity.
- The modular architecture supports future enhancements and adaptations based on user feedback and evolving requirements.

**3.2.3 Economic Feasibility**

- Development costs are minimized by utilizing open-source technologies and frameworks.
- The elimination of backend database requirements reduces hosting and maintenance costs.
- The system's focus on essential CRM functionality without unnecessary features optimizes development resources.
- The potential productivity improvements and enhanced sales performance provide significant return on investment potential.

**3.2.4 Schedule Feasibility**

- The project timeline is realistic given the scope and available resources.
- The incremental development approach allows for progressive delivery of functionality, with core features prioritized for early implementation.
- Potential risks and challenges have been identified and accounted for in the project schedule.

### 3.3 Software Requirement Specification

#### 3.3.1 Functional Requirements

**3.3.1.A User Interface and Navigation**

- The system shall provide a responsive dashboard displaying key performance metrics and recent activities.
- The system shall include a navigation menu for accessing different modules (contacts, deals, tasks, settings).
- The system shall support responsive design, adapting to different screen sizes and devices.

**3.3.1.B Contact Management**

- The system shall allow users to create, view, edit, and delete contact records.
- Contact records shall include fields for name, email, phone, company, job title, address, and notes.
- The system shall provide search and filtering capabilities for locating specific contacts.
- The system shall display related deals and activities for each contact.

**3.3.1.C Deal Management**

- The system shall allow users to create, view, edit, and delete deal records.
- Deal records shall include fields for name, value, stage, associated contact, expected close date, and notes.
- The system shall provide a visual pipeline view for tracking deals through different stages.
- The system shall calculate and display deal statistics (total value, stage distribution, etc.).

**3.3.1.D Task Management**

- The system shall allow users to create, view, edit, and delete task records.
- Task records shall include fields for title, status, due date, associated contact/deal, and description.
- The system shall provide filtering options for viewing tasks by status, due date, or association.
- The system shall support marking tasks as complete and tracking completion status.

**3.3.1.E Dashboard and Analytics**

- The system shall provide a dashboard displaying key performance indicators (KPIs).
- The dashboard shall include visualizations for deal pipeline, recent activities, and top deals.
- The system shall calculate and display metrics such as total contacts, total revenue, active deals, and completed tasks.

**3.3.1.F Data Persistence**

- The system shall store all data (contacts, deals, tasks, settings) in the browser's localStorage.
- The system shall automatically save changes to localStorage when data is modified.
- The system shall load data from localStorage when the application starts.
- The system shall provide sample data for new users to demonstrate functionality.

#### 3.3.2 Non-Functional Requirements

**3.3.2.A Performance Requirements**

- The system shall load the dashboard within 3 seconds on standard hardware.
- The system shall respond to user interactions (clicks, form submissions) within 1 second.
- The system shall support efficient handling of at least 1000 contacts, 500 deals, and 1000 tasks without performance degradation.

**3.3.2.B Usability Requirements**

- The user interface shall be intuitive and require minimal training for basic operations.
- The system shall provide clear feedback for user actions (success messages, error notifications).
- The system shall use consistent design patterns and terminology throughout the interface.
- The system shall support keyboard navigation for improved accessibility.

**3.3.2.C Reliability Requirements**

- The system shall prevent data loss by automatically saving changes to localStorage.
- The system shall validate user inputs to prevent invalid data entry.
- The system shall handle errors gracefully, providing clear error messages when problems occur.

**3.3.2.D Compatibility Requirements**

- The system shall function correctly on modern web browsers (Chrome, Firefox, Safari, Edge).
- The system shall be responsive and usable on devices with screen widths from 320px to 1920px.
- The system shall support touch interactions for mobile and tablet users.

**3.3.2.E Security Requirements**

- The system shall store sensitive data in localStorage using appropriate encoding.
- The system shall implement proper input validation to prevent injection attacks.
- The system shall not expose sensitive information in URLs or error messages.

### 3.4 System Software and Hardware Requirements

#### 3.4.1 Client-side Software requirements

| Sr. No | Name                | Specification                                          |
| ------ | ------------------- | ------------------------------------------------------ |
| i.     | Browser             | Any of Chrome, Firefox, Safari, Edge (latest versions) |
| ii.    | Operating System    | Windows 10/11, macOS, Linux, Android, iOS              |
| iii.   | Framework           | React, Next.js                                         |
| iv.    | Web Technologies    | HTML5, CSS3, JavaScript (ES6+)                         |
| v.     | Internet Connection | Required for initial loading, optional for operation   |

#### 3.4.2 Client-side Hardware requirements (Laptop or PC)

| Sr. No | Name          | Specification                           |
| ------ | ------------- | --------------------------------------- |
| i.     | Processor     | Intel Core i3 (or equivalent) or better |
| ii.    | RAM           | 4GB or higher                           |
| iii.   | Storage       | 1GB free space                          |
| iv.    | Display       | 1280x720 resolution or higher           |
| v.     | Input Devices | Keyboard and mouse/touchpad             |

#### 3.4.3 Client-side Hardware requirements (Mobile Phone)

| Sr. No | Name      | Specification                               |
| ------ | --------- | ------------------------------------------- |
| i.     | Processor | Modern smartphone processor (2017 or newer) |
| ii.    | RAM       | 2GB or higher                               |
| iii.   | Storage   | 500MB free space                            |
| iv.    | Display   | 320px width minimum                         |
| v.     | Internet  | 3G/4G/5G or Wi-Fi                           |

#### 3.4.4 Developer-side Software requirements

| Sr. No | Name             | Specification                            |
| ------ | ---------------- | ---------------------------------------- |
| i.     | Code Editor      | Visual Studio Code, WebStorm, or similar |
| ii.    | Version Control  | Git                                      |
| iii.   | Node.js          | v16.0 or higher                          |
| iv.    | Package Manager  | npm or yarn                              |
| v.     | Browser          | Chrome, Firefox with developer tools     |
| vi.    | Operating System | Windows 10/11, macOS, Linux              |

#### 3.4.5 Developer-side Hardware requirements

| Sr. No | Name          | Specification                           |
| ------ | ------------- | --------------------------------------- |
| i.     | Processor     | Intel Core i5 (or equivalent) or better |
| ii.    | RAM           | 8GB or higher                           |
| iii.   | Storage       | 10GB free space                         |
| iv.    | Display       | 1920x1080 resolution or higher          |
| v.     | Input Devices | Keyboard and mouse                      |

### 3.5 Software Development Life Cycle (SDLC) Model

**Incremental Model**

The SDLC Model that suits SaleSync CRM is the Incremental Model. In this approach, the software development process is divided into several increments, with each increment following the same development phases. This model allows for the development of complex projects in multiple modules or builds, which is ideal for SaleSync CRM where continuous updates and feature additions are expected.

**3.5.1 Diagram of how incremental model works**

[SDLC Model Diagram]

**3.5.2 Advantages of Incremental Model**

- Important modules/functions are developed first and then the rest are added in chunks.
- This model is flexible and less expensive to change requirements and scope.
- The customer can respond to each module and provides feedback.
- Project progress can be measured.
- It is easier to test and debug, errors are easily identified.

**3.5.3 Disadvantages of Incremental Model**

- Management is a continuous activity that must be handled.
- The complete requirements of the software should be clear.
- This requires good planning and designing.
- The total cost of this model is higher.

### 3.6 Project Scheduling

[Gantt Chart]

## Chapter 4: System Designs

### 4.1 Use Case Diagram

**4.1.1 Login use-case**

[Login Use Case Diagram]

The above diagram shows how the user and system interact when a user tries to login into the system.

**4.1.2 CRM functionality use-case**

[CRM Functionality Use Case Diagram]

The above diagram shows how the user can interact with the system and which actions the user can perform within the CRM.

### 4.2 Data Flow Diagram

**4.2.1 The basic data flow diagram**

[Data Flow Diagram]

The above diagram represents how data flows throughout the project. In the data flow, there are three main data stores:

- Contact Data Store
- Deal Data Store
- Task Data Store

The user can perform various operations like adding contacts, managing deals, and organizing tasks, with data flowing between the user interface and the appropriate data stores.

### 4.3 ER Diagram

**4.3.1 ER diagram of the system**

[ER Diagram]

**4.3.2 Data Dictionary of ER diagram**

| Data_item           | Data_type | Size | Description                              |
| ------------------- | --------- | ---- | ---------------------------------------- |
| contact_id          | string    | 36   | Unique identifier for contacts           |
| name                | string    | 100  | Full name of the contact                 |
| email               | string    | 100  | Email address of the contact             |
| phone               | string    | 20   | Phone number of the contact              |
| company             | string    | 100  | Company name associated with the contact |
| job_title           | string    | 100  | Job title of the contact                 |
| address             | string    | 255  | Physical address of the contact          |
| notes               | string    | 1000 | Additional notes about the contact       |
| created_at          | string    | 24   | Timestamp when the contact was created   |
| deal_id             | string    | 36   | Unique identifier for deals              |
| deal_name           | string    | 100  | Name of the deal                         |
| value               | number    | 8    | Monetary value of the deal               |
| stage               | string    | 50   | Current stage in the sales pipeline      |
| expected_close_date | string    | 24   | Expected date for closing the deal       |
| deal_notes          | string    | 1000 | Additional notes about the deal          |
| task_id             | string    | 36   | Unique identifier for tasks              |
| title               | string    | 100  | Title of the task                        |
| status              | string    | 20   | Current status of the task               |
| due_date            | string    | 24   | Due date for the task                    |
| description         | string    | 1000 | Detailed description of the task         |
| settings_id         | string    | 36   | Unique identifier for settings           |
| company_name        | string    | 100  | Company name for the CRM                 |
| email_notifications | boolean   | 1    | Whether email notifications are enabled  |
| dark_mode           | boolean   | 1    | Whether dark mode is enabled             |

### 4.4 Activity Diagram

**4.4.1 Activity diagram for the project**

[Activity Diagram]

### 4.5 Project System Screens

**4.5.1 Dashboard Page**

[Dashboard Page Screenshot]

**4.5.2 Contacts Page**

[Contacts Page Screenshot]

**4.5.3 Deals Page**

[Deals Page Screenshot]

**4.5.4 Tasks Page**

[Tasks Page Screenshot]

**4.5.5 Settings Page**

[Settings Page Screenshot]

## Chapter 5: Implementation and Testing

### 5.1 Algorithms and Flowcharts along with major modules of the project

**5.1.1 Algorithms**

**5.1.1.1 Search and Filter Algorithm:**
The system implements efficient search and filter algorithms to help users quickly find specific contacts, deals, or tasks based on various criteria such as name, email, stage, or status.

**5.1.1.2 Sorting Algorithm:**
Sorting algorithms are used to organize and display data in meaningful ways, such as sorting deals by value, contacts alphabetically, or tasks by due date.

**5.1.1.3 Data Persistence Algorithm:**
The system implements algorithms for efficiently storing and retrieving data from localStorage, including serialization and deserialization of complex data structures.

**5.1.1.4 Dashboard Metrics Calculation:**
Algorithms for calculating various metrics displayed on the dashboard, such as total revenue, deal stage distribution, and task completion rates.

**5.1.2 Flowcharts**

[Flowchart Diagram]

**5.1.3 Major modules of the project**

The SaleSync CRM consists of 5 main modules:

**5.1.3.1 Dashboard Module**
This module provides an overview of the CRM system, displaying key performance indicators, recent activities, and visualizations of sales data. It includes components for displaying statistics, a sales funnel chart, top deals, and recent activities.

**5.1.3.2 Contacts Module**
This module manages customer information, allowing users to create, view, edit, and delete contact records. It includes components for displaying a list of contacts, contact details, related deals and activities, and forms for adding or editing contact information.

**5.1.3.3 Deals Module**
This module tracks sales opportunities through various stages of the sales pipeline. It includes components for displaying a list of deals, deal details, stage information, and forms for adding or editing deal information.

**5.1.3.4 Tasks Module**
This module organizes follow-up activities and to-do items related to contacts and deals. It includes components for displaying a list of tasks, task details, status information, and forms for adding or editing task information.

**5.1.3.5 Settings Module**
This module allows users to configure system preferences and manage their profile information. It includes components for updating user information, setting display preferences, and managing notification settings.

### 5.2 Testing Approaches

Software testing is a systematic process of evaluating software applications or systems to ensure that they meet specified requirements and function correctly. It involves verifying that the software behaves as expected, identifying defects or errors, and assessing its quality and reliability.

The primary objectives of software testing include:

- **Validation:** Ensuring that the software meets the user's requirements and performs the intended functions.
- **Verification:** Confirming that the software adheres to its specifications and standards.
- **Error Detection:** Identifying defects, bugs, or vulnerabilities in the software that may affect its performance or usability.
- **Quality Assurance:** Evaluating the overall quality and reliability of the software to ensure it meets quality standards.

Various Testing methods applicable on SaleSync CRM are:

- **Unit Testing:** Testing individual components, functions, and modules in isolation to verify that they work as expected. Using testing frameworks like Jest and tools like React Testing Library for testing React components.
- **Integration Testing:** Testing the interaction between different components, modules, and services within the system. Verifying that components integrate correctly and communicate as expected.
- **End-to-End (E2E) Testing:** Testing the entire application from end to end to ensure that all components and features work together seamlessly.
- **Regression Testing:** Regularly running regression tests to ensure that recent changes or updates have not introduced new bugs or regressions.
- **Performance Testing:** Testing the performance of the application under various conditions, including different levels of data volume and user interactions.
- **Usability Testing:** Gathering feedback from real users through usability testing to evaluate the user experience and identify areas for improvement.
- **Cross-Browser Testing:** Testing the application across different web browsers and devices to ensure compatibility and consistent behavior.

### 5.3 Test Cases and Test Results

| Test Case ID | Description                                 | Expected Result                             |
| ------------ | ------------------------------------------- | ------------------------------------------- |
| TC_01        | Validation of contact name with valid input | Pass                                        |
| TC_02        | Validation of contact name with blank input | Fail (Error message "Name is required")     |
| TC_03        | Validation of email with invalid format     | Fail (Error message "Invalid email format") |
| TC_04        | Validation of email with valid format       | Pass                                        |
| TC_05        | Adding a new contact with valid information | Pass (Contact added successfully)           |
| TC_06        | Editing an existing contact                 | Pass (Contact updated successfully)         |
| TC_07        | Deleting a contact                          | Pass (Contact deleted successfully)         |
| TC_08        | Adding a new deal with valid information    | Pass (Deal added successfully)              |
| TC_09        | Moving a deal to a different stage          | Pass (Deal stage updated successfully)      |
| TC_10        | Adding a task with valid information        | Pass (Task added successfully)              |
| TC_11        | Marking a task as complete                  | Pass (Task status updated successfully)     |
| TC_12        | Dashboard displays correct statistics       | Pass (Statistics match expected values)     |

## Chapter 6: Results and Discussion

**TC_01 Validation of contact name with valid input**

- **Discussion:** This test case verifies whether the Name field accepts valid input. Valid input in this case is a typical name format, such as "John Smith".
- **Result:** The test case passes if the Name field accepts the input without displaying any error messages.

**TC_02 Validation of contact name with blank input**

- **Discussion:** This test case checks if the name field handles empty input appropriately by displaying an error message.
- **Result:** The test case fails if the Name field allows submission with empty input and does not display an error message.

**TC_03 Validation of email with invalid format**

- **Discussion:** This test case checks if the Email field rejects improperly formatted email addresses.
- **Result:** The test case fails if the Email field accepts invalid email formats and does not display an error message.

**TC_04 Validation of email with valid format**

- **Discussion:** This test case validates whether the Email field accepts properly formatted email addresses.
- **Result:** The test case passes if the Email field accepts valid email addresses without any errors.

**TC_05 Adding a new contact with valid information**

- **Discussion:** This test case verifies the functionality of adding a new contact with all required fields filled correctly.
- **Result:** The test case passes if the system successfully adds the contact and displays a confirmation message.

**TC_06 Editing an existing contact**

- **Discussion:** This test case checks the functionality of editing an existing contact's information.
- **Result:** The test case passes if the system successfully updates the contact information and displays a confirmation message.

**TC_07 Deleting a contact**

- **Discussion:** This test case verifies the functionality of deleting an existing contact.
- **Result:** The test case passes if the system successfully removes the contact and displays a confirmation message.

**TC_08 Adding a new deal with valid information**

- **Discussion:** This test case checks the functionality of adding a new deal with all required fields filled correctly.
- **Result:** The test case passes if the system successfully adds the deal and displays a confirmation message.

**TC_09 Moving a deal to a different stage**

- **Discussion:** This test case verifies the functionality of updating a deal's stage in the sales pipeline.
- **Result:** The test case passes if the system successfully updates the deal's stage and reflects the change in the pipeline view.

**TC_10 Adding a task with valid information**

- **Discussion:** This test case checks the functionality of adding a new task with all required fields filled correctly.
- **Result:** The test case passes if the system successfully adds the task and displays a confirmation message.

**TC_11 Marking a task as complete**

- **Discussion:** This test case verifies the functionality of updating a task's status to "Completed".
- **Result:** The test case passes if the system successfully updates the task's status and reflects the change in the task list.

**TC_12 Dashboard displays correct statistics**

- **Discussion:** This test case checks if the dashboard accurately displays statistics based on the current data.
- **Result:** The test case passes if the dashboard statistics (total contacts, total revenue, active deals, completed tasks) match the expected values calculated from the data.

## Chapter 7: Conclusion and future work

### 7.1 Conclusion

In conclusion, the development of the SaleSync CRM system represents a significant achievement in creating an accessible, user-friendly solution for customer relationship management. Throughout the project, we have successfully addressed various challenges and achieved several key objectives.

The system provides users with comprehensive tools for managing contacts, tracking deals through a visual pipeline, and organizing follow-up activities. The intuitive interface and thoughtful design make the system accessible to users with varying levels of technical expertise, while the use of local storage for data persistence eliminates the need for complex database setups.

We have prioritized usability and user experience in the design of the platform, ensuring that the interface is intuitive, easy to navigate, and accessible to users with varying levels of technical expertise.

We have implemented robust data management capabilities using localStorage, providing reliable data persistence without the complexity of traditional database systems. This approach not only simplifies the technical architecture but also enables offline functionality, allowing users to continue working even without constant internet connectivity.

The dashboard provides valuable insights through visualizations and key performance indicators, helping users understand their sales performance and identify opportunities for improvement. The contact management, deal tracking, and task organization features work together seamlessly to create a cohesive system that supports effective customer relationship management.

By focusing on essential CRM functionality without unnecessary complexity, we have created a solution that balances comprehensiveness with usability, making it suitable for a wide range of business contexts, from small startups to established sales teams.

### 7.2 Future Work

Several enhancements and extensions could further improve the SaleSync CRM system in future iterations:

**Data Import/Export Functionality:** Adding capabilities for importing contacts from CSV files or exporting data for backup or analysis purposes would enhance data management flexibility.

**Advanced Reporting:** Expanding the analytics capabilities with more detailed reports and customizable dashboards would provide deeper insights into sales performance and trends.

**Email Integration:** Implementing email integration to track communication history with contacts directly within the CRM would create a more comprehensive view of customer interactions.

**Mobile Application:** Developing a dedicated mobile application would further enhance accessibility for users who primarily work from mobile devices.

**Cloud Synchronization:** Adding optional cloud synchronization would allow teams to share data across multiple devices while maintaining the system's ability to function offline.

**Automation Features:** Implementing workflow automation for routine tasks such as follow-up reminders or deal stage progression based on specific triggers would improve efficiency.

**Calendar Integration:** Adding calendar integration for scheduling and managing appointments related to contacts and deals would enhance the system's utility for time management.

These future enhancements would build upon the solid foundation established in the current version of SaleSync CRM, further increasing its value as a comprehensive customer relationship management solution.

## References

There are various references used for building this CRM system:

[https://react.dev/](https://react.dev/)
[https://nextjs.org/docs](https://nextjs.org/docs)
[https://tailwindcss.com/docs](https://tailwindcss.com/docs)
[https://ui.shadcn.com/](https://ui.shadcn.com/)
[https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
[https://recharts.org/en-US/](https://recharts.org/en-US/)

There are various CRM systems used as a reference for building this application:

[https://www.salesforce.com/](https://www.salesforce.com/)
[https://www.hubspot.com/](https://www.hubspot.com/)
[https://www.zoho.com/crm/](https://www.zoho.com/crm/)
[https://www.pipedrive.com/](https://www.pipedrive.com/)
[https://www.freshworks.com/crm/](https://www.freshworks.com/crm/)
