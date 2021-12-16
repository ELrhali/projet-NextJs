import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Button } from '@material-ui/core';

interface RocketInventory  {
  id: number;
  prenom: string;
  phone: number;
} 
interface RocketInventoryData {
  test: RocketInventory [];
}




const QUERY = gql`
  query  test {
    test {
      
      id
      prenom
      phone
    }
  }
`;


const Afficher: React.FC = () => { {
  
    const { data, loading, error } = useQuery<RocketInventoryData>(QUERY);

    if (loading) {
      return <h2>Loading.....</h2>;
    }
  
    if (error) {
      console.error(error);
      return null;
    }
  

console.log(data);
  
  return (
    <div>

      <div>App</div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>prenom</th>
            <th>phone</th>
          </tr>
        </thead>
       
          <tbody>
            {
            
             data &&  data.test.map((teste , i) => (
                <tr key={i}>
                  <td>{teste.id}</td>
                  <td>{teste.prenom}</td>
                  <td>{teste.phone}</td>
                  <td><Button color="primary">Update</Button></td>

                </tr> ))
               
            }
          </tbody>
       
      </table>
    </div>

 );
}}
export default Afficher;



  // <div>
      
    //   { <table>
         
    //       <tbody>
    //         { data.rocketInventory.map(inventory => (
    //           <tr>
    //             <td>{inventory.id}</td>
    //             <td>{inventory.prenom}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>} 
     
    // </div>