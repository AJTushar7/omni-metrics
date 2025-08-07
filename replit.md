# Overview

This is a full-stack campaign management and analytics dashboard application with dual frontend implementations. The project includes both a React version (in `/client`) and a newly migrated Angular version (in `/angular-client`), sharing the same Express.js backend. The application is designed for managing multi-channel marketing campaigns (WhatsApp, SMS, Email, RCS, Push notifications) with comprehensive analytics, real-time monitoring, and optimization features. It includes features like campaign orchestration, BSP (Business Service Provider) comparisons, cost optimization recommendations, and customer engagement tracking.

## Recent Migration: React to Angular
**Completed:** January 8, 2025
The entire React dashboard has been successfully migrated to Angular while maintaining identical UI and functionality. The Angular version includes all 11 major dashboard components converted from React equivalents with full feature parity.

# User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Colorful, interactive dashboard with modern UI elements inspired by top tools like Adobe, Qlik, Salesforce, Google Looker.
Dashboard layout: Compact sections with optimization insights, interactive charts, and consolidated information panels.

# System Architecture

## Frontend Architecture

### React Version (/client)
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Comprehensive component system using shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with a custom design system supporting light/dark themes
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation schemas

### Angular Version (/angular-client)
- **Framework**: Angular 20 with TypeScript and standalone components
- **UI Library**: Angular Material with custom Tailwind CSS styling system
- **Styling**: Tailwind CSS with HSL color variables and dark/light theme support
- **State Management**: Angular Services with RxJS for reactive data management
- **Routing**: Angular Router for navigation (when needed)
- **Form Handling**: Angular Reactive Forms with validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API structure with `/api` prefix routing
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Development Setup**: Hot reload with Vite middleware integration for seamless full-stack development

## Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **ORM**: Drizzle with schema-first approach and type-safe queries
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL connection
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Authentication and Authorization
- **Current State**: Basic user schema with username/password authentication ready for implementation
- **Schema**: User table with unique username constraints and password storage
- **Session Management**: connect-pg-simple configured for PostgreSQL session storage
- **Validation**: Zod schemas for type-safe user input validation

## External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI for accessible, unstyled components
- **Charts/Visualizations**: Recharts for data visualization and analytics dashboards
- **Date Utilities**: date-fns for date manipulation and date-holidays for regional holiday detection
- **Development Tools**: Replit-specific plugins for development environment integration
- **Session Storage**: PostgreSQL-based session management for scalable authentication
- **Build Tools**: esbuild for server bundling and Vite for client-side development

The architecture follows a clean separation of concerns with shared TypeScript schemas between client and server, enabling type safety across the full stack. The application is designed for scalability with proper database integration while maintaining development flexibility through abstracted storage interfaces.