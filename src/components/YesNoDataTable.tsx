export type CharacterObject = {
    name: string;
    answers: Record<string, boolean>
}

//可能性のあるキャラの中でtrueとfalseが拮抗する、最もちょうどいい質問を選ぶ
export function chooseBestQuestion(tempCharaList:CharacterObject[]): string {
    const questionKeys = GetRandomQuestionKeyList();

    console.log(tempCharaList);
    let tempChoosenQuestionKey = "";
    let tempAbsScore = 99999;

    for (let i = 0; i < questionKeys.length; i++) {
        console.log(questionKeys[i]);
        const questionKey = questionKeys[i];
        const charaAnswerList = tempCharaList.map(chara => chara.answers[questionKey]);

        //trueとfalseの数を数える
        const counts = charaAnswerList.reduce((acc, value) => {
            value ? acc.trueCount++ : acc.falseCount++;
            return acc;
        }, { trueCount: 0, falseCount: 0 });

        const absScore = Math.abs(counts.trueCount - counts.falseCount);

        console.log(absScore);
        if (tempAbsScore > absScore) {
            tempAbsScore = absScore;
            tempChoosenQuestionKey = questionKey;
        }
    }
    return tempChoosenQuestionKey;
}

function GetRandomQuestionKeyList(): string[] {
    //順番をランダムにしたquestionDic.Keyのリストを返す
    const keys = Object.keys(QuestionDic);
    return keys.sort(() => Math.random() - 0.5);

}

export const QuestionDic: Record<string, string> = {
    "赤": "赤い服を着ていますか？",
    "二": "名前をカタカナで書くと二文字ですか？",
    "三": "名前をカタカナで書くと三文字ですか？",
    "絵本": "『絵本のコッペ』に登場しますか？",
    "ロボミー": "『ロボットガール・ミーツ・ヒューマン！』に登場しますか？",
    "踏切": "『踏切を待ちながら。』に登場しますか？",
    "ロボット": "ロボットですか？",
    "獣耳": "獣のような耳がついていますか？",
    "マフラー": "マフラーやスカーフを首に巻いていますか？",
    "白": "白い服を着ていますか？",
    "名前一意": "明確な名前がゲーム中で明らかになっていますか？",
    "帽子": "頭に何かをかぶっていますか？",
    "魔法": "魔法が使えますか？",
    "名前色": "名前が色に由来していますか？",
    "タイトル": "キャラクター名がゲームのタイトルになっていますか？",
    "浮遊": "オバケ、または幽霊ですか？",


}

// export const StaticCharaList: CharacterObject[] = [
//     {
//         name: "コッペ",
//         answers: {
//             "赤": true,
//             "二": false,
//             "三": true,
//             "絵本": true,
//         }
//     },
//     {
//         name: "ノワ",
//         answers: {
//             "赤": false,
//             "二": true,
//             "三": false,
//             "絵本": true,
//         }
//     },

//     {
//         name: "スカーレット",
//         answers: {
//             "赤": true,
//             "二": false,
//             "三": false,
//             "絵本": false,
//         }
//     },
//     {
//         name: "ニビ",
//         answers: {
//             "赤": false,
//             "二": true,
//             "三": false,
//             "絵本": false,
//         }
//     }

// ]
