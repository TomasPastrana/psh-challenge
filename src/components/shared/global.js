import React from "react";

export function sortAlphabeticaly(data, prop) {
	let sorted;
	if (prop) {
		sorted = data?.sort(
			function (a, b) {
				if (a[prop] > b[prop]) {
					return 1;
				} else if (a[prop] < b[prop]) {
					return -1;
				} else {
					return 0;
				}
			});
	} else {
		sorted = data.sort();
	}

	return sorted;
}
