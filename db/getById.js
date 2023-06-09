const getAll = require('./getAll');

const getById = async (id) => {
    const contacts = await getAll();
    const result = contacts.find(contact => contact.id === id);
    if(!result) {
        return null;
    }
    return result;

}
module.exports = getById;