# Software Design & Architecture Knowledge Tree

Status: Draft

## Purpose

Define the recommended learning sequence for developing software design and architecture skills.

The objective is to progress from writing code to designing maintainable, scalable, and high-quality software systems.

This roadmap complements the Software Engineering Knowledge Tree and focuses on:

- Software Design
- Architecture
- Domain Modeling
- Design Patterns
- System Design
- Distributed Systems
- Engineering Tradeoffs

---

# Learning Method

Every topic in this roadmap follows the same process.

```text
Reading
    ↓
Concept
    ↓
Explanation
    ↓
Discussion
    ↓
Exercise
    ↓
Design Challenge
    ↓
Feedback
    ↓
Next Concept
```

## Study Workflow

### Step 1 - Reading Assignment

Read the assigned pages, chapter, or section.

Do not attempt to memorize.

Focus on understanding:

- Why the concept exists
- What problem it solves
- What tradeoffs it introduces

### Step 2 - Concept Review

After completing the reading:

- Explain the concept in your own words
- Identify the main idea
- Describe the problem it solves

### Step 3 - Discussion

Discuss the topic with ChatGPT acting as:

- Senior Software Engineer
- Software Architect
- Technical Mentor

The discussion should focus on:

- Why the concept exists
- When to use it
- When not to use it
- Benefits
- Tradeoffs

### Step 4 - Exercise

Complete a small exercise related to the concept.

Examples:

- Refactoring
- Module Design
- Pattern Selection
- Architecture Analysis

### Step 5 - Design Challenge

Apply the concept to a realistic system.

Examples:

- Hotel Management System
- Authentication Platform
- E-Commerce Platform
- Learning Management System

### Step 6 - Feedback

Receive feedback on:

- Understanding
- Design Decisions
- Tradeoffs
- Improvements

### Step 7 - Continue

Move to the next concept.

---

# Phase 0 - Design Foundations

## Purpose

Understand why software becomes difficult to maintain and learn the principles used to manage complexity.

## Topics

- Software Complexity
- Abstraction
- Modularity
- Coupling
- Cohesion
- Information Hiding
- Technical Debt
- Maintainability

## Primary Resource

A Philosophy of Software Design

## Reading Plan

### Unit 0.1

Read:

- Chapter 1
- Chapter 2

Topics:

- Complexity
- Symptoms of Complexity

Completion Criteria:

- Can explain software complexity
- Can identify causes of complexity

---

### Unit 0.2

Read:

- Chapter 3
- Chapter 4

Topics:

- Working Code Isn't Enough
- Modules

Completion Criteria:

- Understand module responsibilities
- Understand module boundaries

---

### Unit 0.3

Read:

- Chapter 5
- Chapter 6

Topics:

- Information Hiding
- General-Purpose Modules

Completion Criteria:

- Can explain information hiding
- Can identify shallow modules

---

### Unit 0.4

Read:

- Chapter 7
- Chapter 8

Topics:

- Different Layer, Different Abstraction
- Pull Complexity Downwards

Completion Criteria:

- Understand abstraction layers
- Understand complexity management

---

# Phase 1 - Code Design

## Purpose

Learn how to write maintainable code.

## Topics

- Naming
- Functions
- Classes
- SOLID
- Error Handling
- Refactoring

## Primary Resources

- Clean Code
- Refactoring

## Reading Plan

### Unit 1.1

Read:

Clean Code

- Chapter 1
- Chapter 2

Topics:

- Clean Code
- Meaningful Names

---

### Unit 1.2

Read:

Clean Code

- Chapter 3

Topics:

- Functions

---

### Unit 1.3

Read:

Clean Code

- Chapter 7

Topics:

- Error Handling

---

### Unit 1.4

Read:

Refactoring

- Introduction
- First Refactoring Example

Topics:

- Refactoring Mindset

---

### Unit 1.5

Read:

Refactoring

- Code Smells

Topics:

- Identifying Design Problems

---

# Phase 2 - Object-Oriented Design

## Purpose

Learn how to structure applications using objects and patterns.

## Topics

- Composition
- Inheritance
- Interfaces
- Dependency Injection
- Design Patterns

## Primary Resource

Head First Design Patterns

## Reading Plan

### Unit 2.1

Read:

- Strategy Pattern

Topics:

- Favor Composition Over Inheritance

---

### Unit 2.2

Read:

- Observer Pattern

Topics:

- Decoupling Components

---

### Unit 2.3

Read:

- Factory Pattern

Topics:

- Object Creation

---

### Unit 2.4

Read:

- Adapter Pattern

Topics:

- Integration

---

### Unit 2.5

Read:

- Dependency Injection

Supplementary material as needed.

Topics:

- Managing Dependencies

---

# Phase 3 - Application Architecture

## Purpose

Learn how applications are organized internally.

## Topics

- Layered Architecture
- Hexagonal Architecture
- Onion Architecture
- Clean Architecture
- Dependency Inversion

## Primary Resource

Clean Architecture

## Reading Plan

### Unit 3.1

Read:

- Chapters 1–7

Topics:

- What Architecture Is
- Design Principles

---

### Unit 3.2

Read:

- SOLID Chapters

Topics:

- Architectural Design Principles

---

### Unit 3.3

Read:

- Component Principles

Topics:

- Component Design

---

### Unit 3.4

Read:

- Architecture Chapters

Topics:

- Layers
- Boundaries

---

### Unit 3.5

Read:

- Details Chapters

Topics:

- Databases
- Frameworks
- Infrastructure

---

# Phase 4 - Domain Modeling

## Purpose

Learn how to model business complexity.

## Topics

- Ubiquitous Language
- Entities
- Value Objects
- Aggregates
- Repositories
- Domain Events
- Bounded Contexts

## Primary Resources

- Domain-Driven Design
- Implementing Domain-Driven Design

## Reading Plan

### Unit 4.1

Read:

DDD

- Introduction
- Model Driven Design

Topics:

- Domain Modeling

---

### Unit 4.2

Read:

DDD

- Entities
- Value Objects

Topics:

- Business Modeling

---

### Unit 4.3

Read:

DDD

- Services
- Repositories

Topics:

- Domain Logic

---

### Unit 4.4

Read:

DDD

- Aggregates

Topics:

- Consistency Boundaries

---

### Unit 4.5

Read:

DDD

- Bounded Contexts

Topics:

- Large Systems

---

# Phase 5 - Software Architecture

## Purpose

Learn architectural styles and tradeoffs.

## Topics

- Monoliths
- Modular Monoliths
- Microservices
- Event Driven Architecture
- Architectural Characteristics

## Primary Resource

Fundamentals of Software Architecture

## Reading Plan

### Unit 5.1

Read:

- Chapters 1–5

Topics:

- Architecture Fundamentals

---

### Unit 5.2

Read:

- Architectural Characteristics

Topics:

- Quality Attributes

---

### Unit 5.3

Read:

- Architecture Styles

Topics:

- Structural Choices

---

### Unit 5.4

Read:

- Architecture Decisions

Topics:

- Tradeoffs

---

# Phase 6 - Distributed Systems Design

## Purpose

Understand how large-scale systems operate.

## Topics

- Replication
- Partitioning
- Consistency
- Messaging
- Event Streaming

## Primary Resource

Designing Data-Intensive Applications

## Reading Plan

### Unit 6.1

Read:

- Chapters 1–3

Topics:

- Reliable Systems

---

### Unit 6.2

Read:

- Chapters 4–6

Topics:

- Data Storage

---

### Unit 6.3

Read:

- Chapters 7–9

Topics:

- Distributed Data

---

### Unit 6.4

Read:

- Chapters 10–12

Topics:

- Batch Processing
- Stream Processing

---

# Phase 7 - Advanced Architecture

## Purpose

Develop senior-level architectural decision-making skills.

## Topics

- Architecture Tradeoffs
- Evolutionary Architecture
- Microservice Boundaries
- Data Ownership
- Event-Driven Systems

## Primary Resources

- Software Architecture: The Hard Parts
- Building Microservices

## Reading Plan

### Unit 7.1

Read:

Software Architecture: The Hard Parts

- Part 1

Topics:

- Tradeoffs

---

### Unit 7.2

Read:

Software Architecture: The Hard Parts

- Part 2

Topics:

- Distributed Architectures

---

### Unit 7.3

Read:

Building Microservices

- Service Boundaries

Topics:

- Microservice Design

---

### Unit 7.4

Read:

Building Microservices

- Evolution

Topics:

- System Growth

---

# Capstone Phase

## Purpose

Apply everything learned.

## Suggested Systems

- Hotel Management System
- Authentication Platform
- E-Commerce Platform
- Learning Management System
- AI Agent Platform

## Deliverables

- Requirements
- Domain Model
- Architecture Diagram
- ADRs
- API Design
- Data Model
- Deployment Design

## Completion Criteria

- Can design a complete software system
- Can justify architectural decisions
- Can discuss tradeoffs
- Can communicate designs professionally

---

# Mentor Workflow

For every unit completed:

1. Notify ChatGPT that the reading is complete.

2. Explain the concepts in your own words.

3. Receive senior-level questions.

4. Complete exercises.

5. Complete design challenges.

6. Receive feedback.

7. Continue to the next unit.

The objective is not to finish books.

The objective is to develop software design judgment.