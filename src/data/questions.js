export const questions = [
  // E vs I (10문항)
  {
    id: 1,
    type: "E/I",
    text: "주말에 시간이 생겼을 때, 나는 보통...",
    options: [
      { text: "친구들을 만나서 신나게 논다.", value: "E" },
      { text: "집에서 혼자만의 시간을 가지며 쉰다.", value: "I" }
    ]
  },
  {
    id: 2,
    type: "E/I",
    text: "새로운 모임에 나갔을 때, 나는...",
    options: [
      { text: "먼저 사람들에게 다가가 대화를 주도한다.", value: "E" },
      { text: "누군가 말을 걸어줄 때까지 기다리는 편이다.", value: "I" }
    ]
  },
  {
    id: 3,
    type: "E/I",
    text: "스트레스를 받을 때, 나는...",
    options: [
      { text: "사람들과 만나서 수다를 떨며 푼다.", value: "E" },
      { text: "혼자 조용히 생각하거나 좋아하는 취미를 즐기며 푼다.", value: "I" }
    ]
  },
  {
    id: 4,
    type: "E/I",
    text: "내 생각이 정리되는 방식은...",
    options: [
      { text: "말을 하면서 생각도 같이 정리된다.", value: "E" },
      { text: "머릿속으로 충분히 생각한 뒤에 말한다.", value: "I" }
    ]
  },
  {
    id: 5,
    type: "E/I",
    text: "여러 사람과 함께 있는 자리에서 나는...",
    options: [
      { text: "분위기 메이커 역할을 자주 한다.", value: "E" },
      { text: "주로 듣는 편이며, 리액션을 잘 해준다.", value: "I" }
    ]
  },
  {
    id: 6,
    type: "E/I",
    text: "에너지를 얻는 방식은...",
    options: [
      { text: "외부 활동과 사람들과의 교류를 통해.", value: "E" },
      { text: "혼자만의 내면적인 시간과 휴식을 통해.", value: "I" }
    ]
  },
  {
    id: 7,
    type: "E/I",
    text: "친구가 갑자기 오늘 만나자고 한다면?",
    options: [
      { text: "좋지! 바로 나갈 준비를 한다.", value: "E" },
      { text: "아... 오늘은 쉬고 싶은데, 다음으로 미룬다.", value: "I" }
    ]
  },
  {
    id: 8,
    type: "E/I",
    text: "나의 관심사는 주로...",
    options: [
      { text: "외부 세계, 사람, 그리고 사건들에 향해 있다.", value: "E" },
      { text: "나의 내면 세계, 생각, 감정에 집중되어 있다.", value: "I" }
    ]
  },
  {
    id: 9,
    type: "E/I",
    text: "처음 해보는 활동을 할 때 나는...",
    options: [
      { text: "일단 부딪혀보고 다른 사람들과 같이 해본다.", value: "E" },
      { text: "먼저 찾아보고 혼자 연습해본 뒤에 참여한다.", value: "I" }
    ]
  },
  {
    id: 10,
    type: "E/I",
    text: "휴가 계획을 세울 때 내가 선호하는 것은...",
    options: [
      { text: "사람들이 많고 왁자지껄한 유명 관광지.", value: "E" },
      { text: "조용하고 한적하게 쉴 수 있는 곳.", value: "I" }
    ]
  },

  // S vs N (10문항)
  {
    id: 11,
    type: "S/N",
    text: "무언가를 설명할 때 나는 주로...",
    options: [
      { text: "구체적이고 사실적인 세부 사항을 말한다.", value: "S" },
      { text: "전체적인 그림이나 비유, 의미를 강조한다.", value: "N" }
    ]
  },
  {
    id: 12,
    type: "S/N",
    text: "새로운 전자제품을 샀을 때 나는...",
    options: [
      { text: "설명서를 꼼꼼히 읽어보고 순서대로 해본다.", value: "S" },
      { text: "설명서 없이 일단 이것저것 눌러보며 기능을 파악한다.", value: "N" }
    ]
  },
  {
    id: 13,
    type: "S/N",
    text: "미래에 대해 생각할 때...",
    options: [
      { text: "당장 내일, 다음 주 등 현실적이고 가까운 미래를 생각한다.", value: "S" },
      { text: "먼 훗날, 일어나지 않은 일에 대한 상상을 자주 한다.", value: "N" }
    ]
  },
  {
    id: 14,
    type: "S/N",
    text: "내가 더 선호하는 대화 주제는...",
    options: [
      { text: "일상에서 일어났던 일이나 경험담.", value: "S" },
      { text: "만약에~로 시작하는 상상이나 추상적인 아이디어.", value: "N" }
    ]
  },
  {
    id: 15,
    type: "S/N",
    text: "영화나 책을 볼 때 나는...",
    options: [
      { text: "스토리의 흐름과 인물들의 실제 행동에 집중한다.", value: "S" },
      { text: "그 속에 숨겨진 의미나 상징, 복선을 찾는 것을 좋아한다.", value: "N" }
    ]
  },
  {
    id: 16,
    type: "S/N",
    text: "문제를 해결할 때 나는...",
    options: [
      { text: "과거의 경험과 증명된 방법을 활용한다.", value: "S" },
      { text: "새롭고 창의적인 방법을 시도해본다.", value: "N" }
    ]
  },
  {
    id: 17,
    type: "S/N",
    text: "내가 더 일하기 편한 환경은...",
    options: [
      { text: "규칙과 체계가 명확하게 잡혀 있는 곳.", value: "S" },
      { text: "자유롭게 아이디어를 내고 틀에 얽매이지 않는 곳.", value: "N" }
    ]
  },
  {
    id: 18,
    type: "S/N",
    text: "길을 찾을 때 나는...",
    options: [
      { text: "정확한 랜드마크나 주소, 방향을 기억한다.", value: "S" },
      { text: "전체적인 지도의 형태나 대략적인 감각으로 찾는다.", value: "N" }
    ]
  },
  {
    id: 19,
    type: "S/N",
    text: "멍 때릴 때 내 머릿속은...",
    options: [
      { text: "오늘 할 일이나 어제 먹은 것 등 현실적인 생각.", value: "S" },
      { text: "우주는 어떻게 생겼을까 같은 엉뚱한 상상.", value: "N" }
    ]
  },
  {
    id: 20,
    type: "S/N",
    text: "내가 더 좋아하는 표현은...",
    options: [
      { text: "'나무'를 본다.", value: "S" },
      { text: "'숲'을 본다.", value: "N" }
    ]
  },

  // T vs F (10문항)
  {
    id: 21,
    type: "T/F",
    text: "친구가 우울해서 머리 스타일을 바꿨다고 한다면?",
    options: [
      { text: "무슨 일 있어? 왜 우울해? (공감 먼저)", value: "F" },
      { text: "어떻게 바꿨어? 사진 보여줘! (사실 확인 먼저)", value: "T" }
    ]
  },
  {
    id: 22,
    type: "T/F",
    text: "의사결정을 내릴 때 나에게 더 중요한 것은...",
    options: [
      { text: "논리적이고 객관적인 사실과 원칙.", value: "T" },
      { text: "사람들과의 관계와 나의 감정.", value: "F" }
    ]
  },
  {
    id: 23,
    type: "T/F",
    text: "고민 상담을 할 때 내가 원하는 반응은...",
    options: [
      { text: "해결책을 제시해주고 객관적으로 분석해주는 것.", value: "T" },
      { text: "내 마음에 공감해주고 위로해주는 것.", value: "F" }
    ]
  },
  {
    id: 24,
    type: "T/F",
    text: "대화를 하던 중 의견 충돌이 발생했다면...",
    options: [
      { text: "맞고 틀린 것을 확실하게 짚고 넘어간다.", value: "T" },
      { text: "상대방의 기분이 상하지 않게 부드럽게 넘어간다.", value: "F" }
    ]
  },
  {
    id: 25,
    type: "T/F",
    text: "거절을 해야 할 때 나는...",
    options: [
      { text: "이유를 명확히 설명하며 단호하게 거절한다.", value: "T" },
      { text: "상처받을까 걱정되어 돌려서 말하거나 미안해한다.", value: "F" }
    ]
  },
  {
    id: 26,
    type: "T/F",
    text: "칭찬을 들을 때 더 기분 좋은 말은...",
    options: [
      { text: "'너 정말 일 잘한다, 똑똑하다.'", value: "T" },
      { text: "'너 정말 따뜻한 사람이다, 고마워.'", value: "F" }
    ]
  },
  {
    id: 27,
    type: "T/F",
    text: "친구가 시험에 떨어졌다고 할 때 내 반응은...",
    options: [
      { text: "다음엔 어떤 부분을 보완할지 같이 생각해보자.", value: "T" },
      { text: "많이 속상하겠다... 맛있는 거 먹으러 갈까?", value: "F" }
    ]
  },
  {
    id: 28,
    type: "T/F",
    text: "내가 생각하는 '공정함'이란...",
    options: [
      { text: "모두에게 예외 없이 동일한 규칙을 적용하는 것.", value: "T" },
      { text: "각자의 상황과 맥락을 고려하여 대우하는 것.", value: "F" }
    ]
  },
  {
    id: 29,
    type: "T/F",
    text: "팀 프로젝트에서 팀원이 실수를 했을 때...",
    options: [
      { text: "실수를 바로잡고 어떻게 해결할지 집중한다.", value: "T" },
      { text: "팀원이 당황하지 않게 다독여준 뒤 해결책을 찾는다.", value: "F" }
    ]
  },
  {
    id: 30,
    type: "T/F",
    text: "나를 더 잘 나타내는 단어는...",
    options: [
      { text: "객관성, 분석, 이성", value: "T" },
      { text: "조화, 공감, 감성", value: "F" }
    ]
  },

  // J vs P (10문항)
  {
    id: 31,
    type: "J/P",
    text: "여행을 갈 때 나의 스타일은...",
    options: [
      { text: "시간 단위로 일정표를 짜고 그대로 움직이는 편이다.", value: "J" },
      { text: "숙소와 큰 틀만 잡고, 나머지는 그날 기분에 따라 정한다.", value: "P" }
    ]
  },
  {
    id: 32,
    type: "J/P",
    text: "일을 시작할 때 나는...",
    options: [
      { text: "목표와 마감일을 명확히 하고 계획적으로 진행한다.", value: "J" },
      { text: "일단 시작하고 상황에 맞게 유연하게 대처한다.", value: "P" }
    ]
  },
  {
    id: 33,
    type: "J/P",
    text: "내 방의 상태는 보통...",
    options: [
      { text: "물건들이 제자리에 잘 정리정돈 되어 있다.", value: "J" },
      { text: "다소 어지러워 보이지만 나만의 질서가 있다.", value: "P" }
    ]
  },
  {
    id: 34,
    type: "J/P",
    text: "주말 약속을 잡을 때...",
    options: [
      { text: "며칠 전부터 시간과 장소를 확실하게 정해둔다.", value: "J" },
      { text: "당일날 연락해서 상황 보고 만난다.", value: "P" }
    ]
  },
  {
    id: 35,
    type: "J/P",
    text: "과제가 주어졌을 때 나는...",
    options: [
      { text: "미리미리 조금씩 해두어 여유롭게 끝낸다.", value: "J" },
      { text: "마감일이 다가와야 폭발적인 집중력으로 끝낸다.", value: "P" }
    ]
  },
  {
    id: 36,
    type: "J/P",
    text: "계획이 틀어졌을 때 나는...",
    options: [
      { text: "스트레스를 받고 빨리 새로운 계획을 세워야 마음이 편하다.", value: "J" },
      { text: "그럴 수도 있지 하고 상황에 맞게 다른 것을 즐긴다.", value: "P" }
    ]
  },
  {
    id: 37,
    type: "J/P",
    text: "마트에 장을 보러 갈 때...",
    options: [
      { text: "살 물건의 목록을 미리 적어서 간다.", value: "J" },
      { text: "가서 돌아보며 끌리는 것을 산다.", value: "P" }
    ]
  },
  {
    id: 38,
    type: "J/P",
    text: "나에게 규칙이란...",
    options: [
      { text: "효율성을 위해 되도록 지켜야 하는 것.", value: "J" },
      { text: "상황에 따라 융통성 있게 바꿀 수 있는 것.", value: "P" }
    ]
  },
  {
    id: 39,
    type: "J/P",
    text: "어떤 일을 할 때 나의 방식은...",
    options: [
      { text: "과정보다 결과를 마무리 짓는 것을 중요하게 생각한다.", value: "J" },
      { text: "결과보다 진행하는 과정 자체의 즐거움을 중시한다.", value: "P" }
    ]
  },
  {
    id: 40,
    type: "J/P",
    text: "내가 편안함을 느끼는 상태는...",
    options: [
      { text: "모든 일이 결정되고 통제 하에 있을 때.", value: "J" },
      { text: "다양한 가능성이 열려 있고 자유로울 때.", value: "P" }
    ]
  }
];
