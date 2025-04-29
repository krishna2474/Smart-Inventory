# Smart Inventory Automation

A full-stack AI-powered inventory management system that automates invoice processing, stock tracking, and supplier management.

## Features

- **Invoice OCR with Gemini API**: Upload invoices and extract data automatically using Google Gemini's OCR + AI.
- **Stock Monitoring**: Real-time inventory tracking with low-stock alerts.
- **Custom Roles & Permissions**: Admin, Manager, and Staff roles with tailored access controls.
- **Payment Tracking**: Link payments to invoices and suppliers with due date monitoring.
- **Category-wise Dashboard**: Interactive graphs with hover-enabled product insights.
- **Secure & Scalable**: Built on the PERN stack with Prisma Accelerate and deployed on Cloudflare.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS, TypeScript
- **Backend**: Express (API routes via Next.js API), Prisma ORM
- **Database**: PostgreSQL (hosted on [Neon.tech](https://neon.tech))
- **AI Integration**: Google Gemini API
- **Hosting**: Cloudflare

## Screenshots

> (Add screenshots of the dashboard, invoice upload, role-based UI, etc.)

## Getting Started

### Prerequisites

- Node.js >= 18
- PostgreSQL DB (Neon recommended)
- Google Gemini API key

### Installation

```bash
git clone https://github.com/your-username/smart-inventory-automation.git
cd smart-inventory-automation
npm install