import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { data } from "./data.js";
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// import DownArrow from "material-ui/svg-icons/hardware/keyboard-arrow-down";

// const dropDownMenu = ({}) => (
//   <IconMenu
//     iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
//     anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
//     targetOrigin={{ horizontal: 'left', vertical: 'top' }}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Send feedback" />
//     <MenuItem primaryText="Settings" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// )


class ReactTable extends React.Component {
  constructor(props) {
    super(props);

    this.data = [{
      id: 1,
      name: "Item name 1",
      price: 100
    }, {
      id: 2,
      name: "Item name 2",
      price: 100
    }];

    this.data = data.data;

    this.state = {
      
    };
  }

  priceFormatter = (cell, row) => {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }

  renderRectField = (sub, offset) => {
    let isNormal = (Math.abs(sub) <= offset)
    let style = {
        border: '1px solid black',
        backgroundColor: isNormal ? '#FED1CF' : '#FFFFFF',
        width: '30px',
        height: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }
    
    let textStyle = {
        color: sub > 0 ? '#0000FF' : '#FF0000',
        fontSize: '20px',
        marginTop: '-3px'
    }

    return (
        <div style={style}>
        {
            !isNormal && <span style={textStyle}>{ offset > 0 ? '+' : '-' }</span>
        }
        </div>
    )
  }

  renderCustomField = (row) => {
    let v1 = row.v1
    let v2 = row.v2
    let sub = v1 - v2
    let rootStyle = {
        display: 'flex',
        justifyContent: 'center'
    }

    let style = {
        // padding: '0px'
        paddingLeft: '2px',
        paddingRight: '2px',
        fontSize: '10px',
        width: '40px'
    }

    let styleText = {
        color: sub < 0 ? 'red' : 'blue'
    }

    let offset = 25

    return (
        <div style={rootStyle}>
            <div style={{...style, textAlign: 'right'}}>
                { v1.toFixed(2) }
            </div>
            <div style={{...style, width: '30px'}}>
                { this.renderRectField(sub, offset) }
            </div>
            <div style={style}>
                <div>{ v2.toFixed(2) }</div>
                <div style={styleText}>{ sub.toFixed(2) }</div>
            </div>
        </div>
    )
  }

  render() {
    return (
      <BootstrapTable data={this.data} striped={true} hover={true}>
        <TableHeaderColumn dataField="title" width={'50px'} isKey={true} dataAlign="center" dataSort={true}>TITLE</TableHeaderColumn>

        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>Quoted $<br/> versus <br/>Charged</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>QTY</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>Mass KG <br/>Measured</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>Cubic <br/>Measured</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>Greater of <br/>Customer <br/>Decleared Mass <br/>KG or Cubic KG</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>Greater of FP <br/>Charged Mass <br/>KG or Cubic KG</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>No of billed vs.<br /> no of Quoted <br/>Charge Lines</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>Residential <br/>not <br/>Business</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>MASS KG</TableHeaderColumn>
        <TableHeaderColumn dataField="timestamp" dataAlign="center" width={'120px'} dataSort={true} dataFormat={(cell, row) => this.renderCustomField(row)}>MASS KG</TableHeaderColumn>
      </BootstrapTable>
    );
  }


}

export default ReactTable;