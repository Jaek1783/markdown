
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PreOnBoarding from "./pre-on-boarding";
import Project from "./project";
const AsideListComponent = () => {
  const list: { title: string }[] = [
    { title: "1day" },
    { title: "2day" },
    { title: "3day" },
  ];
  const project : {title:string}[] = [
    {title: "bbangssaem"},
    {title: "janet"},
    {title: "salad"},
    {title: "planner"},
  ]

  const router = useRouter();
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  useEffect(() => {
    if (router.query.slug) {
      setActiveTitle(router.query.slug as string);
    }
    else {
        setActiveTitle('none');
    }
  }, [router.query.slug]);
// console.log(activeTitle);
  return (
    <aside className="aside">
        <Project projects={project} activeTitle={activeTitle}/>
        <PreOnBoarding list={list} activeTitle={activeTitle}/>
    </aside>
  );
};

export default AsideListComponent;
