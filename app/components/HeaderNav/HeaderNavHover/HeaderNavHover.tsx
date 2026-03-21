import "./index.scss";

interface Props{
    classname: "left" | "right"
    listItems: string[],
    navLinks: string[]
}


export default function HeaderNavHover({listItems, classname, navLinks}: Props) {
  return (
    <div className={"dropdown-list__" + classname}>
        <ul>
            {listItems.map((item,i) => 
                <div className="dropdown-list__div_option">
                    <a href={navLinks[i]}>
                        <option key={item} value={item}>{item}</option>
                    </a>
                </div>
            )}
        </ul>
    </div>
  )
}
