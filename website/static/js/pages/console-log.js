// On Load, load CUs
var test_id;
var access_token;
window.onload = function () {
    checkLogin();
    test_id = findGetParameter("test_id");
    access_token = findGetParameter("access_token");
    if(test_id == null) test_id = getCookie('test_id');
    if(access_token == null) access_token = getCookie('access_token');
    get_console_log();
};

function get_console_log() {
    $.ajax({
			type: "GET",
			url: rest_api.console_log,
			data: {
                "test_id": test_id,
                "access_token": access_token,
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