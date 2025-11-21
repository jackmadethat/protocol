import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      const width = 200;
      const height = 200;
      const radius = Math.min(width, height) / 2;
      const colors = ['#ffffff86', '#ffffff49', '#ffffff21'];
      const labels = ['Protein', 'Fats', 'Carbs'];

      const pie = d3.pie()
        .value(d => d.value)
        .sort(null)
        .padAngle(0.1);

      const arc = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius * 0.2);

      const g = svg
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

      const arcs = g
        .selectAll('arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

      arcs
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => colors[i])
        .attr('stroke', 'white')
        .attr('stroke-width', 0.5);

      arcs
        .append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .style('font-size', '0.8em')
        .text((d, i) => labels[i]);
    }
  }, [data]);

  return (
    <svg ref={svgRef} width={200} height={200} />
  );
};

export default PieChart;