This is a Basic Setup for an Express Server that uses Sockets
To Connect The RaspberryPi Via Internet.

[Raspi was port Forwarded Via Router to be accessible anywhere.. We could use Heroka instead]

Set up To get this Working on your Pi
  - clone everything
  - run npm install to get all packages installed
  
Run:
  using command 'npm run' -> which points to '~/bin/www' file
      - this will run the server
      
Client:
  run the Client side file -> 'node client.js' which listens for any changes within the server
                               and can do various things with the information, such as update html or set a GPIO pin HIGH or LOW
  ** Edit the Client.js File to add Features carried out by either the webpage or raspi.
