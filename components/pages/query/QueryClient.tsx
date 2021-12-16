import { gql } from "@apollo/client";

 const QUERY_Client = gql`
query AffichierClient {
  client(order_by: {id_client: asc}) {
    nom_client
    address_client
    email
    tel_client
    image_client
  }
}
`;
export default QUERY_Client;