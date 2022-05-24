<div id="top"></div>
<div align="center">
<h3 align="center">UniHuts</h3>

  <p align="center">
    Full-stack MERN application that helps people <br /> easily find an ideal room or a potential roommate.
    <br />
    <a href="https://github.com/bbukulin/unihuts"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bbukulin/unihuts/issues">Report Bug</a>
    ·
    <a href="https://github.com/bbukulin/unihuts/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

In today's world, most people choose to live together. Sharing a room with someone who has the same interests and hobbies as you can be a great life experience and is also a great way to save money. Unihuts makes the experience of living together easier and safer.

![Image](https://i.imgur.com/YuFcMY0.png)
<br />
<br />

Browse public listings, filter & sort results to find your ideal room. <br />
Cards designed with attention to detail allow you to quickly overview all the relevant information related to each listing.
![Image](https://i.imgur.com/Veq05Rr.png)
<br />
<br />

<em>"More details"</em> link on each card rederects you to full listing details, where you can contact the advertiser.
![Image](https://i.imgur.com/FXYNdhR.png)
<br />
<br />

Same concept used on room listings is used for <strong>roommate</strong> listings. 
![Image](https://i.imgur.com/EHyQX8g.png)
<br />
<br />

To experience all the features of UniHuts, <br /> 
such as <strong>posting new room / roommate listing</strong> and <strong>updating or deleting existing listing</strong>,
please <a href="#installation">run the app locally</a>. 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bbukulin/unihuts.git
   ```
   
2. Navigate to unihuts directory
   ```sh
   cd unihuts
   ```

3. Install NPM packages in <strong> root </strong> dir
   ```sh
   npm install
   ```
   
4. Install NPM packages in <strong> client </strong> dir
   ```sh
   cd client
  
   npm install
   ```

5. Rename `.env.temp` to `.env` in the root folder and setup values
   ```js
   MONGO_URL: ...
   JWT_SECRET: ...
   JWT_LIFETIME: ...
   ```

6. From root directory run app locally
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Account setup
- [x] Listing room ads
  - [x] Edit listings
  - [x] Delete listings
- [x] Listing roommate ads
  - [x] Edit listings
  - [x] Delete listings
- [x] Search & filter listings
- [ ] Multi-language support
- [ ] Implementing real-time chat
- [ ] Implementing React Redux for better state management

See the [open issues](https://github.com/bbukulin/unihuts/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! It's greatly appreciated.

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/NewFeature`
3. Commit your Changes `git commit -m 'Add some NewFeature'`
4. Push to the Branch `git push origin feature/NewFeature`
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>
