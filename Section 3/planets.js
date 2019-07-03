const svg = d3.select('svg');

d3.json('planets.json').then(data => {
    const circs = svg.selectAll('circle')
                        .data(data);
    // Add attrs to circles already in DOM
    circs.attr('cy', 200)
            .attr('cx', d => d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill);
    // Append the enter selection to the DOM
    circs.enter()
            .append('circle')
            .attr('cy', 200)
            .attr('cx', d => d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill);

});