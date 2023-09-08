const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const signupSubmitted=async(e)=>{
	e.preventDefault()
	const formData = Object.fromEntries(new FormData(e.target));
	const options={
		method:"POST",
		headers:{
			"Content-Type": "application/json"
		},
		body:JSON.stringify(formData)
	}
	const data = await fetch('http://localhost:5000/signup',options);
	const response = await data.json()
	if(response.success){
		container.classList.remove("right-panel-active");
	}
}

const loginSubmitted=async(e)=>{
	e.preventDefault()
	const formData = Object.fromEntries(new FormData(e.target));
	const options={
		method:"POST",
		headers:{
			"Content-Type": "application/json"
		},
		body:JSON.stringify(formData)
	}
	const data = await fetch('http://localhost:5000/login',options);
	const response = await data.json()
	if(response.success){
		location.href='/mj-career/index.html'
	}
}