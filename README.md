# Whats for dinner?
This website will try to help you decide what you are going to eat for dinner and where you are gonna eat it. The website can find any grocery store or restaurants near your current location.

Have you ever been in a position that its time to go eat but you have no idea what to eat? well think no more and let the website choice a dish for you.
If you want the website can find a restaurant near your current location aswell!
All you have to do is select what kind of food you like and let the website do the rest for you.

### Goals of the user
- To quickly decide what he wants to eat for dinner
- To find a restaurant a restaurant with a countrys kitchen in the area
- To find a grocery store where he can buy food for dinner in the area

## UX
### Ideal User
- Anyone in the world who needs help to decide his dinner
- A user who has grocery stores and restaurants nearby
- English speaking

### Users on my website will want to :
- Decide their dinner fast and easy
- Be able to "reroll" their dinner quickly if they don't like the current dish
- Find their dinner quickly
- Find a nearby grocery store/restaurant when in foreign territory

### Why this website is a great solution:
- When you enter this site you can have a random dish generated within a couple of seconds. Other sites I found had about 22 questions before I could finally get a dish
- When you don't like the suggested dish all you have to do is press submit again to get a new random dish.
- This site allows you to quickly find grocery stores, restaurants or restaurants with the suggested dish

### User Stories
- As a new user, I want it to be clear what the purpose of this website is
- As a hungry user, I want to be able to quickly decide my dinner
- as a visitor I want to be able to pinpoint the location I need to go to
- as a regular visitor who travels to a lot of places, I want to find the nearest grocery store  
- as a regular user I want an error free website which tells me clearly if something goes wrong

#### Wireframe
You can find the Wireframe In the Wireframe map under assets

##### Differences from the wireframe
The google maps map is nearly full screen, As a user you don't want to look at a small map when your trying to look for anything
The flag-pictures I could find on non-copyright websites were way to distracting so I decided to remove them

## Features

### Existing features

- Feature 1:  The ability to select some country's kitchens and get a random dish for the country.
- Feature 2: Find a restaurant for your random selected Dish on the google maps map.
- feature 3: Find restaurants in the area
- feature 4: find grocery stores near you
- Feature 5: Navigation from a button
- feature 6: Some info about country's kitchens

### Future features left to implement

- being able to create an own account which allows the user to prefer dishes(The Idea of preferred dishes would be to add the dish twice in the list so the chance to get this dish would be double in comparison to all the other dishes which are not preferred), add custom dishes and a monthly subscription
- To implement a recipe API with alot more dishes to cover than my own recipes


## Testing
- I fixed multiple issues with missing }, ), ; and fixed them immediately
- I added multiple console logs and debuggers to see if my Objects were acting like they should
- I checked if my mobile view did not have any overflow and everything was where it was supposed to be

### Defense programming
- When a user has not checked a button yet and submits, the user won't see a dish appear but a "Please Check a button" where the dish would appear.
- When A user clicks the button to find his dish while he doesn't have a dish generated it will ask the user to "generate a dish first"
- When a user denies acces to location the default google maps location will be Rotterdam(NL)

### Issues
The "Nearby grocery store"-button: this buttons makes google look for "Grocery Stores" near you, however in a non-english speaking country this might be called something
else and it won't always find/see all the grocery stores in the area. Also it will only find 1 store which shares the same name


## Technologys used:

- Jquery
- Bootstrap
- Google Maps API
- Google Places

## Deployment
- Logged into GitHub
- Under the tab 'Repositories', I selected Whats-for-Diner
- Subsequently I selected 'Settings' from the menu at the top of the page
- I scrolled down the page top the GitHub Pages section
- On the dropdown bar under 'Source', I selected 'master branch'
- Once I selected 'master branch' the page reloaded, and the website was deployed
- I scrolled down the page again to find the link to the deployed website within a green highlighted area of the GitHub pages section, where this section also notified me that my website is deployed

## Credits

### Code
 - line 139-201 style.css, I took the toggle-slide-switch(button) from w3school
 - line 250-256 was taken from the google maps places API documentation
 - line 298-309 was taken from the google maps API documentation

### Media
All photos were taken from pexels.com

### content
All text from the section "choose the country" was taken from wikipedia article country(relative to the country you are referring to)-cuisine
 