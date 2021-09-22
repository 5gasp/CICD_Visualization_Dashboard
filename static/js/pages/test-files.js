// On Load, load CUs
window.onload = function () {
    checkLogin();
    get_output_file();
};

function get_output_file() {
    $.ajax({
			type: "GET",
			url: rest_api.test_files,
			data: {
                "test_name": "bandwidth",
                "test_id": getCookie("test_id"),
                "access_token": getCookie("access_token"),
                "file_name": "log.html",
            },
		})
		.done(function (response) {
            response = response.replace("<!DOCTYPE html>", "").replace("<html lang=\"en\">", "").replace("</html>", "")
            document.querySelector('html').innerHTML = response

		})
		.fail(function () {
			alert("Error!")
		});

	return false;
}