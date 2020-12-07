$(function() {

	let dateElems = $(".dates_list .date_wrapper .date");
	let dates = [];
	dateElems.each(function (index, element) {
		let data = $(element).attr("data-date");
		dates.push(new Date(data));
	});

	let currentDate = new Date();

	let indexPast = 0;
	while (dates[indexPast] < currentDate) ++indexPast;

	let pastDate = indexPast === 0 ? new Date("2021-01-01") : dates[indexPast-1];
	let nextDate = indexPast >= dates.length ? new Date("2022-01-01") : dates[indexPast];

	let indexCurrent = indexPast;
	while (dates[indexCurrent] <= nextDate) ++indexCurrent;

	let interpolation = map_range(currentDate, pastDate, nextDate, 0, 13.05);

	let progressBarValue = 101.05 - (13.05 * indexPast) - .1 - interpolation;
	progressBarValue = progressBarValue < 2 ? 2 : progressBarValue > 95 ? 95 : progressBarValue;
	let progressBar = $('#dates_progress');
	progressBar.attr("aria-valuenow", progressBarValue);
	progressBar.css("height",progressBarValue + "%");

	dateElems.each(function (index) {
		if(index < indexPast) {
			$(this).parent().addClass("previous_date");
		} else if (index < indexCurrent) {
			$(this).parent().addClass("current_date");
		}
	})

});

function map_range(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}