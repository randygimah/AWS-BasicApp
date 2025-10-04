# GraphQL API Schema Documentation

## Overview
This document describes the GraphQL API schema configuration for the AWS-BasicApp using AWS Amplify Gen2.

amplify/data/resource.ts

## Schema Definition
The schema defines a `UserProfile` model with associated authorization rules and API configuration.

### Model Structure
```typescript
UserProfile {
  email: String
  profileOwner: String
}
```
Defines a UserProfile model with two fields: email and profileOwner
Both fields are of type string

### Authorization Rules
The schema implements two levels of authorization:

1. **Model-level Authorization**
   - Per-user authorization using owner-based access control
   - Access is restricted to the owner identified in the `profileOwner` field
   - Users can only access their own profiles

2. **Schema-level Authorization**
   - Grants access to the `postConfirmation` Lambda function
   - Allows the function to interact with user profile data during post-confirmation flows

## API Configuration
The API is configured with the following settings:

- **Default Authorization Mode**: API Key
- **API Key Expiration**: 30 days

## Generated Resources
The schema automatically generates:

- GraphQL types and operations
- CRUD resolvers
- DynamoDB tables
- Required IAM roles and policies

## Supported Operations
The API supports the following operations:

- `createUserProfile`
- `readUserProfile`
- `updateUserProfile`
- `deleteUserProfile`
- `listUserProfiles`

## Usage Example
```typescript
// Client-side code example
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

// Create a new profile
const newProfile = await client.models.UserProfile.create({
  email: "user@example.com",
  profileOwner: "userId"
});
```