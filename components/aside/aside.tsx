import Link from "next/link";
const AsideListComponent = ()=>{
    const list:{
        title:string
    }[] = [
        {title : '1day'},
        {title : '2day'},
        {title : '3day'},
        {title : '4day'},
      ]
    return <aside className="aside">
        <span>원티드 프리온보딩</span>
        <ol>
            {list.map((l,index)=>{
                return <li key={index}>
                    <Link href={l.title}>{l.title}</Link>
                    </li>
            })}
        </ol>
    </aside>
};

export default AsideListComponent;