import React from "react";

function PlanningForm({ formData, setFormData, onAddPackingItem }) {


	return (
		<div>
			<form onSubmit={(e) => onAddPackingItem(e, formData)}>
				<label htmlFor="packinglist">Make Your Packing List!</label>
				<input
					id="packinglist"
					name="packinglist"
					type="text"
					placeholder="Add packing item..."
          value={formData}
          onChange={(e) => setFormData(e.target.value)}></input>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default PlanningForm;
