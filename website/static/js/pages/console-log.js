// On Load, load CUs
window.onload = function () {
    checkLogin();
    get_console_log();
};

function get_console_log() {
    $.ajax({
			type: "GET",
			url: rest_api.console_log,
			data: {
                "test_id": getCookie("test_id"),
                "access_token": getCookie("access_token"),
            },
		})
		.done(function (response) {
            console.log(response);
            $("#console_log_text").append(response);
		})
		.fail(function () {
			alert("Error!")
		});

	return false;
}