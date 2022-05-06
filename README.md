# Company Lister App

Simple app to list companies. 

## Frameworks and Libraries

### Server

Node.js
typescript
express
express-graphql
graphql
ts-node
cors

### Client
React.js
react-dom
typescript
@apollo/client
graphql
@mui/material
@mui/icons-material
@mui/x-data-grid

## How to Run the App

Open terminal
Go to server folder
Run: npm install
Run: npm run start-server

Open new terminal
Go to client folder
Run: npm install
Run: npm start

## How the App Can Be Improved

Implement unit testing (e.g. Jest)
Implement E2E testing (e.g. Cypress)
Improved responsiveness
Mobile first design/development
Implement accessibility features
Server side pagination
Better component structuring for controls (e.g. generic table control extended via helper middleware controller or detailed components -table.tsx->companytable.tsx- or -table.tsx->companydatahelper.ts to provide interface and structured data-)
Progress indicator for data load
Better error handling and error logging
Better folder structuring for components (e.g. components->controls->CompanyTable->CompanyTable.tsx, CompanyTable.css)