// @TODO: YOUR CODE HERE!

const svgWidth = 960;
const svgHeight = 700;

const margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
const svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Initial Params
// let chosenXAxis = "poverty";
// let chosenYAxis = "healthcare";


const chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv").then(function (stateData) {
    console.log(stateData);

  // Step 1: Parse Data/Cast as numbers
  // ==============================
    stateData.forEach(function (data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

  // Step 2: Create scale functions
  // ==============================
    let xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(stateData, d => d.poverty)])
    .range([0, width]);

    let yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(stateData, d => d.healthcare)])
    .range([height, 0]);

  // Step 3: Create axis functions
  // ==============================
    let bottomAxis = d3.axisBottom(xLinearScale);
    let leftAxis = d3.axisLeft(yLinearScale);

  // Step 4: Append Axes to the chart
  // ==============================
    chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

    chartGroup.append("g")
    .call(leftAxis);

    // chartGroup.append("g")
    // .call(circlesText);

  // Step 5: Create Circles
  // // ==============================
    let circlesGroup = chartGroup.selectAll("circle")
        .data(stateData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .text(d => d.abbr)
        .attr("r", "15")
        .attr("fill", "green")
        .attr("opacity", ".5");  
        
    svg.selectAll("text")
        .data(stateData)
        .enter()
        .append("text")
        .text(d => d.abbr)
        // .attr("x", (d, i) => d[0]+5)
        // .attr("y", (d, i) => svgHeight -d[1])
        .classed("stateText", true);
    
    // updates circles text with new x values
    // circlesText = renderXText(circlesText, xLinearScale);
    
  // Step 6: Initialize tool tip
  // ==============================
    let toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function (d) {
            return (`${d.state}<br>Poverty: ${d.poverty}<br>Healthcare: ${d.healthcare}`);
    });

  // Step 7: Create tooltip in the chart
  // ==============================
    chartGroup.call(toolTip);

  // Step 8: Create event listeners to display and hide the tooltip
  // ==============================
    circlesGroup.on("mouseover", function (data) {
    toolTip.show(data, this);
    })
    // onmouseout event
    .on("mouseout", function (data, index) {
        toolTip.hide(data);
    });

  // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        // .attr("dy", "1em")
        .attr("class", "axisText")
        .style("fill", "black")
        .style("font", "20px sans-serif")
        .style("font-weight", "bold")
        .text("People without Healthcare (%)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .style("font", "20px sans-serif")
        .style("font-weight", "bold")
        .text("Poverty (%)");

    }).catch(function (error) {
    console.log(error);
});
