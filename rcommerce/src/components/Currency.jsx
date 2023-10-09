import { LiaHashtagSolid } from 'react-icons/lia'

const Currency = () => {

    return (
        <>
            <div className='py-5 flex justify-center flex-col items-center'>

                <p className='text-gray-400 text-sm text-left w-fit mb-2'>Country/region</p>

                <div className="buttonWapper border w-fit px-3 py-3 flex">
                    <p className='flex item-center'>NGN<LiaHashtagSolid /> |
                        <select
                            name=""
                            id=""
                            className='border-none outline-none custom-select'
                        >
                            <option value="" >Nigeria</option>
                            <option value="" className='px-2 py-2'>United States</option>
                        </select>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Currency