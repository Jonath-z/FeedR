
const Footer = () => {
  return (
    <div className= "flex  justify-between items-center gap-2 bg-blue text-white p-5 mt-20">
       <div>
        <p className="font-extrabold text-xl">FeedR</p>
        <p className="text-slate-400">©2024 FeedR Inc.</p>
       </div>

        <ul className="flex gap-3 font-bold hover:cursor-pointer">
            <li>Blog</li>
            <li>About us</li>
            <li>Product</li>
            <li>Services</li>
            <li>Developer</li>

        </ul>
    </div>
  )
}

export default Footer
