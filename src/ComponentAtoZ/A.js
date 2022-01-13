import React from 'react'
import { useState } from "react";
import B from './B'
import C from './C'
import D from './D'
import E from './E'
import F from './F'
import G from './G'
import H from './H'
import I from './I'
import J from './J'
import K from './K'
import L from './L'
import M from './M'
import N from './N'
import O from './O'
import P from './P'
import Q from './Q'
import R from './R';
import S from './S';
import T from './T';
import U from './U'
import V from './V'
import W from './W'


function A() {
    const [BISMILLAH, setBISMILLAH] = useState("In the name of Allah, the Beneficent and the Merciful and we praise Him, And send our best wishes to the Noble Prophet.");

    const [para1, setPara1] = useState("Star of The Eyes Name Of Muhammad ﷺ");

    const [para2, setPara2] = useState("Light Of The Heart, Name Of  Muhammed ﷺ");

    const [para3, setPara3] = useState("Aankhon Ka Taara Naame Muhammed ﷺ")

    const [para4, setPara4] = useState("Dil Ka Ujala Naame Muhammed ﷺ");

    const [para5, setPara5] = useState("When Allah Asks Me What Have You Brought Here ﷺ");

    const [para6, setPara6] = useState("I Will Say I Have Name Of  Muhammed ﷺ");

    const [para7, setPara7] = useState("Puchega Maula Laya He Kiya Kiya ﷺ");

    const [para8, setPara8] = useState("Mai Ye Kahunga Naame Muhammed ﷺ");

    const [para9, setPara9] = useState("Allahu Akbar Indeed My Lord ﷺ");

    const [para10, setPara10] = useState("Wrote On Everything Name Of  Muhammed ﷺ");

    const [para11, setPara11] = useState("Allahu Akbar Rabbul Ula Ne ﷺ");

    const [para12, setPara12] = useState("Har SHe Pe Likha Naame Muhammed ﷺ");

    const [para13, setPara13] = useState("If You Desire Wealth Of The Worlds ﷺ");

    const [para14, setPara14] = useState("Keep On Just Chanting Name Of  Muhammed ﷺ");

    const [para15, setPara15] = useState("Daulat Jo Chaho Donon Jahan Ki ﷺ");

    const [para16, setPara16] = useState("Karlo Wazifa Naame Muhammed ﷺ");

    const [para17, setPara17] = useState("Let Me Give My Life For My Raza ﷺ");

    const [para18, setPara18] = useState("Who Taught Me Indeed Name Of  Muhammed ﷺ");

    const [para19, setPara19] = useState("Apne Raza Pe Qurban Jaavo ﷺ");

    const [para20, setPara20] = useState("Jisne SikHea Naame Muhammed ﷺ");

    const [para21, setPara21] = useState("Rizwan Is Shining Because Of Barakah ﷺ");

    const [para22, setPara22] = useState("And The Blessings Of Name Of  Muhammed ﷺ")

    return (
        <React.Fragment>
            <h2>1. {BISMILLAH}</h2>
            <B para1={para1} />
            <C para2={para2} />
            <D para3={para3} />
            <E para4={para4} />
            <F para5={para5} />
            <G para6={para6} />
            <H para7={para7} />
            <I para8={para8} />
            <J para9={para9} />
            <K para10={para10} />
            <L para11={para11} />
            <M para12={para12} />
            <N para13={para13} />
            <O para14={para14} />
            <P para15={para15} />
            <Q para16={para16} />
            <R para17={para17} />
            <S para18={para18} />
            <T para19={para19} />
            <U para20={para20} />
            <V para21={para21} />
            <W para22={para22} />
            
        </React.Fragment>
    )
}

export default A
