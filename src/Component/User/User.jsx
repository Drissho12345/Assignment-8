

const User = () => {
    return (
        <div>
            <div className="flex flex-col text-white w-[80%] m-auto p-6 rounded-md sm:p-10 bg-gray-500 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-md dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-xl">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-xl">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xl hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full text-xl px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-md text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
            </div>
        </div>
    );
};

export default User;