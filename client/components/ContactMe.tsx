import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

export default function ContactMe({ }: Props) {
    return (
        <section className='mt-12 flex relative flex-col text-center max-w-7xl px-10  justify-evenly mx-auto items-center'>
            <h3 className="uppercase tracking-[20px] text-secondary text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center text-secondary">
                    I've got just what you need.{" "}
                    <span className="decoration-primary underline">Let's Talk.</span>
                </h4>
            </div>
            <div className="space-y-10">
            </div>
            <form

                className="flex flex-col space-y-2 w-fit mx-auto"
            >
                <div className="flex space-x-2">
                    <input
                        className="contactInput"
                        placeholder="Name"
                        type="text"

                    />
                    <input
                        className="contactInput"
                        placeholder="Email"
                        type="text"
                    />
                </div>
                <input
                    className="contactInput"
                    placeholder="Subject"
                    type="text"
                />
                <textarea
                    className="contactInput h-36"
                    placeholder="Message"
                />

                <button
                    type="submit"
                    className="bg-primary py-5 px-10 rounded-md text-white font-bold text-lg"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}