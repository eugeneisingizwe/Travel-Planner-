# Travel-Planner-
In this project I am building an API using Node.js, Express.js, MySQL, and Sequelize, and that will be deploy Heroku.
## User Stories

* As a traveller, I want to be able to create an account.

* As a traveller, I want to be able to create a new trip for myself using a location from a list.

* As a traveller, I want to be able to create and view location data.

* As a traveller, I want to be able to view all of the trips I'm taking, along with their locations.

## Acceptance Criteria

* It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia.

* It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia.

* It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia. 

* It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations` returns all location data in Insomnia.

* It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia.

* It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia. 

* It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia.

* It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.

* It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia.

* It's done when the API is successfully deployed to Heroku with a MySQL database.

## Specifications 

* Database models should have the following fields and associations:

  * `Traveller`

    * `id`: primary key

    * `name`
      
    * `email`

  * `Location`

    * `id`: primary key
    
    * `location_name`

  * `Trips`
      
    * `id`: primary key

    * `trip_budget` 
      
    * `traveller_amount`
      
    * `traveller_id`: non-unique foreign key that references the `Traveller` model's `id` field (`Traveller.id`)

    * `location_id`: non-unique foreign key that references the `Location` model's `id` field (`Location.id`)

  * Travellers have many locations, and locations have many travellers through trips (many-to-many association).

  * Set the `unique` flag to `false` to avoid a SQL error when creating the many-to-many relationship, because travellers can take multiple trips.



---
?? 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.