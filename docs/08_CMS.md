# Darik Pars
# Headless CMS Architecture Document

Version: 1.0  
Product: Darik Pars Digital Investment Platform  
CMS Architecture: WordPress Headless + Next.js


# 1. CMS Overview

Darik Pars uses a Headless CMS architecture where WordPress acts as the content management system and Next.js acts as the presentation layer.

The separation provides:

- Better performance
- Better scalability
- Advanced frontend experience
- Easier future expansion
- Strong SEO foundation


Architecture:


WordPress CMS

↓

REST API / GraphQL

↓

Next.js Frontend

↓

User Interface



---

# 2. Technology Stack


## Content Management System

Technology:

WordPress


Responsibilities:

- Content creation
- Media management
- User management
- SEO management
- Financial content administration



---

## Frontend

Technology:

Next.js


Responsibilities:

- Website interface
- User experience
- Performance optimization
- Dynamic pages


---

## Styling

Technology:

Tailwind CSS


Responsibilities:

- Design system implementation
- Responsive UI
- Component styling



---

# 3. CMS Content Models


The CMS contains the following entities:


# 3.1 Articles


Post Type:

Article


Fields:


Title

Slug

Featured Image

Excerpt

Content

Category

Author

Publish Date

SEO Metadata

Related Articles



---

# 3.2 Investment Funds


Custom Post Type:

Fund


Fields:


## Basic Information

- Fund Name
- Slug
- Description
- Category


## Investment Data

- Strategy
- Risk Level
- Investment Horizon


## Performance Data

- NAV
- Return Percentage
- Historical Performance
- Charts


## Documents

- Reports
- Prospectus
- Financial Files



---

# 3.3 Team Members


Custom Post Type:

Team Member


Fields:


- Full Name
- Position
- Biography
- Profile Image
- Experience
- Expertise
- Social Links



---

# 3.4 Services


Custom Post Type:

Service


Fields:


- Service Name
- Description
- Benefits
- Process
- CTA



---

# 3.5 Reports


Custom Post Type:

Report


Fields:


- Title
- Type
- Date
- File
- Description



---

# 3.6 Licenses


Custom Post Type:

License


Fields:


- Organization
- License Name
- Certificate Number
- Document
- Expiration Date



---

# 4. Database Structure


## Fund Database Example


Fund Table:


id

title

slug

description

strategy

risk_level

nav

performance

documents

created_at

updated_at



---

## Team Database Example


id

name

position

bio

image

expertise

created_at



---

# 5. WordPress Plugins Architecture


Recommended Plugins:


## SEO

Purpose:

Manage metadata and search optimization.



## Security

Purpose:

Protect admin area and APIs.



## Performance

Purpose:

Caching and optimization.



## API Enhancement

Purpose:

Improve frontend communication.



## Media Management

Purpose:

Optimize financial documents and images.



---

# 6. API Architecture


Communication:


WordPress

↓

API Layer

↓

Next.js


Supported Methods:


## REST API


Purpose:

Standard content delivery



## GraphQL


Future option:


- Faster queries
- Flexible data fetching
- Complex relationships



---

# 7. User Roles & Permissions


# Super Admin


Permissions:

- Full system access
- User management
- Configuration



---

# Content Manager


Permissions:

- Create articles
- Edit content
- Manage media



---

# Financial Analyst


Permissions:

- Update fund information
- Upload reports
- Edit performance data



---

# SEO Manager


Permissions:

- Manage metadata
- Optimize content
- Manage redirects



---

# Editor


Permissions:

- Review content
- Publish approved materials



---

# 8. Media Management


Supported Files:


Images:

- WebP
- JPG
- PNG


Documents:

- PDF


Optimization:

- Compression
- CDN support
- Lazy loading



---

# 9. Security Requirements


Requirements:


- Strong authentication
- Limited admin access
- Regular backups
- API protection
- SSL encryption



---

# 10. Future CMS Expansion


Future modules:


## Investor Portal


Features:

- User accounts
- Portfolio information
- Investment reports



## AI Content Assistant


Features:

- Article suggestions
- Financial summaries
- Knowledge assistant



## CRM Integration


Features:

- Lead management
- Investor communication



---

# 11. Development Workflow


Content Creation:

CMS Team

↓

Review

↓

SEO Optimization

↓

Publication

↓

Frontend Update



---

# Document Status


Version: 1.0


Status:

Approved for Technical Development


Next Documents:

09_SEO.md

10_Deployment.md