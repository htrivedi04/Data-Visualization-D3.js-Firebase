// Grab element from DOM in regular JS
// Use querySelector to grab just one 
const a  = document.querySelectorAll('div');
// Grab element from DOM in D3.js
// Use select to grab just one
const b = d3.selectAll('div');

const canvas = d3.select(".canvas");

// Append an SVG tag to the 'canvas' div
const svg = canvas.append('svg');
// Adding attributes to SVG
svg.attr('height', 600)
    .attr('width', 600);

// Making a new group in SVG
const group = svg.append('g')
                .attr('transform', 'translate(0, 100)')
                .attr('transform', 'translate(50, 0)');

// Append shapes to SVG container
group.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'cornflowerblue')
    .attr('x', 20)
    .attr('y', 20);
group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink');
group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red');
    
// Adding text to an SVG
// Not in the same group as the shapes
svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('Hello World!')
    .style('font-family', 'arial'); // To add CSS styles

console.log(a, b);