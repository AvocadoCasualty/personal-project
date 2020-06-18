## Breeder Database

####What is the purpose of this app?
To give potential puppy parents a starting point in finding and researching breeders for them to choose from. Allows for clear-cut comparisons of breeders and what procedures they abide by in their breeding programs. 
####What problems does your app solve and how does it solve those problems?
The messiness of finding a breeder when you have no connections to reference. Most breeders websites are slapped together in a simplified program, outdated or both. This site would allow users to create an account, and if they are a breeder enter pre-determined information that can then be compared to other breeders for buyers to look through. 
####Who is your target user?
Any and all potential pet parents. Teens to seniors and everything in between. Education and functionality are priority as the site has to be accessible for all ages. 
####How much experience do they have with technology?
Assumed little to none. 

###Features:
Welcoming home page with simple instructions on how to get the most of the site. 
Breeders can register, and are provided multiple fields about their program and practices (titles, # of dogs in program, hip/elbow certs, breed specific testing, etc)

###For buyers/users:
- Ability to search breeders by breed/region. 
- Add functionality of users to create an account.
- Ability to add breeders to a list on their account so they can be saved for further research.
- Reviews available on each breeder page, along with a rating/review count on their search card. 
- Ability to narrow search results based on region/state, titles, registered dogs(all registries) and buyer rating. Breed being the initial parameter for searches. 
 
###For breeders:
- All buyer functionality.
- Ability to edit their information and respond to reviews on their page. 
- Ability to report reviews to admins to address any spamming/slander.
- Ability to link to their website/ social media on their page. 

###MVP(Minimum Viable Product):
- Login/Register functionality
- Search within specified breed
- User/breeder page 
- Ability to narrow search results with specified parameters.
 
###Components:
- App.js
- Header.js
	- Functional w/Hooks.
- Auth.js
	- Functional w/Hooks.
- Dashboard.js
	- Functional w/Hooks
- Results.js
	- Functional w/Hooks
- Userpage.js 
    - Functional w/Hooks

- Routes:
```jsx
    <Route exact path='/' component={Dashboard}/>
    <Route path='/auth' component={Auth}/>
    <Route path='/results' component={Results}/>
    <Route path='/user${userId}' component={Userpage}/>
```


###Server:
- Controllers:
    - register - (body)
    - login - (body)
    - logout

    - search - (body, query) - get all matching data from the db and send to front end for user display.
    - editProfile - (params, body (maybe query to see if breeder=true?)) - ability to edit something on the user profile. 

- Endpoints:
    - Auth:
        - app.post(‘/api/register’, authCtrl.register)
        - app.post(‘/api/login’ , authCtrl.login)
        - app.delete(‘/api/logout’ , authCtrl.logout)

    - App:
        - app.get(‘/api/search’ , ctrl.search )
        - app.put(‘/api/:user_id’ , ctrl.editProfile )

####Point Plan: 
- Hosted with unique username (10)
- Additional tech- Sass & Nodemailer (15-30)
- Functioning Auth (10)
- Hooks on 5 components (10)
- 3 responsive views (10)
- Redux- read/write from 2+ reducers (15)
    - Total: 70 Points+
