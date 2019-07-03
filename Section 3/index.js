const data = [
    {width:200, height:400, fill:'purple'}
];
const svg = d3.select('svg');
svg.select('rect')
    .data(data)
    // d is the data, 
    // i is the index of the selected element inside svg
    // and n is the name of the selected element
    .attr('width', function(d, i, n){ return d.width })
    .attr('height', function(d, i, n){ return d.height })
    .attr('fill', function(d, i, n){ return d.fill });