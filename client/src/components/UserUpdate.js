import { Component } from "react";

class UserUpdate extends Component{
    render()
    {
        return(
            <div className="userupdate">
                ※이름
                <div>
                    <input type="text" className="name">
                    </input>
                </div>
                <br/>
                <br/>
                <div>
                    ※생년월일
                </div>
                <div>
                    <input type="text" className="birth">
                        
                    </input>
                </div>

                <button className="button">수정하기</button>
            </div>
        );
    }
}

export default UserUpdate;