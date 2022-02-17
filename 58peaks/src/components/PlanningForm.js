import React from "react";

function PlanningForm({ formData, setFormData, onAddPackingItem }) {


	return (
		<div id="packing">
			<form onSubmit={(e) => onAddPackingItem(e, formData)}>
				<label htmlFor="packing-input" id="formtitle">Make Your Packing List!</label>
				<input
					id="packing-input"
					name="packing-input"
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
