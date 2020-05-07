<![endif]-->

# # React Fundamentals: `Soda Fountain` Tap Room

#### A React web application that represents a `Tap room Tracker` where a `Soda Fountain store` can track their kegs. Application lets store track the remaining amount in each Soda Keg & following are the main features of this application...

- Render list/menu of all available kegs. For each keg, `Name`,  `Brand`,  `Price`  and  `Flavor`  are displayed.

-  User can submit a form to add a new keg to list.

-  User can click on a keg to see its detail page.

-  User can see how many pints are left in a keg. **PS:**  A keg is hardcoded to 15 pints for each of use (so that one can demonstrate emptying of keg).

-  User can click a button next to a keg whenever a pint is sold. Each click will decrease the number of pints left by 1. Once pint hits 0, further reduction is prevented by disabling the button.

## Further Exploration

Additional feature built into this application are as below ..

-  Option to `edit` a keg's properties after entering them (to correct mistake).

-  Option to `delete` a keg.

-  Keg gets updated with a message `"Out of Stock"` once it's empty.

-  When pints left in a keg is under 10, keg gets updated with a message `"Almost Empty"`.

##### Date: **05/08/2020**

#### By **Salim Mayan**

## Description

## Specifications:

* Spec 1: On `landing page`, click on `Add New Keg` button
+ Output: The app shall display below component. ![alt text](https://github.com/Rekjal/projTapRoom/blob/master/src/img/Add_New_Keg.png)

When above form is submitted, a flex box gets created with entered information (see image below) 

![alt text](https://github.com/Rekjal/projTapRoom/blob/master/src/img/Tap_Room_with_1_Keg.png)

* Spec 2: Clicking anywhere inside the flex box 
+ Output: User gets navigated to `Keg Details page` from where user can either `Delete` entire keg or `Update` data pertaining to current keg. 

![alt text](https://github.com/Rekjal/projTapRoom/blob/master/src/img/Tap_Room_with_1_Keg.png)

* Spec 2: The app returns NASA images, one at a time, with Meta Data.

+ Input: Select `With Meta Data` option from drop down, click on any combination of checkbox (s) (any combination of 4 Meta Data elements - `Title`, `Date Created`, `Description`, and `Image URL`), and click `Submit`

+ Output: The app shall start by displaying the very first image in the box on the right marked `Image Result`. `Next` and `Previous` buttons get rendered via which user can navigate through rest of the images returned by API call. Further, Meta Data pertaining to the clicked check box (s) would render in the bottom part of the box on the left marked `View NASA Images`.

![alt text](https://github.com/Rekjal/asynchAPInASAImageProject/blob/master/img/withMetaData.png)

* Spec 3: **Error-Handling for API call Error:** The app displays an error message if API call resulted in an error

+ Input: Select `With Meta Data` option from drop down, click on any combination of checkbox (s), and click `Submit` (To replicate working of `API call Error` swap valid URL with an invalid one by commenting out `line-16` and uncommenting `line-17` in `NASAApiCall.js`)

+ Output: The app shall display an error message containing the `request.status` and `request.statusText` in the box on the right marked `Image Result` (Verbatim error code in this specific case would be `Error Code: 401 (Unauthorized)`)

![alt text](https://github.com/Rekjal/asynchAPInASAImageProject/blob/master/img/errorHandlingForApiCallError.png)

* Spec 4: **Error-Handling if API query returned no result:** The app displays a notification if API call returned `0` image media

+ Input: Select `With Meta Data` option from drop down, click on any combination of checkbox (s), and click `Submit` (To replicate working of `API query returning no result`, force variable that stores Image Array Count (`imgObjCount`) to a value of `0` - do this by commenting out `line-48` and uncommenting `line-49` in `main.js`)

+ Output: The app shall return a notification that states there were no image media (Verbatim error message: `Error: API call returned 0 Image Media`) in the box on the right marked `Image Result`

![alt text](https://github.com/Rekjal/asynchAPInASAImageProject/blob/master/img/errorHandlingIfApiQueryReturnedNoResult.png)

## Setup/Installation Requirements

1. Clone this repository.

2. To run program, do `npm install' and "npm run start'

## Known Bugs

* No known bugs at this time.

## Technologies Used

* HTML

* CSS

* JQuery

* JS

* Bootstrap

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2020 **_{Salim Mayan}_**
