import React from 'react';
import CheckHeader from './CheckHeader';
import CheckReport from './CheckReport';

const Checkindex: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  return (
   <div>

     <CheckHeader />
      <CheckReport />

    </div>
  );
};
export default Checkindex;