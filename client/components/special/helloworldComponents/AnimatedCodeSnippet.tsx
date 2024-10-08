"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-typescript";
import Image from "next/image";
import { CardContainer } from "./3d-card";

const snippets = [
  {
    language: "Java",
    code: 'System.out.println("Hello, World!");',
    iconUrl: "/code-icon/java.png",
  },
  {
    language: "JavaScript",
    code: 'console.log("Hello, World!");',
    iconUrl: "/code-icon/js.png",
  },
  {
    language: "Python",
    code: 'print("Hello, World!")',
    iconUrl: "/code-icon/python.png",
  },
  {
    language: "C#",
    code: 'Console.WriteLine("Hello, World!");',
    iconUrl: "/code-icon/c-sharp.png",
  },
  {
    language: "Ruby",
    code: 'puts "Hello, World!"',
    iconUrl: "/code-icon/ruby.png",
  },
  {
    language: "Go",
    code: 'fmt.Println("Hello, World!")',
    iconUrl: "/code-icon/go-lang.png",
  },
  {
    language: "Rust",
    code: 'println!("Hello, World!");',
    iconUrl: "/code-icon/rust.jpeg",
  },
  {
    language: "Swift",
    code: 'print("Hello, World!")',
    iconUrl: "/code-icon/swift.png",
  },
  {
    language: "Kotlin",
    code: 'println("Hello, World!")',
    iconUrl: "/code-icon/kotlin.png",
  },
  {
    language: "TypeScript",
    code: 'console.log("Hello, World!");',
    iconUrl: "/code-icon/typescript.png",
  },
];

const ScrollingCodeSnippets = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    const animateScroll = async () => {
      await controls.start({
        y: "-100%",
        transition: {
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    animateScroll();
  }, [controls]);

  return (
    <CardContainer className="inter-var ide-rotate">
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-between items-center w-full bg-[#1e1e1e] px-2 py-1 text-white rounded-t-md">
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-xs text-gray-400">VS Code</span>
        <button className="text-xs text-gray-400 hover:text-white">...</button>
      </div>
      <div
        ref={containerRef}
        className="w-[30vw] h-[80vh] overflow-hidden bg-[#1e1e1ebd]"
      >
        <motion.div animate={controls}>
          {[...snippets, ...snippets].map((snippet, index) => (
            <div key={index} className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-start gap-3">
                <Image
                  src={snippet.iconUrl}
                  width={25}
                  height={25}
                  alt={snippet.language}
                  loading="lazy"
                />
                <h3 className="text-sm font-semibold text-white mb-2">
                  {snippet.language}
                </h3>
              </div>

              <pre className="text-sm">
                <code className={`language-${snippet.language.toLowerCase()}`}>
                  {snippet.code}
                </code>
              </pre>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-between items-center w-full h-[20px] bg-[#1e1e1e] px-2 py-1 text-white rounded-b-md"></div>
      </div>
      </CardContainer>
  );
};

export default ScrollingCodeSnippets;
