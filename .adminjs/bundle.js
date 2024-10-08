(function (React, adminjs) {
	'use strict';

	function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

	var React__default = /*#__PURE__*/_interopDefault(React);

	const TextareaEdit = props => {
	  const {
	    record,
	    property,
	    onChange
	  } = props;
	  return /*#__PURE__*/React__default.default.createElement("div", {
	    className: "mb-4"
	  }, /*#__PURE__*/React__default.default.createElement("label", {
	    className: "block text-sm mb-2"
	  }, property.label));
	};

	// components/UserPostPage.tsx
	const api = new adminjs.ApiClient();
	const UserPostPage = () => {
	  const [data, setData] = React.useState([]);
	  console.log("data", data);
	  React.useEffect(() => {
	    const fetchData = async () => {
	      const response = await api.getPage({
	        pageName: 'userPost'
	      });
	      console.log(response.data.data);
	      setData(response.data.data);
	    };
	    fetchData();
	  }, []);
	  return /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("h1", null, "User-Post Data"), data.map(user => /*#__PURE__*/React__default.default.createElement("div", {
	    key: user.id
	  }, /*#__PURE__*/React__default.default.createElement("h2", null, user.name), /*#__PURE__*/React__default.default.createElement("ul", null, user.posts.map(post => /*#__PURE__*/React__default.default.createElement("li", {
	    key: post.id
	  }, post.title, ": ", post.content))))));
	};

	const FullNameComponent = ({
	  record
	}) => {
	  return /*#__PURE__*/React__default.default.createElement("span", null, record.params.fullName);
	};

	AdminJS.UserComponents = {};
	AdminJS.UserComponents.TextareaEdit = TextareaEdit;
	AdminJS.UserComponents.UserPostPage = UserPostPage;
	AdminJS.UserComponents.FullNameComponent = FullNameComponent;

})(React, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL1RleHRhcmVhRWRpdC50c3giLCIuLi9jb21wb25lbnRzL1VzZXJQb3N0UGFnZS50c3giLCIuLi9jb21wb25lbnRzL0Z1bGxOYW1lQ29tcG9uZW50LnRzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJ2FkbWluanMnO1xuXG5jb25zdCBUZXh0YXJlYUVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHJlY29yZCwgcHJvcGVydHksIG9uQ2hhbmdlIH0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gbWItMlwiPntwcm9wZXJ0eS5sYWJlbH08L2xhYmVsPlxuXHRcdFx0ey8qIDx0ZXh0YXJlYVxuXHRcdFx0XHRjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXG5cdFx0XHRcdHJvd3M9ezV9XG5cdFx0XHRcdHZhbHVlPXtyZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdIHx8ICcnfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdC8+ICovfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFFZGl0OyIsIi8vIGNvbXBvbmVudHMvVXNlclBvc3RQYWdlLnRzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbmpzJztcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpO1xuXG5pbnRlcmZhY2UgUG9zdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgcG9zdHM6IFBvc3RbXTtcbn1cblxuaW50ZXJmYWNlIEFwaVJlc3BvbnNlIHtcbiAgZGF0YTogVXNlcltdO1xufVxuXG5jb25zdCBVc2VyUG9zdFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKTtcblxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldFBhZ2U8QXBpUmVzcG9uc2U+KHsgcGFnZU5hbWU6ICd1c2VyUG9zdCcgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSBhcyBVc2VyW10pO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VXNlci1Qb3N0IERhdGE8L2gxPlxuICAgICAge2RhdGEubWFwKHVzZXIgPT4gKFxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0+XG4gICAgICAgICAgPGgyPnt1c2VyLm5hbWV9PC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dXNlci5wb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfToge3Bvc3QuY29udGVudH1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUG9zdFBhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRnVsbE5hbWVDb21wb25lbnQgPSAoeyByZWNvcmQgfTogeyByZWNvcmQ6IGFueSB9KSA9PiB7XG4gIHJldHVybiA8c3Bhbj57cmVjb3JkLnBhcmFtcy5mdWxsTmFtZX08L3NwYW4+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnVsbE5hbWVDb21wb25lbnQ7IiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgVGV4dGFyZWFFZGl0IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dGFyZWFFZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5UZXh0YXJlYUVkaXQgPSBUZXh0YXJlYUVkaXRcbmltcG9ydCBVc2VyUG9zdFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUG9zdFBhZ2UnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVzZXJQb3N0UGFnZSA9IFVzZXJQb3N0UGFnZVxuaW1wb3J0IEZ1bGxOYW1lQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRnVsbE5hbWVDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkZ1bGxOYW1lQ29tcG9uZW50ID0gRnVsbE5hbWVDb21wb25lbnQiXSwibmFtZXMiOlsiVGV4dGFyZWFFZGl0IiwicHJvcHMiLCJyZWNvcmQiLCJwcm9wZXJ0eSIsIm9uQ2hhbmdlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJhcGkiLCJBcGlDbGllbnQiLCJVc2VyUG9zdFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0UGFnZSIsInBhZ2VOYW1lIiwibWFwIiwidXNlciIsImtleSIsImlkIiwibmFtZSIsInBvc3RzIiwicG9zdCIsInRpdGxlIiwiY29udGVudCIsIkZ1bGxOYW1lQ29tcG9uZW50IiwicGFyYW1zIiwiZnVsbE5hbWUiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FHQSxNQUFNQSxZQUF5QyxHQUFJQyxLQUFLLElBQUs7R0FDNUQsTUFBTTtLQUFFQyxNQUFNO0tBQUVDLFFBQVE7Q0FBRUMsSUFBQUEsUUFBQUE7Q0FBUyxHQUFDLEdBQUdILEtBQUssQ0FBQTtHQUU1QyxvQkFDQ0ksc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLEtBQUEsRUFBQTtDQUFLQyxJQUFBQSxTQUFTLEVBQUMsTUFBQTtJQUNkRixlQUFBQSxzQkFBQSxDQUFBQyxhQUFBLENBQUEsT0FBQSxFQUFBO0NBQU9DLElBQUFBLFNBQVMsRUFBQyxvQkFBQTtDQUFvQixHQUFBLEVBQUVKLFFBQVEsQ0FBQ0ssS0FBYSxDQU96RCxDQUFDLENBQUE7Q0FFUixDQUFDOztDQ2pCRDtDQUlBLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxpQkFBUyxFQUFFLENBQUE7Q0FxQjNCLE1BQU1DLFlBQXNCLEdBQUdBLE1BQU07R0FDbkMsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHQyxjQUFRLENBQVMsRUFBRSxDQUFDLENBQUE7Q0FFNUNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUosSUFBSSxDQUFDLENBQUE7Q0FFekJLLEVBQUFBLGVBQVMsQ0FBQyxNQUFNO0NBQ2QsSUFBQSxNQUFNQyxTQUFTLEdBQUcsWUFBWTtDQUM1QixNQUFBLE1BQU1DLFFBQVEsR0FBRyxNQUFNVixHQUFHLENBQUNXLE9BQU8sQ0FBYztDQUFFQyxRQUFBQSxRQUFRLEVBQUUsVUFBQTtDQUFXLE9BQUMsQ0FBQyxDQUFBO09BQ3pFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUSxDQUFDUCxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFBO0NBQy9CQyxNQUFBQSxPQUFPLENBQUNNLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDQSxJQUFjLENBQUMsQ0FBQTtNQUN0QyxDQUFBO0NBQ0RNLElBQUFBLFNBQVMsRUFBRSxDQUFBO0lBQ1osRUFBRSxFQUFFLENBQUMsQ0FBQTtDQUVOLEVBQUEsb0JBQ0ViLHNCQUFBLENBQUFDLGFBQUEsMkJBQ0VELHNCQUFBLENBQUFDLGFBQUEsQ0FBSSxJQUFBLEVBQUEsSUFBQSxFQUFBLGdCQUFrQixDQUFDLEVBQ3RCTSxJQUFJLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSSxpQkFDWmxCLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxLQUFBLEVBQUE7S0FBS2tCLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxFQUFBQTtJQUNicEIsZUFBQUEsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUtpQixJQUFJLENBQUNHLElBQVMsQ0FBQyxlQUNwQnJCLHNCQUFBLENBQUFDLGFBQUEsQ0FDR2lCLElBQUFBLEVBQUFBLElBQUFBLEVBQUFBLElBQUksQ0FBQ0ksS0FBSyxDQUFDTCxHQUFHLENBQUNNLElBQUksaUJBQ2xCdkIsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLElBQUEsRUFBQTtLQUFJa0IsR0FBRyxFQUFFSSxJQUFJLENBQUNILEVBQUFBO0NBQUcsR0FBQSxFQUNkRyxJQUFJLENBQUNDLEtBQUssRUFBQyxJQUFFLEVBQUNELElBQUksQ0FBQ0UsT0FDbEIsQ0FDTCxDQUNDLENBQ0QsQ0FDTixDQUNFLENBQUMsQ0FBQTtDQUVWLENBQUM7O0NDdERELE1BQU1DLGlCQUFpQixHQUFHQSxDQUFDO0NBQUU3QixFQUFBQSxNQUFBQTtDQUF3QixDQUFDLEtBQUs7R0FDekQsb0JBQU9HLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxFQUFPSixNQUFNLENBQUM4QixNQUFNLENBQUNDLFFBQWUsQ0FBQyxDQUFBO0NBQzlDLENBQUM7O0NDSkRDLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUUsQ0FBQTtDQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUNuQyxZQUFZLEdBQUdBLFlBQVksQ0FBQTtDQUVsRGtDLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDeEIsWUFBWSxHQUFHQSxZQUFZLENBQUE7Q0FFbER1QixPQUFPLENBQUNDLGNBQWMsQ0FBQ0osaUJBQWlCLEdBQUdBLGlCQUFpQjs7Ozs7OyJ9
