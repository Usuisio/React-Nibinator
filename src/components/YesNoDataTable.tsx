export type CharacterObject = {
    id: number;
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
    "絵本": "『絵本のコッペ』に登場しますか？"

}

export const StaticCharaList: CharacterObject[] = [
    {
        id: 1,
        name: "コッペ",
        answers: {
            "赤": true,
            "二": false,
            "三": true,
            "絵本": true,
        }
    },
    {
        id: 2,
        name: "ノワ",
        answers: {
            "赤": false,
            "二": true,
            "三": false,
            "絵本": true,
        }
    },

    {
        id: 3,
        name: "スカーレット",
        answers: {
            "赤": true,
            "二": false,
            "三": false,
            "絵本": false,
        }
    },
    {
        id: 4,
        name: "ニビ",
        answers: {
            "赤": false,
            "二": true,
            "三": false,
            "絵本": false,
        }
    }

]
