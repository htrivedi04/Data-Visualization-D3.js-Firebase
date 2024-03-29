// Appending the svg directly to canvas
const svg = d3.select('.canvas')
                .append('svg')
                .attr('width', 600)
                .attr('height', 600);
// Creating margins and graph (group) dimesions
const margin = {top:20, right:20, bottom: 100, left: 100}
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')
                    .attr('width', graphWidth)
                    .attr('height', graphHeight)
                    .attr('transform', `translate(${margin.left}, ${margin.top})`);

const xAxisGroup = graph.append('g')
                        .attr('transform', `translate(0, ${graphHeight})`);
const yAxisGroup = graph.append('g');

d3.json('menu.json').then(data => {
    // Making a linear y-scale
    const y = d3.scaleLinear()
                    .domain([0, 1000])
                    .range([graphHeight, 0]);
    
    // Making a band scale for x-scale
    const x = d3.scaleBand()
                .domain(data.map(item => item.name))
                .range([0, 500])
                .paddingInner(0.25)
                .paddingOuter(0.25);

    // alert(data.map(item => item.name));

    // Join the data to rect
    const rects = graph.selectAll('rect')
                        .data(data)
    
    rects.attr('width', x.bandwidth)
            .attr('height', d => y(d.orders))
            .attr('fill', 'orange')
            .attr('x', d => x(d.name))
            .attr('y', d => graphHeight - y(d.orders));

    // Append the enter selection to the DOM
    rects.enter()
            .append('rect')
            .attr('width', x.bandwidth)
            .attr('height', d => y(d.orders))
            .attr('fill', 'orange')
            .attr('x', d => x(d.name))
            .attr('y', d => graphHeight - y(d.orders));
    
    // Create and call the axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
                        .ticks(5)
                        .tickFormat(d =>  d + ' orders');

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    xAxisGroup.selectAll('text')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')
                .attr('fill', 'orange');
    
})