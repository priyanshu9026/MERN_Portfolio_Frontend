import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://mern-portfolio-backend-nz8r.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
      console.log(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>
      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4"
      >
  
        Hey, I'm <span className="text-neutral-200 text-border font-extrabold">Priyanshu Singh</span>
      </h1>
      <h1
        className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]"
      >
        <Typewriter
          words={["FULLSTACK DEVELOPER", "Trainer", "FREELANCER"]}
          loop={50}
          cursor
          typeSpeed={40}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </h1>
      <div
        className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 
      items-center mt-4 md:mt-8 lg:mt-10"
      >
        <Link to={"https://www.youtube.com/@priyanshusingh4695"} target="_blank">
          <Youtube className="text-red-500 w-7 h-7" />
        </Link>
        <Link to="https://www.instagram.com/priyanshu_singh_9026" target="_blank">
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>
       
        <Link to="https://www.linkedin.com/in/priyanshu-singh-1b6678244" target="_blank">
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>
        <Link to="https://x.com/Priyans29473191" target="_blank">
          <Twitter className="text-blue-800 w-7 h-7" />
        </Link>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to="https://github.com/priyanshu9026" target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link to="https://drive.google.com/file/d/1ZhuehhqWG2HY469H6OAi4Ug9I7GIjbfP/view?usp=sharing" target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">
        I'm Priyanshu Singh, a passionate Full-Stack Developer specializing in
        the MERN stack with hands-on experience in building scalable web
        applications. I have a strong foundation in React.js, Node.js,
        Express.js, MongoDB, and Python, along with a deep understanding of REST
        APIs, JWT authentication, and database management.
      </p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
