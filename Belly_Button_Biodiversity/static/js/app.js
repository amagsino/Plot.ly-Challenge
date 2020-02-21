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