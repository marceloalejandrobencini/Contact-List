import React, { useContext } from "react";
import { Context } from "../store/appContext";

const AddContact = () => {
	const { actions } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		
	};

	return (
		<div className="container">
			<h2>Add a New Contact</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Full Name:</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label>Email:</label>
					<input type="email" className="form-control" />
				</div>
				<div className="form-group">
					<label>Phone:</label>
					<input type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label>Adress</label>
					<input type="text" className="form-control" />
				</div>
				<button type="submit" className="btn btn-primary">
					Save
				</button>
			</form>
		</div>
	);
};

export default AddContact;
