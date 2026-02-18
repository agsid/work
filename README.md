This README.md is designed to be a professional, high-level overview of the AlliedWork platform. It covers the tech stack, the architecture of the real-time notification system, and the deployment details.
AlliedWork – Command & Control Platform

AlliedWork is a high-performance, real-time collaboration suite designed for teams requiring instant communication and task management. Built with a focus on speed, security, and a "Command Center" aesthetic, the platform integrates real-time chat, task tracking, and browser-level notifications.
🚀 Core Features

    Command Chat: A secure, real-time team channel with instant message synchronization and browser push notifications.

    Intelligent Sidebar: A dynamic, role-aware navigation system that adapts based on user permissions (Owner vs. Member).

    Task Management: Centralized task tracking with automated status updates.

    Real-time Notifications: * In-App Badges: Indigo (Chat) and Rose (Tasks) badges indicate unread activity.

        Browser Alerts: System-level push notifications titled "AlliedWork" for off-tab alerts.

    Role-Based Access: Automatic detection of Team Owners to reveal administrative management tools.

🛠 Tech Stack

    Frontend: HTML5, jQuery, and Tailwind CSS for a modern, glassmorphic UI.

    Backend-as-a-Service: PocketBase (Golang-based) for authentication, database, and real-time subscriptions.

    Real-time Engine: PocketBase WebSockets for "live" data streaming.

    Deployment: Hosted on Koyeb for scalable, containerized performance.

📂 Architecture & File Structure
Plaintext

├── auth/
│   └── login.html        # Secure entry point
├── dash/
│   ├── dashboard.html    # Main landing hub
│   ├── chat.html         # Real-time messaging logic
│   └── tasks.html        # Task tracking interface
├── layout/
│   └── sidebar.html      # Dynamic navigation component
├── team/
│   └── team.html         # Administrative & Team settings
└── assets/               # Global styles and branding

⚙️ Key Logic Implementations
Real-Time Messaging

The chat utilizes the PocketBase SDK to subscribe to the messages collection. It identifies the current teamID to isolate communications.
Ownership Verification

The sidebar performs an authRefresh on every load to "walk" the data relationship:

    User ➔ Team

    Check if user.id === user.expand.team.owner.

    Inject the Manage Team module only if the condition is met.

Browser Notifications

AlliedWork uses the native Web Notifications API. Permission is requested automatically upon entering the Chat interface.
JavaScript

// Title is hardcoded to "AlliedWork" for brand consistency
new Notification("AlliedWork", { body: "New message from the team" });

🛠 Setup & Development

    PocketBase Configuration:

        Ensure a teams collection exists with an owner (relation) field.

        Ensure the users collection has a team (relation) field.

        Set API rules to allow view access for expanded relations.

    Environment:

        The platform requires an HTTPS environment for Browser Notifications to function.

        Update the PocketBase URL in chat.html and sidebar.html to point to your instance.

    Local Testing:

        Use a local live server (e.g., VS Code Live Server) to prevent CORS issues when loading the sidebar.html component.

📝 License

Proprietary. All rights reserved.