import { ReactGrid, Column, Row, HeaderCell } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import React from "react";
interface Person {
    name: string;
    surname: string;
  }
  
  const getPeople = (): Person[] => [
    { name: "Thomas", surname: "Goldman" },
    { name: "Susie", surname: "Quattro" },
    { name: "", surname: "" }
  ];
  const getColumns = (): Column[] => [
    { columnId: "name", width: 150 },
    { columnId: "surname", width: 150 }
  ];
  const headerRow: Row<HeaderCell> = {
    rowId: "header",
    cells: [
      { type: "header", text: "Name" },
      { type: "header", text: "Surname" }
    ]
  };
  const getRows = (people: Person[]): Row[] => [
    headerRow,
    ...people.map<Row>((person, idx) => ({
      rowId: idx,
      cells: [
        { type: "text", text: person.name },
        { type: "text", text: person.surname }
      ]
    }))
  ];
  function Passanger() {
    const [people] = React.useState<Person[]>(getPeople());
    
    const rows = getRows(people);
    const columns = getColumns();
  
    return <ReactGrid rows={rows} columns={columns} />;
  };
  export default Passanger ;