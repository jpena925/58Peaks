import React, { useState } from "react";
import PlanningForm from "./PlanningForm";
import PackingList from "./PackingList";

function Planning() {
	const [formData, setFormData] = useState("");
  const [packingList, setPackingList] = useState([])

	function handleAddPackingItem(e, item) {
    e.preventDefault()
		setPackingList([...packingList, item])
	}

	return (
		<div>
			<PlanningForm
				formData={formData}
				setFormData={setFormData}
				onAddPackingItem={handleAddPackingItem}
			/>
			<PackingList packingList={packingList} />
		</div>
	);
}

export default Planning;
