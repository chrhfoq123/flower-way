import { Component } from "react";

class Register extends Component
{
    render()
    {
        return(
            <div className="register">
                <div className="input-box">
                    <span className="title">
                        <label>※ 이름</label>
                    </span>
                    <span className="write-box">
                        <input value={"test"} />
                    </span>
                </div>
                <div className="input-box">
                    <span className="title">
                        <label>※ 이름</label>
                    </span>
                    <span className="write-box">
                        <input value={"test"} />
                    </span>
                </div>
                <div className="input-box">
                    <span className="title">
                        <label>※ 이용약관</label>
                    </span>
                    <span>
                        <textarea rows={5}>
                            약관내용 약관내용 약관내용 약관내용 약관내용 약관내용약관내용 약관내용 약관내용\n
                            약관내용 약관내용 약관내용약관내용 약관내용 약관내용약관내용 약관내용 약관내용
                        </textarea>
                    </span>
                    <span className="agree">
                        <input type={"checkbox"}/>
                        <label className="agree-text">이용약관 동의하기</label>
                    </span>
                </div>

                <div className="btn-box">
                    <span className="btn">회원가입</span>
                </div>
                
            </div>
        );
    }
}
export default Register;