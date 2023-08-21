const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			api: "https://playground.4geeks.com/apis/fake/contact/",
            agenda: "Joss Sanchez",
            id: null,
            full_name: "",
            email: "",
            address: "",
            phone: null,
            allContacts: [],
            picture: "https://via.placeholder.com/",
            contactInfo: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addContact: contactInfo => {
                const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
                storedContacts.push(contactInfo);
                localStorage.setItem("contacts", JSON.stringify(storedContacts));
                setStore({ allContacts: storedContacts });
			},

			editContact: (contactId, updatedContact) => {
				const store = getStore();
				
				const existingContacts = store.allContacts;
				const newContacts = existingContacts.map(contact => 
					contact.id === contactId ? updatedContact : contact
				);
				
				localStorage.setItem("contacts", JSON.stringify(newContacts));
				setStore({ allContacts: newContacts });
			}
		},
	};
};

export default getState;