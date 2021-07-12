// let gifPlaying = 1;
//
// function startCog() {
// 	document.getElementById('cog_gif').src=$("#cog_gif").attr("data-active");
// }
//
// function idleCog() {
// 	document.getElementById('cog_gif').src=$("#cog_gif").attr("data-idle");
// }
//
// function checkCog() {
// 	if(gifPlaying) return;
// 	let id = Math.random();
// 	gifPlaying = id;
// 	startCog();
// 	setTimeout(function() {
// 		gifPlaying = (gifPlaying === id ? false : id);
// 		idleCog()
// 	}, 4333);
// }
//
// function attempt(action, delay, attempts) {
// 	if(attempts <= 0) return;
// 	if(action() === false) {
// 		setTimeout(function() {attempt(action, delay, --attempts);}, delay);
// 	}
// }
//
function goToSubHash(id) {
	let elem = $(id);
	if(elem.attr("data-toggle") === "collapse") {
		let target = elem.attr("data-target");
		openWithInstaClose(target, id);
	}

	return true;
}

function openWithInstaClose(target, href) {
	let targetElem = $(target);
	let accordion = $(target).attr("data-parent");
	let currentOpen = $(accordion + " .collapse.show");

	if (currentOpen.length === 0) {
		location.href = href;
		window.scrollBy(0, -30);
		targetElem.collapse('show');
	} else {
		if(targetElem.hasClass("show")) { //already open
			location.href = href;
			window.scrollBy(0, -30);
		} else {
			currentOpen.addClass("instant");
			let instantCollapseClear = function () {
				currentOpen.removeClass("instant");
				location.href = href;
				window.scrollBy(0, -30);
				currentOpen.off('hidden.bs.collapse', instantCollapseClear);
			};
			currentOpen.on("hidden.bs.collapse", instantCollapseClear);
			targetElem.collapse('show');
		}
	}
	return false;
}


$(function() {
	if (navigator.userAgent.indexOf('Safari') != -1 &&
		navigator.userAgent.indexOf('Chrome') == -1) {
		$("body").addClass("safari");
	}

	let idHash = window.location.hash;
	goToSubHash(idHash);

	init_subnavlinks(".nav-multiple .subnav .nav-link");
	init_subnavs(".nav-multiple");
	$('.calls_header').click(function () { openWithInstaClose($(this).attr("data-target"), "#" + $(this).attr('id')) });

	$('#cog_gif').hover(checkCog).click(checkCog);
	setTimeout(function() { gifPlaying = gifPlaying === 1 ? false : 1; idleCog() }, 4333);

	$('#burgerMenuButton').click(function () {
		$(this).toggleClass("change");
		$($(this).attr("data-target")).slideToggle(200);
	});

	$('.nav-link').click(function () {
		$('#burgerMenuButton').removeClass("change");
		$('#sidebarLinks').slideUp(200);
	});
});

function init_subnavlinks (selector) {
	let selection = $(selector);
	if (selection.length === 0) return false;
	selection.click(function () {
		let clicked = $(this);
		let target = clicked.attr("data-target");
		let href = clicked.attr("href");
		return openWithInstaClose(target, href);
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