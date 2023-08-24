import {DownOutlined, UpOutlined} from "@ant-design/icons";
import {useState} from "react";

import * as S from "./question.css"
import { IQuestionProps } from "../page/main/main.types";

export default function Question(props: IQuestionProps) {

    const [click, setClick] =  useState(false)

    const onClickTitle = () : void=> {
        setClick((prev) => !prev)
    }
    return(
        <S.Wrapper>
            <S.TitleWrapper onClick={onClickTitle}>
                <S.Title>{props.data.title}</S.Title>
                {click ?
                <UpOutlined
                rev="some-value" 
                style={{marginLeft: "15px", marginTop: "7px"}}
                 />
                :
                <DownOutlined 
                    rev="some-value" 
                    style={{marginLeft: "15px", marginTop: "7px"}}/>
                    }
            </S.TitleWrapper>
            {click &&<S.Content>
                {props.data.content}
            </S.Content>}
            <hr />
        </S.Wrapper>
    )
}