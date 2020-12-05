let sidebarMenu;
let gifPlaying = 1;

function startCog() {
	document.getElementById('cog_gif').src=$("#cog_gif").attr("data-active");
}

function idleCog() {
	document.getElementById('cog_gif').src=$("#cog_gif").attr("data-idle");
}

function checkCog() {
	if(gifPlaying) return;
	let id = Math.random();
	gifPlaying = id;
	startCog();
	setTimeout(function() {
		gifPlaying = (gifPlaying === id ? false : id);
		idleCog()
	}, 4333);
}


$(function() {
	if (navigator.userAgent.indexOf('Safari') != -1 &&
		navigator.userAgent.indexOf('Chrome') == -1) {
		$("body").addClass("safari");
	}

	sidebarMenu = $('#sidebarMenu');

	init_subnavlinks(".nav-multiple .subnav .nav-link");
	init_subnavs(".nav-multiple");

	$('#cog_gif').hover(checkCog).click(checkCog);
	setTimeout(function() { gifPlaying = gifPlaying === 1 ? false : 1; idleCog() }, 4333);
});

function init_subnavlinks (selector) {
	let selection = $(selector);
	if (selection.length === 0) return false;
	selection.click(function () {
		let clicked = $(this);
		let target = clicked.attr("data-target");
		let targetElem = $(target);
		let accordion = $(target).attr("data-parent");
		let open = $(accordion + " .collapse.show");

		if (open.length === 0) {
			location.href = clicked.attr("href");
			window.scrollBy(0, -30);
			targetElem.collapse('show');
		} else {
			if(targetElem.hasClass("show")) { //already open
				location.href = clicked.attr("href");
				window.scrollBy(0, -30);
			} else {
				open.addClass("instant");
				let instantCollapseClear = function () {
					open.removeClass("instant");
					location.href = clicked.attr("href");
					window.scrollBy(0, -30);
					open.off('hidden.bs.collapse', instantCollapseClear);
				};
				open.on("hidden.bs.collapse", instantCollapseClear);
				targetElem.collapse('show');
			}
		}
		return false;
	});
	return true;
}
function init_subnavs(selector) {
	let selection = $(selector);
	if (selection.length === 0) return false;
	selection.hover(
		function() {
			let link = $(this).children(".nav-link");
			let link_text = link.text().trim();
			if(link_text[0] === "+") {
				let new_text = link_text.split('');
				new_text[0] = '\u2013';
				new_text = new_text.join('');
				link.text(new_text);
			}
			let target = $(this).attr("data-target");
			$(".subnav[data-ref=" + target + "]").slideDown({duration: 200, queue: false});
		}, function() {
			let link = $(this).children(".nav-link");
			let link_text = link.text().trim();
			if(link_text[0] === "\u2013") {
				let new_text = link_text.split('');
				new_text[0] = '+';
				new_text = new_text.join('');
				link.text(new_text);
			}
			let target = $(this).attr("data-target");
			$(".subnav[data-ref=" + target + "]").slideUp({duration: 200, queue: false});
		}
	);
	return true;
}
