"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import "@mantine/core/styles.css";
import { Pagination } from "@mantine/core";
import Image from "next/image";

const Elements: { name: string; desc: string; command: string; example: string, }[] = [
  [
    {
      name: "date",
      desc: "Used to check date and time Format Usage +%m To display only month%H To display hours%M To display minutes %S To display seconds",
      command: "$date or $date+ Format",
      example: "/date.jpg",
    },
    {
      name: "cal",
      desc: "Use to display the calendar",
      command: "$ cal [month] [year]",
      example: "/cal.jpg",
    },
    {
      name: "echo",
      desc: "Print text to the terminal",
      command: "$ echo [text]",
      example: "/echo.jpg",
    },
    {
      name: "ls",
      desc: "If you omit the path, the ls command will check the content of your current directory. To list items inside subfolders, add the -R option. Meanwhile, use -a to show hidden content.",
      command: "$ ls [directory]",
      example: "/ls.jpg",
    },
    {
      name: "ls-s",
      desc: "null",
      command: "$ cd [directory]",
      example: "/ls-s.jpg",
    },
    {
        name: "man",
        desc: "Used to provide manual help oft Sman unix command Sman cat every UNIX command",
        command: "$ man [command]",
        example: "/man.jpg"
      },
    { name: "ls-r", desc: "ls -R gives a recursive listing, including the contents of all subdirectories and their subdirectories and so on.", command: "$ pwd", example: "/ls-r.jpg", },
    { name: "ls-f", desc: "The ls -F command in Linux lists files and directories, and adds a glyph to the end of each file name to indicate its type:", command: "$ pwd", example: "/ls-f.jpg", },
    { name: "ls-h", desc: "The ls -h command in Linux displays file sizes in a human-readable format, such as kilobytes (KB), megabytes (MB), or gigabytes (GB)", command: "$ pwd", example: "/ls-h.jpg", },
    { name: "Mancat", desc: "The cat command in Linux displays the contents of files on the screen. ", command: "$ pwd", example: "/Mancat.jpg", },
    { name: "whoami", desc: "The 'whoami' command in Linux is a built-in utility that displays the username of the current user.", command: "$ whoami", example: "/whoami.jpg", },
    {
        name: "uname",
        desc: "The uname command in Linux is a tool that provides information about a Linux system's hardware and operating system.",
        command: "$ uname -a",
        example: "/uname.jpg",
      },
      { name: "cat", desc: "View file contents", command: "$ cat [filename]", example: "/cat.jpg", },
      {
        name: "touch",
        desc: "Create an empty file",
        command: "$ touch [filename]",
        example: "/touch.jpg",
      },
    {
      name: "mkdir",
      desc: "To create a folder in another location, specify the full path. Otherwise, this command will make the new item in your current working directory.",
      command: "$ mkdir [directory_name]",
      example: ""
    },
    {
      name: "rmdir",
      desc: "The rmdir command won’t work if the directory contains subfolders. To force the deletion, add the –p option. Note that you must own the item you want to remove or use sudo instead.",
      command: "$ rmdir [directory_name]",
      example: ""
    },

    {
      name: "cp",
      desc: "You can also use cp to duplicate the content of one file to another using this syntax. If the target is in another location, specify the full path like so:",
      command: "$ cp [source] [destination]",
      example: ""
    },
    {
      name: "mv",
      desc: "For example, we will move file1.txt from another location to the /new/file/directory path using this command:",
      command: "$ mv [source] [destination]",
      example: ""
    },
    {
      name: "rm",
      desc: "You can add the -r option to remove a folder and its contents, including subdirectories. Use the -i flag to display a confirmation message before the removal or -f to deactivate it completely.",
      command: "$ rm [file_or_directory]",
      example: ""
    },
 
    {
      name: "more",
      desc: "View file contents page by page",
      command: "$ more [filename]",
      example: ""
    },
    {
      name: "less",
      desc: "View file contents with backward navigation",
      command: "$ less [filename]",
      example: ""
    },

    
    {
      name: "who",
      desc: "Show users logged into the system",
      command: "$ who",
      example: ""
    },
  ],
].flat();

const Unix = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="px-2 md:px-20 mb-10">
      <main className=" bg-white rounded-3xl">
        <div className="px-3 pt-3 pb-4 sm:pb-10">
          <Link href="/" className="flex items-center gap-1 ">
            <FaArrowLeft /> Back{" "}
          </Link>
          <h1 className="text-xl font-bold">UNIX Commands</h1>
        </div>

        <div>
          <table className="w-full whitespace-nowrap table-auto pb-3">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200  bg-gray-100">
              <tr>
                <td className="px-4 py-3 ">Sl</td>
                <td className="px-4 py-3 ">Command Name</td>
                <td className="px-4 py-3 ">Description</td>
                <td className="px-4 py-3 ">syntax</td>
                <td className="px-4 py-3 ">Example</td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 ">
              {!!Elements &&
                Elements.map(
                  (item, i) =>
                    i >= 10 * page - 10 &&
                    i + 1 <= 10 * page && (
                      <tr key={i}>
                        <td className="px-4 py-3">
                          {i < 9 && 0}
                          {++i}.
                        </td>
                        <td className="px-4 py-3">
                          <span className="bg-slate-200 px-3 py-2 rounded-full">
                            {item?.name}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="w-56 sm:w-80 text-wrap">
                            {item?.desc}
                          </div>
                        </td>
                        <td className="px-4 py-3">{item?.command}</td>
                        <td className="px-4 py-3">
                        {item?.example && <Image
                            className=""
                            src={item?.example}
                            alt={`${item?.name} example`}
                            width={200}
                            height={20}
                          />}
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
          {Elements?.length >= 15 && (
            <div className="bg-white py-3 justify-center flex">
              <Pagination
                total={Math.ceil(Elements?.length / 15)}
                boundaries={1}
                defaultValue={page ? page : 1}
                onChange={(i) => setPage(i)}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Unix;
