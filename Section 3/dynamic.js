const data = [
    {x: 120, y: 200, width:50, height:400, fill:'purple'},
    {x: 180, y: 440, width:50, height:160, fill:'gold'},
    {x: 240, y: 560, width:50, height:40, fill:'green'}
    ];
const svg = d3.select('svg');

// Appends data to the rects 
const rects = svg.selectAll('rect')
                .data(data)

// Makes the rects for existing rects in the DOM
 rects.attr('width', d => d.width)
        .attr('height', d => d.height)
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('fill', d => d.fill);

// Makes the rects for the enter selection in the DOM
// Dynamically makes new rects for the data present in the enter selection
rects.enter()
        .append('rect')
        .attr('width', d => d.width)
        .attr('height', d => d.height)
        .attr('x', d => d.x)
        .attr('y', d => d.y)
        .attr('fill', d => d.fill);
