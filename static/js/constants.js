// API URLs
let base_api = "http://127.0.0.1:8000";


const rest_api = {
	test_base_info: `${base_api}/gui/test-base-information`,
    test_stage_status: `${base_api}/gui/testing-process-status`,
    tests_performed: `${base_api}/gui/tests-performed`,
    console_log: `${base_api}/gui/test-console-log`,
    test_files: `${base_api}/gui/test-output-file`
};

let pages = {
	test_info: "test-information.html",
    index: "index.html",
    console_log: "console-log.html",
    test_files: "test-files.html",
};