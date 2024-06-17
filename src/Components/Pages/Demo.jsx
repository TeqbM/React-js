
function Navmenu({menuitems}) {
  const updatedList = menuitems.map((listItems) => {
      return <li key={listItems.toString()}>{listItems} </li>;
  });
  return <ul>{updatedList}</ul>;
}

const menuItems1 = [1, 2, 3, 4, 5];
const menuItems2 = [1, 2, 3, 4, 5, 6];

export default function Demo () {
  return (
    <>
      <div className="container">
        <Navmenu menuitems={menuItems1}/> 
        <Navmenu menuitems={menuItems2}/> 
      </div>
    </>
  )
}
