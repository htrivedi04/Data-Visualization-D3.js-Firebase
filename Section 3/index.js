const data = [
                {x: 120, y: 200, width:50, height:400, fill:'purple'},
                {x: 180, y: 440, width:50, height:160, fill:'gold'},
                {x: 240, y: 560, width:50, height:40, fill:'green'}
                ];
const svg = d3.select('svg');
svg.selectAll('rect')
    .data(data)
    // d is the data, 
    // i is the index of the selected element inside svg
    // and n is the name of the selected element
    .attr('x', d =>  d.x )
    .attr('y', d =>  d.y )      
    .attr('width', d =>  d.width )
    // Two different ways of defining a function
    // The value of 'this' is different in both cases
    // For function --> rect
    // For => --> window, but we can get rect by using n[i]
    .attr('height', function(d, i, n) { return d.height })
    // The function for 'width' is exactly same as 'fill'
    // When writing in same line we can omit return & braces
    .attr('fill', (d, i, n) => { return d.fill });