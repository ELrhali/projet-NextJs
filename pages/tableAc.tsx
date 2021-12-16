import { TextField } from "@material-ui/core";
import { Formik ,Form} from "formik";
import * as React from "react";
interface Values {
  firs : String ;
  last :String;
  email :String ;
};
interface Props {
  onSubmit: (values: Values) => void ;

}
 const MyFrom : React.FC<Props> = ({ onSubmit   }) => {
  return(
    <div className="text-gray-900">
    <Formik  initialValues={{  firs: "ééé", last : "", email : ""}} 
     onSubmit={values => {
       onSubmit(values);
     }
     }>
      {( { values , handleChange , handleBlur }) => (
      <Form>
      < TextField name="first name" value={values.firs } 
       onChange={handleChange}
       onBlur={handleBlur} />
        < TextField name="laast" value={values.last } 
       onChange={handleChange}
       onBlur={handleBlur} />
        < TextField name="emaill" value={values.email } 
       onChange={handleChange}
       onBlur={handleBlur} />

       <pre>
         {JSON.stringify(values,null ,2)}
       </pre>
      </Form>
    )}
  
   </Formik>
   </div>
  );
};
export default MyFrom ;

