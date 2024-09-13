
const Facality = () => {

    const facality = [
        {  
          image:"https://i.ibb.co/gMfNCry/HIW1img.png", 
          color:"#fee2e2",
          name:"Step 1",
          title:"Filter & Discover",
          des:"Smart filtering and suggestions make it easy to find"
        },
        {  
          image:"https://i.ibb.co/HYxNRsF/HIW2img.png", 
          color:"#e0e7ff",
          name:"Step 2",
          title:"Add to bag",
          des:"Easily select the correct items and add them to the cart"
        },
        {  
          image:"https://i.ibb.co/3Nw6dKQ/HIW3img.png", 
          color:"#fef9c3",
          name:"Step 3",
          title:"Fast shipping",
          des:"The carrier will confirm and ship quickly to you"
        },
        {  
          image:"https://i.ibb.co/Rg4x6yk/HIW4img.png", 
          color:"#f3e8ff",
          name:"Step 4",
          title:"Enjoy the product",
          des:"Have fun and enjoy your 5-star quality products"
        },
      ];
      
  return (
    <div>
        <div className="content mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
               facality.map((item)=>
             
                <div key={item?.image} className="content">
                     <div className="image  w-full flex justify-center items-center ">
                        <img className="h-auto w-[150px]" src={item?.image} alt="image"/>
                     </div>
                     <div className="text-content flex flex-col justify-center gap-3 my-8 items-center">
                        <div style={{background:item?.color}} className=" inline-block px-3 py-[2px] rounded-full">
                            <p className=" text-[14px] font-semibold font-sans">{item?.name}</p>
                        </div>
                        <div className="title">
                            <h1 className=" text-[16px] font-sans font-bold text-[#111827]">{item?.title}</h1>
                        </div>
                        <div className=" text-center mx-8">
                            <p className=" text-[14px] font-sans text-[#6980b2]">{item?.des}</p>
                        </div>
                     </div>
                </div>
              
              )
            }
        </div>
    </div>
  )
}

export default Facality