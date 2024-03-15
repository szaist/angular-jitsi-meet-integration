# AngularJitsiMeetIntegration

## Steps to run locally

- Open commandline, and navigate to main folder
- type `npm install` to install the dependencies
- type `npm run start` to start the development server
- after that open a browser and navigate to `http://localhost:4200`

## Difficulties

During this time, I can highlight two main challenges.

- The first challenge is the lack of an Angular SDK. During development, there was no feedback on whether the structure of the given object is correct or not.
- Solution: I implemented the used types based on the documentation, thus keeping the code cleaner and clearer.


- The second challenge I spent a lot of time on was going through the initial settings on the API.
  The individual settings, such as configOverwrite and interfaceConfigOverwrite, are only available there. However, there are also many deprecated properties to deal with.
  In addition, the default values are also commented out, blending in with the rest of the comments.
