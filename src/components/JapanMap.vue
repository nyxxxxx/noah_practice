<template>
    <div id="jp-area"></div>
</template>

<script>

import svgJapan from 'svg-japan'

export default {
    name: 'SvgJapanComponent',
}
// 參數說明 https://ka2.org/manual-about-svg-japan
svgJapan({
    element: "#jp-area",//綁定元素
    type: "dense",//地圖模式 full,dense,deform
    stroked: false,
    activeColor: "#2E8BC0",
    withTips: false,
    regionality: true,
    // 縣代號 http://www.kenchikushikai.or.jp/touroku/documents/code-todoufuken.pdf
    regions: [
        {
            id: 1,
            name: "北海道",
            prefs: [1],
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
        {
            id: 2,
            name: "東北",
            prefs: [2, 3, 4, 5, 6, 7],
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
        {
            id: 3,
            name: "關東",
            prefs: [8, 9, 10, 11, 12, 13, 14],
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
        {
            id: 4,
            name: "中部",
            prefs: [15, 16, 17, 18, 19, 20, 21, 22, 23],
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
        {
            id: 5,
            name: "關西",
            prefs: [24, 25, 26, 27, 28, 29, 30],
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
        {
            id: 6,
            name: "中國、四國",//中國、四國
            prefs: [31, 32, 33, 34, 35, 36, 37, 38, 39],//31-35 , 36-39
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
        {
            id: 7,
            name: "九州&沖繩",
            prefs: [40, 41, 42, 43, 44, 45, 46, 47],
            color: "#B1D4E0",
            active: "#2E8BC0",
        },
    ],
    uniformly: false,
    uniformcolor: "#B1D4E0",
    width: "100%",
});

</script>