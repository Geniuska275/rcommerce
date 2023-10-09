import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


const Recover = () => {

    // https://reuplane.com/account/login#recover
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    return (
        <section className="flex justify-center items-center h-[81vh] ">

            <div className="wrap flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold  mb-5 text-center w-[80%]"> Reset your password </h2>

                <p
                    className=" mb-10 text-md text-gray-900 w-[80%] text-center "
                    to="/"> We will send you an email to reset your password</p>

                <form onSubmit={handleSubmit} className="w-fit flex flex-col">
                    <input
                        className="border border-gray-500  focus:border-gray-800 focus:border-2 py-3 px-3 text-lg placeholder:text-lg
                            mb-5 focus:rounded-0 focus:outline-none"
                        // defaultValue="Email"
                        placeholder="Email"
                        {...register("email", { required: true })} />

                    {/* react-hook-form error watching */}
                    {errors.emailRequired && <span> This field is important</span>}

                    <input type="submit"
                        className="bg-gray-800 w-fit  mx-auto mt-5 px-7 py-2 text-white
                            text-lg " />

                    <Link
                        className=" mx-auto text-sm font-light mt-3 pb-[.3x] border-b  w-fit border-gray-600"
                        to="/account/login"> Cancel
                    </Link>

                </form>
            </div>
        </section>
    )
}

export default Recover