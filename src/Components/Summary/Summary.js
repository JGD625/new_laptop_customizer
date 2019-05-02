import React, { Component } from 'react';
import SummaryTotal from './SummaryTotal';
import SumOptions from './SumOptions';

class Summary extends Component{

  render() {
    const total = Object.keys(this.props.selected).reduce((acc, curr) => acc + this.props.selected[curr].cost, 0); 
    return (
      <section className="main__summary">
         <h3>NEW GREENLEAF 2018</h3>
         { Object.keys(this.props.selected).map(key => <SumOptions key={key} name={this.props.selected[key].name}
                    cost={this.props.selected[key].cost}/>) } 
  <SummaryTotal total={ total } />
  </section>
      
     )
   }
 }
    
    
    
export default Summary;