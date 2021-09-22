// On Load, load CUs
window.onload = function () {
    if (hasCookie("access_token") && hasCookie("test_id")) {
        navigateTo(pages.test_info);
    }
};

function get_test_base_info(form) {
	// serialize the form data
	let test_id = $("#test_id_input").val();
    let access_token = $("#test_access_token_input").val();
    
    $.ajax({
			type: "GET",
			url: rest_api.test_base_info,
			data: {
                "test_id": test_id,
                "access_token": access_token,
            },
		})
		.done(function (response) {
            alert
            if (response.success){
                setCookie("access_token", access_token);
                setCookie("test_id", test_id);
                // redirecting
			    navigateTo(pages.test_info);
                return true
            }
            else{
                alert("No permission!")
            }
            console.log(response);
		})
		.fail(function () {
			alert("No permission!")
		});

	return false;
}

