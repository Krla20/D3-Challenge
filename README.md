# Data Journalism and D3 with JavaScript
**********************************
### By Karla M. Murphy
*********************************

* Deploy github page: [Correlations Healthcare vs. Poverty](https://krla20.github.io/D3-Challenge/)

<p align="center"><img align="center" width="300" height="300" src="https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif"></p>



************************
## Story Telling
<hr>
Welcome to the newsroom! You have just accepted a data visualization position for a major metro paper. You are tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.

The editor wants to run a series of feature stories about the health risks facing demographics. She is counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the assignment is based on 2014 ACS 1-year estimates from the [US Census Bureau](https://data.census.gov/cedsci/), but you are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."

You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.
********************
## Requirements
<hr>
Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You will code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

<div class="text-purple">
* Added as customization event listener to display and hide tooltip with the mouseover/mouseout event.
</div>
* Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.
