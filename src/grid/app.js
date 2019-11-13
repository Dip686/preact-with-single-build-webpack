import { h, render, Component } from 'preact';
import { officedatabase } from '../../../../data_generator/sampleGridData/initialloaddata.js';
import { updaterowdata } from '../../../../data_generator/sampleGridData/updaterowdata.js';


export default class Grid extends Component {
  state = {
    data: officedatabase
  };
  updateRow = () => {
    let data = this.state.data;
    for (let index = 0; index < updaterowdata.length; index++) {
      data[index] = updaterowdata[index];
    }
    this.setState(data);
  }
  render () {
    let data = this.state.data,
      rows = data.map((row)=> {
        return (
        <tr>
          {row.map((ele)=>{
            return <td style='border: 1px solid black; padding: 10px; text-align: center;'>{ele}</td>;
          })}
          </tr>
        );
      });
    return (
      <div>
        <button onClick={this.updateRow}>Update rows</button>
        <table style='border: 1px solid black;'>
          {rows}
        </table>
      </div>
    );
  }
}