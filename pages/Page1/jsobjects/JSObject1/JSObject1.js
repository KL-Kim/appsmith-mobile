export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
	},
	myFun2: async () => {
		//use async-await or promises
	},
	sumbit: () => {
		if (!Checkbox1.isChecked) {
			showAlert("请阅读订购须知", "warning");
		} else {
			resetWidget("PhoneNum", true);
			resetWidget("PhoneCode", true);
		}
	}
}