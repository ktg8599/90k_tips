const selectedItems = new Array(20).fill(null);

const researchData = {
    병사: [
      {
        id: "soldier_1",
        name: "장과",
        minLevel: 1,
        imageUrl: "/images/soldiers/dagger-axe.png",
        description: "기본적인 보병 부대입니다. 근접 전투에 특화되어 있습니다."
      },
      {
        id: "soldier_2",
        name: "장궁",
        minLevel: 1,
        imageUrl: "/images/soldiers/longbowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_3",
        name: "쇠뇌",
        minLevel: 1,
        imageUrl: "/images/soldiers/crossbowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_4",
        name: "독궁",
        minLevel: 1,
        imageUrl: "/images/soldiers/toxibowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_5",
        name: "사냥꾼",
        minLevel: 1,
        imageUrl: "/images/soldiers/hunter.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_6",
        name: "강화 쇠뇌",
        minLevel: 1,
        imageUrl: "/images/soldiers/imp-crossbowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_7",
        name: "화궁",
        minLevel: 1,
        imageUrl: "/images/soldiers/firebowman.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_8",
        name: "긴창",
        minLevel: 4,
        imageUrl: "/images/soldiers/lancer.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_9",
        name: "무거운 방패",
        minLevel: 4,
        imageUrl: "/images/soldiers/heavy-shield.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_10",
        name: "창&방패",
        minLevel: 4,
        imageUrl: "/images/soldiers/spear-shield.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_11",
        name: "맥도",
        minLevel: 4,
        imageUrl: "/images/soldiers/modao.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_12",
        name: "망치&방패",
        minLevel: 4,
        imageUrl: "/images/soldiers/hammer-shield.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_13",
        name: "장검",
        minLevel: 4,
        imageUrl: "/images/soldiers/long-swords.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_14",
        name: "검&방패",
        minLevel: 4,
        imageUrl: "/images/soldiers/sword-shield.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_15",
        name: "쌍창",
        minLevel: 4,
        imageUrl: "/images/soldiers/twin.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_16",
        name: "기병(창)",
        minLevel: 7,
        imageUrl: "/images/soldiers/spear-cav.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_17",
        name: "기병(대도)",
        minLevel: 7,
        imageUrl: "/images/soldiers/broadsword-cav.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_18",
        name: "기병(활)",
        minLevel: 7,
        imageUrl: "/images/soldiers/bow-cav.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_19",
        name: "기병(도끼)",
        minLevel: 7,
        imageUrl: "/images/soldiers/axe-cav.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_20",
        name: "중기병",
        minLevel: 7,
        imageUrl: "/images/soldiers/heavy-cav.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
      {
        id: "soldier_21",
        name: "쇠뇌차",
        minLevel: 10,
        imageUrl: "/images/soldiers/trebuchet.png",
        description: "훈련된 정예 보병입니다. 높은 방어력과 공격력을 가집니다."
      },
    ],
    정책: [
      {
        id: 'policy_1',
        name: "동시 추진",
        minLevel: 2,
        imageUrl: "/images/policy/harmonized-steps.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_2',
        name: "급속 행군",
        minLevel: 2,
        imageUrl: "/images/policy/rapid-march.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_3',
        name: "부지런한 훈련",
        minLevel: 2,
        imageUrl: "/images/policy/perseverance.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_4',
        name: "도광양회",
        minLevel: 2,
        imageUrl: "/images/policy/hidden-prowess.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_5',
        name: "완공 임박",
        minLevel: 2,
        imageUrl: "/images/policy/imminent-victory.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_6',
        name: "특급 보상",
        minLevel: 2,
        imageUrl: "/images/policy/super-bounty.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_7',
        name: "다다 익선",
        minLevel: 5,
        imageUrl: "/images/policy/more-is-better.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_8',
        name: "무역 중시",
        minLevel: 5,
        imageUrl: "/images/policy/empower-trade.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_9',
        name: "재점화",
        minLevel: 8,
        imageUrl: "/images/policy/rekindled.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_10',
        name: "수호의 심장",
        minLevel: 5,
        imageUrl: "/images/policy/heart-of-protection.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_11',
        name: "장인 정신",
        minLevel: 5,
        imageUrl: "/images/policy/equisite-architecture.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_12',
        name: "환상 할인",
        minLevel: 5,
        imageUrl: "/images/policy/fantastic-bargain.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_13',
        name: "긴급 지원",
        minLevel: 11,
        imageUrl: "/images/policy/emergency-relief.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_14',
        name: "농사 달인",
        minLevel: 11,
        imageUrl: "/images/policy/farm-mogul.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_15',
        name: "채석 달인",
        minLevel: 11,
        imageUrl: "/images/policy/quarry-mogul.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_16',
        name: "벌목 달인",
        minLevel: 11,
        imageUrl: "/images/policy/sawmill-mogul.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_17',
        name: "군국주의",
        minLevel: 18,
        imageUrl: "/images/policy/military-regime.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_18',
        name: "대풍작",
        minLevel: 14,
        imageUrl: "/images/policy/foodie.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_19',
        name: "풍부한 목재",
        minLevel: 14,
        imageUrl: "/images/policy/woodpile.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_20',
        name: "풍부한 석재",
        minLevel: 14,
        imageUrl: "/images/policy/rockin.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
      {
        id: 'policy_21',
        name: "인재 모집",
        minLevel: 11,
        imageUrl: "/images/policy/talent-acquisition.png",
        description: "보급 체계를 개선하여 자원 소비를 20% 감소시킵니다."
      },
    ],
    장비: [
      {
        id: 'equipment_1',
        name: "치료검",
        minLevel: 3,
        imageUrl: "/images/equipment/cureblade.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_2',
        name: "사슬 갑옷",
        minLevel: 3,
        imageUrl: "/images/equipment/chainmail.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_3',
        name: "회심검",
        minLevel: 3,
        imageUrl: "/images/equipment/crit-blade.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_4',
        name: "흡혈검",
        minLevel: 3,
        imageUrl: "/images/equipment/leech-sword.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_5',
        name: "피해 반사 갑옷",
        minLevel: 3,
        imageUrl: "/images/equipment/dmg-reflection.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_6',
        name: "유성추",
        minLevel: 3,
        imageUrl: "/images/equipment/meteor-hammer.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_7',
        name: "황월",
        minLevel: 3,
        imageUrl: "/images/equipment/golden-axe.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_8',
        name: "환도",
        minLevel: 3,
        imageUrl: "/images/equipment/circle-blade.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_9',
        name: "무쇠 방패",
        minLevel: 3,
        imageUrl: "/images/equipment/iron-shield.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_10',
        name: "술 조롱박",
        minLevel: 6,
        imageUrl: "/images/equipment/wine-gourd.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_11',
        name: "다트",
        minLevel: 6,
        imageUrl: "/images/equipment/darts.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_12',
        name: "덩쿨 방패",
        minLevel: 6,
        imageUrl: "/images/equipment/rattan-shield.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_13',
        name: "구리 방패",
        minLevel: 6,
        imageUrl: "/images/equipment/copper-shield.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_14',
        name: "낭아봉",
        minLevel: 6,
        imageUrl: "/images/equipment/mace.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_15',
        name: "군기",
        minLevel: 6,
        imageUrl: "/images/equipment/army-flag.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_16',
        name: "건곤도",
        minLevel: 6,
        imageUrl: "/images/equipment/qiankun-saber.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_17',
        name: "월아도",
        minLevel: 6,
        imageUrl: "/images/equipment/crescent-blade.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_18',
        name: "태양 갑옷",
        minLevel: 6,
        imageUrl: "/images/equipment/sunfire-armor.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_19',
        name: "정심회",
        minLevel: 6,
        imageUrl: "/images/equipment/helmet-of-calmness.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_20',
        name: "회피 신발",
        minLevel: 9,
        imageUrl: "/images/equipment/dodge-boots.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_21',
        name: "혈적자",
        minLevel: 12,
        imageUrl: "/images/equipment/flying-guillotine.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_22',
        name: "금 사슬갑옷",
        minLevel: 12,
        imageUrl: "/images/equipment/lamellar-cuirass.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_23',
        name: "쌍도끼",
        minLevel: 9,
        imageUrl: "/images/equipment/dual-axe.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_24',
        name: "갈고리검",
        minLevel: 9,
        imageUrl: "/images/equipment/hook-swords.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_25',
        name: "호심경",
        minLevel: 9,
        imageUrl: "/images/equipment/mirror-armor.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_26',
        name: "시간 깃발",
        minLevel: 19,
        imageUrl: "/images/equipment/time-flag.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_27',
        name: "도끼",
        minLevel: 9,
        imageUrl: "/images/equipment/battle-axe.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_28',
        name: "옥패",
        minLevel: 9,
        imageUrl: "/images/equipment/jade-pendant.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_29',
        name: "모래시계",
        minLevel: 9,
        imageUrl: "/images/equipment/hourglass.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },
      {
        id: 'equipment_30',
        name: "천기산",
        minLevel: 9,
        imageUrl: "/images/equipment/lethal-umbrella.png",
        description: "기본적인 검입니다. 근접 공격력을 제공합니다.",
        type: "장비"
      },



      {
        id: 'exclusive_1',
        name: "장창",
        minLevel: 17,
        imageUrl: "/images/exclusive/spear.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_2',
        name: "긴 창",
        minLevel: 17,
        imageUrl: "/images/exclusive/lance.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_3',
        name: "장과",
        minLevel: 17,
        imageUrl: "/images/exclusive/dragger-axe.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_4',
        name: "맥도",
        minLevel: 17,
        imageUrl: "/images/exclusive/modao.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_5',
        name: "양손검",
        minLevel: 17,
        imageUrl: "/images/exclusive/two-handed-sword.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_6',
        name: "쌍극",
        minLevel: 17,
        imageUrl: "/images/exclusive/double-halberds.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_7',
        name: "나무 방패",
        minLevel: 17,
        imageUrl: "/images/exclusive/wood-shield.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_8',
        name: "무거운 방패",
        minLevel: 17,
        imageUrl: "/images/exclusive/heavy-shield.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_9',
        name: "삭",
        minLevel: 17,
        imageUrl: "/images/exclusive/long-spear.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_10',
        name: "무쇠 망치",
        minLevel: 17,
        imageUrl: "/images/exclusive/iron-hammer.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_11',
        name: "검&방패",
        minLevel: 17,
        imageUrl: "/images/exclusive/sword-shield.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_12',
        name: "장궁",
        minLevel: 17,
        imageUrl: "/images/exclusive/longbow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_13',
        name: "쇠뇌",
        minLevel: 17,
        imageUrl: "/images/exclusive/crossbow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_14',
        name: "독궁",
        minLevel: 17,
        imageUrl: "/images/exclusive/toxibow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_15',
        name: "사냥활",
        minLevel: 17,
        imageUrl: "/images/exclusive/hunters-bow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_16',
        name: "강화 쇠뇌",
        minLevel: 17,
        imageUrl: "/images/exclusive/imp-crossbow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_17',
        name: "화궁",
        minLevel: 17,
        imageUrl: "/images/exclusive/fire-bow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_18',
        name: "대검",
        minLevel: 17,
        imageUrl: "/images/exclusive/great-sword.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_19',
        name: "장극",
        minLevel: 17,
        imageUrl: "/images/exclusive/halberd.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_20',
        name: "언월도",
        minLevel: 17,
        imageUrl: "/images/exclusive/guandao.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_21',
        name: "망치",
        minLevel: 17,
        imageUrl: "/images/exclusive/sledge-hammer.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_22',
        name: "곡궁",
        minLevel: 17,
        imageUrl: "/images/exclusive/recurbe-bow.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
      {
        id: 'exclusive_23',
        name: "개산부",
        minLevel: 17,
        imageUrl: "/images/exclusive/axe.png",
        description: "전설적인 영웅이 사용하던 검입니다. 특수 효과가 있습니다.",
        type: "전용"
      },
    ]
  };