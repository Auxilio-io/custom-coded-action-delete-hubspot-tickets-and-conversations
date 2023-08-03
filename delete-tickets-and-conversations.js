//note that this code is in fact only deleting the ticket record but every associated conversation will be moved to trash at the same time.

const axios = require('axios');
const token = process.env.custom_code_actions_access_token

exports.main = async (event) => {

  const ticketId = event.inputFields['hs_object_id'];

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: `https://api.hubapi.com/crm/v3/objects/tickets/${ticketId}`,
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };

  axios.request(config)
    .then(
    console.log("Ticket deleted with an id of: " + ticketId)
  )
    .catch((error) => {
    console.log(error);
  });

}