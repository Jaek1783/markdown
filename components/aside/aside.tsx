
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PreOnBoarding from "./pre-on-boarding";
const AsideListComponent = () => {
  const list: { title: string }[] = [
    { title: "1day" },
    { title: "2day" },
    { title: "3day" },
    { title: "4day" },
  ];

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
console.log(activeTitle);
  return (
    <aside className="aside">
        <PreOnBoarding list={list} activeTitle={activeTitle}/>
    </aside>
  );
};

export default AsideListComponent;
