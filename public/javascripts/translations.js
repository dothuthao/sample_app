I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), JSON.parse('{"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"app":{"log_in":"Log in","log_out":"Log out","michael_hartl":"Michael Hartl","new_users":"This will be a signup page for new users.","news":"News","sign_up":"Sign up","title":"Ruby on Rails Tutorial Sample App"},"controllers":{"invalid_user":"invalid_email_password_combination"},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_years":{"one":"1 year","other":"%{count} years"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Second","year":"Year"}},"error":{"error":"error","error_valid":"The form contains %{error}"},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\\nPlease make sure a rails development server is running.\\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","blank":"can\'t be blank","confirmation":"doesn\'t match %{attribute}","empty":"can\'t be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\\n","unavailable_session":"Session %{id} is no longer available in memory.\\n\\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\\nthis request hit doesn\'t store %{id} in memory. Consider turning the number of\\nprocesses/workers to one (1) or using a different server in development.\\n"},"header":{"account":"Account","profile":"Profile","settings":"Settings","users":"Users"},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"i18n":{"plural":{"keys":["one","other"]}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"round_mode":"default","separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"sessions":{"new":{"email":"Email","password":"Password","sign_up_now":"Sign up now!"}},"static_pages":{"about":{"content":"The %{link_rails_tutorial}, part of the %{link_learnenough} family of tutorials, is a %{link_book} and  to teach web development with %{link_rails}. This is the sample app for the tutorial.","title":"About"},"contact":{"content":"Contact the Ruby on Rails Tutorial about the sample app at the %{link}.","text":"contact page","title":"Contact"},"help":{"content":"Get help on the Ruby on Rails Tutorial at the %{link_page}. To get help on this sample app, see the %{link_book}.","text_book":"\\u003cem\\u003eRuby on Rails Tutorial\\u003c/em\\u003e book","text_help_page":"Rails Tutorial Help page","title":"Help"},"home":{"content":"This is the home page for the %{link} sample application.","rails_logo":"Rails logo","text":"Ruby on Rails Tutorial","title":"Home"},"index":{"destroy":"Destroy","edit":"Edit","home":"Home","new_static_page":"New Static Page","show":"Show","static_pages":"Static Pages"},"new":{"new_static_page":"New Static Page"},"show":{"home":"Home"},"text":{"book":"Book","learnenough":"Learn Enough","rails":"Ruby on Rails","rails_tutorial":"Ruby on Rails Tutorial","screen_casts":"Screencast"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"users":{"new":{"email":"Email","name":"Name","password":"Password","password_confirmation":"Password_confirmation","submit":"Create my account"}},"welcome":"Welcome to the Sample App"}'));
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), JSON.parse('{"activerecord":{"errors":{"messages":{"record_invalid":"Có các lỗi sau: %{errors}","restrict_dependent_destroy":{"has_many":"Không thể xóa do tồn tại một số đối tượng phụ thuộc %{record}","has_one":"Không thể xóa do tồn tại đối tượng phụ thuộc %{record}"}}}},"app":{"log_in":"Đăng nhập","log_out":"Đăng xuất","michael_hartl":"Michael Hartl","new_users":"Đây sẽ là trang đăng ký cho người dùng mới.","news":"Tin Tức","sign_up":"Đăng ký","title":"Hướng dẫn Ruby on Rails Sample App"},"controllers":{"invalid_user":"Email/password không hợp lệ"},"date":{"abbr_day_names":["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],"abbr_month_names":[null,"Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],"day_names":["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"],"formats":{"default":"%d-%m-%Y","long":"%d %B, %Y","short":"%d %b"},"month_names":[null,"Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng mười một","Tháng mười hai"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"khoảng 1 giờ","other":"khoảng %{count} giờ"},"about_x_months":{"one":"khoảng 1 tháng","other":"khoảng %{count} tháng"},"about_x_years":{"one":"khoảng 1 năm","other":"khoảng %{count} năm"},"almost_x_years":{"one":"gần 1 năm","other":"gần %{count} năm"},"half_a_minute":"30 giây","less_than_x_minutes":{"one":"chưa tới 1 phút","other":"chưa tới %{count} phút"},"less_than_x_seconds":{"one":"chưa tới 1 giây","other":"chưa tới %{count} giây"},"over_x_years":{"one":"hơn 1 năm","other":"hơn %{count} năm"},"x_days":{"one":"1 ngày","other":"%{count} ngày"},"x_minutes":{"one":"1 phút","other":"%{count} phút"},"x_months":{"one":"1 tháng","other":"%{count} tháng"},"x_seconds":{"one":"1 giây","other":"%{count} giây"}},"prompts":{"day":"Ngày","hour":"Giờ","minute":"Phút","month":"Tháng","second":"Giây","year":"Năm"}},"error":{"error":"Lỗi","error_valid":"Hiện đang có %{error}"},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"phải được đồng ý","blank":"không thể để trắng","confirmation":"không khớp với xác nhận","empty":"không thể rỗng","equal_to":"phải bằng %{count}","even":"phải là số chẵn","exclusion":"đã được giành trước","greater_than":"phải lớn hơn %{count}","greater_than_or_equal_to":"phải lớn hơn hoặc bằng %{count}","inclusion":"không có trong danh sách","invalid":"không hợp lệ","less_than":"phải nhỏ hơn %{count}","less_than_or_equal_to":"phải nhỏ hơn hoặc bằng %{count}","not_a_number":"không phải là số","not_an_integer":"phải là một số nguyên","odd":"phải là số lẻ","other_than":"cần phải khác %{count}","present":"cần phải để trắng","taken":"đã có","too_long":"quá dài (tối đa %{count} ký tự)","too_short":"quá ngắn (tối thiểu %{count} ký tự)","wrong_length":"độ dài không đúng (phải là %{count} ký tự)"},"template":{"body":"Có lỗi với các mục sau:","header":{"one":"1 lỗi ngăn không cho lưu %{model} này","other":"%{count} lỗi ngăn không cho lưu %{model} này"}}},"header":{"account":"Tài khoản","profile":"Hồ sơ","settings":"Cài đặt","users":"Người dùng"},"helpers":{"select":{"prompt":"Vui lòng chọn"},"submit":{"create":"Tạo %{model}","submit":"Lưu %{model}","update":"Cập nhật %{model}"}},"i18n":{"plural":{"keys":["other"]},"transliterate":{"rule":{"À":"A","Á":"A","Â":"A","Ã":"A","È":"E","É":"E","Ê":"E","Ì":"I","Í":"I","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ù":"U","Ú":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","è":"e","é":"e","ê":"e","ì":"i","í":"i","ò":"o","ó":"o","ô":"o","õ":"o","ù":"u","ú":"u","ý":"y","Ă":"A","ă":"a","Đ":"D","đ":"d","Ĩ":"I","ĩ":"i","Ũ":"U","ũ":"u","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}}},"number":{"currency":{"format":{"delimiter":".","format":"%n %u","precision":0,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"VNĐ"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Tỷ","million":"Triệu","quadrillion":"Triệu tỷ","thousand":"Nghìn","trillion":"Nghìn tỷ","unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Byte"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"sessions":{"new":{"email":"Email","password":"Mật khẩu","sign_up_now":"Đăng ký ngay!"}},"static_pages":{"about":{"content":"%{link_rails_tutorial}, là một phần trong nhóm %{link_learnenough} các bài giảng hướng dẫn, là một %{link_book} và  để dạy phát triển web với %{link_rails}. Đây là ứng dụng mẫu cho hướng dẫn này.","new":{"new_static_page":"Thêm trang tĩnh"},"show":{"home":"Trang chủ"},"text":{"book":"Quyển sách","learnenough":"Learn Enough","rails":"Ruby on Rails","rails_tutorial":"Hướng dẫn Ruby on Rails","screen_casts":"Screencast"},"title":"Về nội dung"},"contact":{"content":"Liên hệ với Hướng dẫn Ruby on Rails về ứng dụng mẫu tại %{link}.","text":"trang liên hệ","title":"Liên hệ"},"help":{"content":"Nhận trợ giúp với Hướng dẫn Ruby on Rails tại %{link_page}. Để nhận trợ giúp với ứng dụng mẫu này, xem tại %{link_book}.","text_book":"sách \\u003cem\\u003eHướng dẫn Ruby on Rails\\u003c/em\\u003e","text_page":"Trang Hướng dẫn trợ giúp Rails","title":"Trợ giúp"},"home":{"content":"Đây là trang chủ cho ứng dụng mẫu của %{link}.","rails_logo":"biểu tượng Rails","text":"Hướng dẫn Ruby on Rails","title":"Trang chủ"},"index":{"destroy":"Xóa","edit":"Chỉnh sửa","home":"Trang chủ","new_static_page":"Thêm trang tĩnh","show":"Hiển thị","static pages":"Trang tĩnh "}},"support":{"array":{"last_word_connector":", và ","two_words_connector":" và ","words_connector":", "}},"time":{"am":"sáng","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%d %B, %Y %H:%M","short":"%d %b %H:%M"},"pm":"chiều"},"users":{"new":{"email":"Email","name":"Tên","password":"Mật khẩu","password_confirmation":"Xác nhận mật khẩu","submit":"Tạo tài khoản của tôi"}},"welcome":"Chào mừng đến với Sample App"}'));
