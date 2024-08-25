# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Text to send

JSON format: "{ \"epic_ticket\": { \"title\": \"String\", \"description\": \"String\", \"tickets\": [ { \"title\": \"String\", \"description\": \"String\", \"potential_solutions\": [ \"String\", \"String\", \"String\" ], \"time_required_hours\": \"Number\" }, { \"title\": \"String\", \"description\": \"String\", \"potential_solutions\": [ \"String\", \"String\", \"String\" ], \"time_required_hours\": \"Number\" }, { \"title\": \"String\", \"description\": \"String\", \"potential_solutions\": [ \"String\", \"String\", \"String\" ], \"time_required_hours\": \"Number\" }, { \"title\": \"String\", \"description\": \"String\", \"potential_solutions\": [ \"String\", \"String\", \"String\" ], \"time_required_hours\": \"Number\" } ] } }"


### Prompts to send

Subject: Urgent Request: Update Website for New Product Launch Email 1: From Client (John Doe) To: Project Manager CC: Design Team, Development Team Date: August 25, 2024 Time: 9:15 AM Hi [Project Manager], I hope you're doing well. We have an urgent request from the marketing team that needs to be addressed as soon as possible. We're launching a new product next week, and we need to make several updates to the website in preparation. Here’s a list of tasks that need to be completed: Homepage Banner Update: Replace the current banner with the new product launch banner (design attached). Product Page Creation: Create a new product page for the "X200 Series" with the specifications and images provided by the design team. SEO Optimization: Ensure the new product page is optimized for search engines with the keywords provided. Newsletter Signup: Add a new signup form on the homepage for the upcoming newsletter related to the new product. We’re aiming to have these changes live by end of day Friday, August 29th. Could you confirm that this timeline is feasible? Please coordinate with the design and development teams to get these changes implemented. If there are any concerns or if more resources are needed, let me know as soon as possible. Best regards, John Doe Marketing Manager, ABC Corp.

This document outlines the specific business requirements for the [Project Name], focusing on the key objectives of [brief project objective], with a scope that includes [key areas covered]. The project requires a robust UI design, seamless backend integration, and must meet defined performance metrics, security standards, and compliance regulations. The technology stack will include [tech stack details] and must integrate with [system integrations], with deployment handled on [deployment platform]. User roles and permissions, as well as usability, are crucial, with reports and analytics playing a significant role in the project's success. The timeline is structured around key phases, with acceptance criteria based on [conditions for project completion], while considering constraints such as [budget/time constraints] and dependencies like [key dependencies].

Default:
Based on this description, create one epic ticket with a title, then give several tickets under it, each ticket should have title description, potential solutions, time required to complete. Please give data in JSON format.

