function optionChanged(selectedID){
    console.log(selectedID);
    d3.json("data/samples.json").then((data) => {
    console.log(data); 
    d3.select("#selDataset").html("");   
    data.metadata.forEach(item =>
         {
         d3.select ("#selDataset").append('option').attr('value', item.id).text(item.id);
         });
    d3.select("#selDataset").node().value = selectedID;
    
    const idMetadata = data.metadata.filter(item=> (item.id == selectedID));
       {
          console.log("------------------------")
          console.log(item);
          console.log(item.id);
          
       });
    console.log(idMetadata);
    const panelDisplay = d3.select("#sample-metadata");
    panelDisplay.html("");
    Object.entries(idMetadata[0]).forEach(item=> 
       {
          console.log(item);
          panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
       });
 
    const idSample = data.samples.filter(item => parseInt(item.id) == selectedID);
    
    console.log(typeof parseInt(item.id));
    console.log(idSample[0].sample_values);  
    console.log(idSample[0].otu_ids);  
    console.log(idSample[0].otu_labels);  
    
    var sampleValue = idSample[0].sample_values.slice(0,10);
    sampleValue= sampleValue.reverse();
    var otuID = idSample[0].otu_ids.slice(0,10);
    otuID = otuID.reverse();
    var otuLabels = idSample[0].otu_labels
    otuLabels = otuLabels.reverse();
 
    console.log(sampleValue);
    console.log(otuID);
    console.log(otuLabels);
 
    const yAxis = otuID.map(item => 'OTU' + " " + item);
       console.log(yAxis);
    
       const trace = {
       y: yAxis,
       x: sampleValue,
       type: 'bar',
       orientation: "h",
       text:  otuLabels,
       marker: {
          color: 'rgb(154, 140, 152)',
          line: {
             width: 3
         }
        }
       },
       layout = {
       title: 'Top 10 Operational Taxonomic Units (OTU)/Individual',
       xaxis: {title: 'Number of Samples Collected'},
       yaxis: {title: 'OTU ID'}
       };
 
       // Plotting the graph using plotly----------------------------------------
       Plotly.newPlot('bar', [trace], layout,  {responsive: true});    
       
 var sampleValue1 =idSample[0].sample_values;
 var otuID1= idSample[0].otu_ids;
 
 const trace1 = {
    x: otuID1,
    y: sampleValue1,
    mode: 'markers',
    marker: {
      color: otuID1,
      
      size: sampleValue1
    }
  },
 
  layout1 = {
    title: '<b>Bubble Chart For Each Sample</b>',
    xaxis: {title: 'OTU ID'},
    yaxis: {title: 'Number of Samples Collected'},
    showlegend: false,
    height: 800,
    width: 1800
    };
    
 Plotly.newPlot('bubble', [trace1], layout1);