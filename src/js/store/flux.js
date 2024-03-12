const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					name: "Juan Perez",
					email: "juan@example.com",
					phone: "123-456-7890",
				},
				{
					id: 2,
					name: "Maria Lopez",
					email: "maria@example.com",
					phone: "987-654-3210",
				},
			],
		},
		actions: {
			addContact: (newContact) => {
				const store = getStore();
				const updatedContacts = [...store.contacts, newContact];
				setStore({ contacts: updatedContacts });
			},
			updateContact: (id, updatedContact) => {
				const store = getStore();
				const updatedContacts = store.contacts.map((contact) =>
					contact.id === id ? { ...contact, ...updatedContact } : contact
				);
				setStore({ contacts: updatedContacts });
			},
			deleteContact: (id) => {
				const store = getStore();
				const updatedContacts = store.contacts.filter((contact) => contact.id !== id);
				setStore({ contacts: updatedContacts });
			},
		},
	};
};

export default getState;
