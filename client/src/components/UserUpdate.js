import { Component } from "react";

class UserUpdate extends Component{
    render()
    {
        return(
            <div className="info">
                <div className="inputbox">
                    <span className="title">
                        <label>※이름</label>
                    </span>
                    <div className="name">
                        <span className="inputbox">
                            <input type="text" className="nameinput"/>
                        </span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <span className="title">
                            <label>※생년월일</label>
                        </span>
                        <div className="birth">
                            <span className="inputbox">
                                <input type="text" className="birthinput"/>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="button">
                    <button className="modifybtn">수정하기</button>
                </div>
            </div>
        );
    }
}

export default UserUpdate;