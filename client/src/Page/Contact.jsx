import InnerTitle from "../UI/InnerTitle"
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Input,ButtonToolbar, Button } from 'rsuite';

const Contact = () => {
  return (
    <div>
        <div className="content  md:flex gap-20 mx-10 my-8">
            <div className="text-area w-full md:w-[50%] ">
                <div className="content">
                    <div className="title">
                        <InnerTitle className="first-letter:uppercase" title="contact us" />
                    </div>
                    <div className="desc">
                        <p className=" font-sans text-base font-medium">
                           Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
                        </p>
                    </div>
                    <div className="social my-8">
                        <div className="text">
                            <div className="icon border-b border-t py-2 flex font-sans items-center gap-2 text-black">
                                <p><CiLocationOn className=" text-xl mt-2 font-sans" /></p><p>Banani Dhaka ,R:15,H:44</p>
                            </div>
                            <div className="icon  py-2 flex font-sans items-center gap-2 text-black">
                                <p><IoCallOutline className=" text-xl mt-2 font-sans" /></p><p>01728262111</p>
                            </div>
                            <div className="icon border-b border-t py-2 flex font-sans items-center gap-2 text-black">
                                <p><MdOutlineEmail className=" text-xl mt-2 font-sans" /></p><p>sheikhrakib883@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="from w-full  md:w-[50%]">
                <InnerTitle title="Drop Message"/>
                <div className="contack flex flex-col gap-4">
                    <div className="name">
                        <p className=" font-lg my-2 px-1 font-semibold">Your Name</p>
                        <Input size="lg" title="First Name" placeholder="First name"/>
                    </div>
                    <div className="name">
                        <p className=" font-lg my-2 px-1 font-semibold">Your Last Name</p>
                        <Input size="lg" title="First Name" placeholder="Last name"/>
                    </div>
                    <div className="name">
                        <p className=" font-lg my-2 px-1 font-semibold">Your gmail</p>
                        <Input size="lg" title="First Name" placeholder="Inter gmail"/>
                    </div>
                    <div className="name">
                        <p className=" font-lg my-2 px-1 font-semibold">Subject</p>
                        <Input size="lg" title="First Name" placeholder="Subject"/>
                    </div>
                    <div className="name">
                        <p className=" font-lg my-2 px-1 font-semibold">Message</p>
                        <Input as="textarea" rows={3} placeholder="Message" />
                    </div>
                    <ButtonToolbar>
                        <Button>Send Message</Button>
                    </ButtonToolbar>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact