# geolocator-nodejs

Get Google Maps coordinates by many address from input file and write latitude and longitude of them in output files

##### Purpose I was faced with lots of addresses and I challenged myself to get a quick resolution to get latitude and longitude coordinates of them. This is a simple solution to get this result and work with it as well as you like. In my case I copy the columns of output files in a spreadsheet to get my job done.


### Pre requisites

* Have a Google Cloud Account
* On Google Cloud, search for "maps" and enable Geocoding API, this API converts between addresses and geographic coordinates.
* Go to the Credentials menu and generate the API KEY of the Geocoding API. Put the value on the ".env" file. (keep safe the API KEY, do not share it with anyone)


### How to use

* Put the addresses you want to discover the coordinates on "input-address.txt" file, line by line,
* To install the dependencies
```npm i```
* To run app
```node geo```
* If the connection was successfully with Google Maps, then the files "output-latitude.txt" and "output-longitude.txt" will be populated by results.
