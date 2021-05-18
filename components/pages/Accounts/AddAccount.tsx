import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {  LinearProgress } from "@material-ui/core";
interface AddAccountProps {
  open: boolean;
  setOpen: Function;
}
const AddAccount: React.FC<AddAccountProps> = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [appId, setAppId] = useState("");
  const [tenant, setTenant] = useState("");
  const [password, setPassword] = useState("");
  const [subscription, setSubscription] = useState("");
  const [loading, setLoading] = useState(false);
  //fermer table 
  function handleClose() {
    setOpen(false);
  }
  async function addAccount() {
    setLoading(true);
    //API call
    console.log();
    setLoading(false);
    setOpen(false);
  }
  return (
    
    <Dialog 
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle  id="form-dialog-title">Add Accountss</DialogTitle>
      <DialogContent>
      
        <DialogContentText>
          To add a new account, please try to create the credentials from the AZ
          CLI.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Naaame"
          onChange={({ target }) => setName(target.value)}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="appId"
          label="Application Id"
          onChange={({ target }) => setAppId(target.value)}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="tenant"
          label="Tenant"
          onChange={({ target }) => setTenant(target.value)}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          onChange={({ target }) => setPassword(target.value)}
          type="Password"
          fullWidth
        />
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="subscription"
          label="Subscription"
          onChange={({ target }) => setSubscription(target.value)}
          type="text"
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={loading} variant="contained" onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={addAccount}
          variant="contained"
          color="primary"
        >
          Add Account
        </Button>
      </DialogActions>
      {loading && <LinearProgress />}
    </Dialog>
  );
};
export default AddAccount;
