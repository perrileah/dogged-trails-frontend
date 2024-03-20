# README

# Dogged Trails Front-end (React.js)

Hiking is one of my all-time favorite activities that is only made better when I can bring my best friend -- my dog! I wanted to create an app similar to AllTrails that allows a user to easily find dog-friendly hikes in their city, state or nearby local state or national parks. 

Dogged Trails allows a user to signup and login with API authentication using the bcrypt gem file and jwt storage. Only users who are logged in can "log a hike" or "review a hike," however I wanted the index of hikes and parks to be accessible to non-users as well. The app's homescreen is a paginated list of all hikes in the area. The user is able to click a button below each hike to create a new review for that hike. The navigation also allows the user to log/create a new hike and add it to the database as well as see a full list of parks. Currently, the search bar filters and maps through all hike data and all trail data, however in the future I would like to implement a more complex search bar that can search by city or zip code to find nearby hikes. 

Technologies include Ruby on Rails backend, PostgreSQL database, React.js frontend, Bootstrap, FaSearch React icons, and hiking trail data sourced from fellow Github user leech92 who successfully scraped data from AllTrails. 

## Installation

npm create vite@latest (React, Javascript)
npm install
npm run dev
npm install axios

## Usage

A rails server will need to be running on http://localhost:3000 and front-end server running on http://localhost:5173.

## Roadmap

- Use a theme to upgrade the overall design of the app
- Implement a more complex search bar that can search for hikes by city, zip code or park
- Make "Review this Hike" a Modal that automatically populates the hike id and user id
- Index for all reviews
- Hike Show page should show a list of all reviews on that hike
- Conditional rendering of emojis depending on if the hike is dog-friendly or not
- "Create a hike" functionality should connect to the appropriate park via park_id or park_name
- When logged in, a user can see a list of all of their reviews/completed hikes
- A user can filter their hike based on whether or not it is pet-friendly
- Conditional tags for hiking reviews (icy, slippery, flooded, etc)
- Star rating review functionality
