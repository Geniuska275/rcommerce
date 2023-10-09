import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const CreateAccount = () => {

    // https://reuplane.com/account/login#recover
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => console.log('dd');

    return (
        <>
            <section className="flex justify-center items-center h-[81vh] ">

                <div className="wrap flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold  mb-10 text-center"> Create account </h2>

                    <form onSubmit={handleSubmit} className="w-fit flex flex-col">
                        <input
                            type="text"
                            className="border border-gray-500  focus:border-gray-800 focus:border-2 py-3 px-3 text-lg placeholder:text-lg
                            mb-5 focus:rounded-0 focus:outline-none"
                            // defaultValue="Email"
                            placeholder="First Name"
                            {...register("firstName", { required: true })} />

                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border border-gray-500  focus:border-gray-800 focus:border-2 py-3 px-3 text-lg placeholder:text-lg
                            mb-5 focus:rounded-0 focus:outline-none"
                            // defaultValue="Email"
                            {...register("lastName", { required: true })} />

                        <input
                            type="email"
                            className="border border-gray-500  focus:border-gray-800 focus:border-2 py-3 px-3 text-lg placeholder:text-lg
                            mb-5 focus:rounded-0 focus:outline-none"
                            // defaultValue="Email"
                            placeholder="Email"
                            {...register("email", { required: true })} />

                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-500  focus:border-gray-800 focus:border-2 py-3 px-3 text-lg placeholder:text-lg
                            mb-5 focus:rounded-0 focus:outline-none"
                            // defaultValue="Email"
                            {...register("password", { required: true })} />



                        {/* react-hook-form error watching */}
                        {errors.firstNameRequired
                            && errors.lastNameRequired
                            && errors.emailRequired
                            && errors.passwordRequired
                            && <span> This field is important</span>
                        }

                        <button type="Submit"
                            className="bg-gray-800 w-fit  mx-auto mt-5 px-7 py-2 text-white
                            text-lg">Create</button>

                        <Link
                            className=" mx-auto text-sm font-light mt-3 pb-[.3x] border-b  w-fit border-gray-600"
                            to="/account/login"> Sign in
                        </Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CreateAccount