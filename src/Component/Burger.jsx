import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Burger = () => {
  const [total, setTotal] = useState(80)
  const stateBurger = useSelector((state) => state.burger);
  const stateMenu = useSelector((state) => state.menu);
  const dispatch = useDispatch()
  let renderBurgerMid = () => {
    let content = [];
    for (let propBurger in stateBurger) {
      let breadMid = []
      for (let i = 0; i < stateBurger[propBurger]; i++) {
        breadMid.push(<div className={propBurger} key={i}></div>)
      }
      content.push(breadMid)
    }
    return content;
    // Cách 2
    // let arrBuger = Object.entries(stateBurger)
    // return arrBuger.map(([propsBurger,value],index) => {
    //   let breadMid = [];
    //   for (let i = 0; i < value; i++){
    //     breadMid.push(<div className={propsBurger} key = {i}></div>)
    //   }
    //   return breadMid;
    // })
  }
  useEffect( () => {
    setTotal((total) => {
      let arrTotal = []
      for (let props in stateBurger) {
        let totalProps = stateBurger[props]*stateMenu[props]
       arrTotal.push(totalProps)
        // total += totalProps;
      }
     total =  arrTotal.reduce((total,item) => {
        return total + item
      })
    
      console.log(arrTotal)
      return total
    })
  },[stateBurger])



  const renderBeugerMenu = () => {
      let arrMenu = Object.entries(stateMenu).map(([propItem,value],index) => {
        
        return  <tr key = {index}>
        <td>{propItem}</td>
        <td>
          <button className="btn btn-success mx-3" onClick = {() => {
            const action = {
              type:'TANG_GIAM_SO_LUONG',
              propItem,
              value,
              payload: 1 
            }
            dispatch(action)
          }}>+</button>
            {stateBurger[propItem]}
          <button className="btn btn-danger mx-3" onClick = {() => {
            const action = {
              type:'TANG_GIAM_SO_LUONG',
              propItem,
              value,
              payload: -1
            }
            dispatch(action)
          }}>-</button>
        </td>
        <td>
        {value}
        </td>
        <td>{value * stateBurger[propItem] }</td>
      </tr>
      })
      return arrMenu
     

  }
 




  return (
    <div className="container">
      <h2 className="text-center">Bài tập Burger</h2>
      <div className="row">
        <div className="col-6">
          <div className="burger-left">
            <div className="breadTop"></div>
            {/* <div className="salad"></div>
            <div className="beef"></div>
            <div className="cheese"></div> */}
            {renderBurgerMid()}
            <div className="breadBottom"></div>
          </div>
        </div>
        <div className="col-6">
          <div className="burger-right">
            <h3 className="text-center text-success">Chọn thức ăn</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>

                </tr>

              </thead>
              <tbody>
              {renderBeugerMenu()}
            <tr>
            <td colSpan = {3}></td>
            <td>{total}</td>

            </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
