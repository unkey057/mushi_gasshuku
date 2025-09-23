const facilities = [
  {
    id: 'biwako-youth-house',
    name: 'びわ湖青少年の家',
    address: '滋賀県高島市勝野1523-1',
    travelTime: '約1時間39分',
    mealProvision: 'あり（朝・昼・夕食）',
    url: 'https://biwako-activecenter.com/'
  },
  {
    id: 'biwako-kodomo-no-kuni',
    name: 'びわ湖こどもの国',
    address: '滋賀県高島市安曇川町北船木2981',
    travelTime: '約1時間45分',
    mealProvision: '部分的（週末ランチのみ）',
    url: 'http://www.biwa.ne.jp/~kodomo92/'
  },
  {
    id: 'kyoto-rurikei',
    name: '京都府立るり渓少年自然の家（グリーンパルるり渓）',
    address: '京都府南丹市園部町大河内小字石田1',
    travelTime: '約1時間28分',
    mealProvision: 'あり（三食）',
    url: 'https://www.kyoto-rurikei.jp/'
  },
  {
    id: 'kyoto-seminar-house',
    name: '京都府立ゼミナールハウス（あうる京北）',
    address: '京都府京都市右京区京北下中町鳥谷2',
    travelTime: '約1時間38分',
    mealProvision: 'あり（三食）',
    url: 'https://www.kyosemi.or.jp/'
  },
  {
    id: 'yuai-no-oka',
    name: '友愛の丘',
    address: '京都府城陽市寺田南中芝80',
    travelTime: '約44分',
    mealProvision: 'あり（三食、団体予約制）',
    url: 'https://yuai-no-oka.com/'
  },
  {
    id: 'utano-youth-hostel',
    name: '宇多野ユースホステル',
    address: '京都府京都市右京区太秦中山町29',
    travelTime: '約1時間13分',
    mealProvision: 'あり（朝・夕食、予約制）',
    url: 'https://yh-kyoto.or.jp/utano_yh/'
  },
  {
    id: 'osaka-nature-house-kaizuka',
    name: '大阪府立少年自然の家（貝塚）',
    address: '大阪府貝塚市木積字秋山長尾3350',
    travelTime: '約53分',
    mealProvision: 'あり（三食）',
    url: 'https://shizen.osaka-yha.or.jp/'
  },
  {
    id: 'shinodayama-center',
    name: '大阪市立信太山青少年野外活動センター',
    address: '大阪府和泉市伯太町3-12-86',
    travelTime: '約38分',
    mealProvision: 'あり（給食・弁当）',
    url: 'https://shinodayama.com/'
  },
  {
    id: 'awaji-national-youth-house',
    name: '国立淡路青少年交流の家',
    address: '兵庫県南あわじ市阿万塩屋町2249-8',
    travelTime: '約2時間4分',
    mealProvision: 'あり（ビュッフェ形式）',
    url: 'https://awaji.niye.go.jp/'
  },
  {
    id: 'kobe-nature-house',
    name: '神戸市立自然の家（そうぞうのすみか）',
    address: '兵庫県神戸市灘区六甲山町中一里山1-1',
    travelTime: '約1時間16分',
    mealProvision: '軽食あり（カフェ）',
    url: 'https://kobe-sizennoie.com/'
  },
  {
    id: 'ieshima-center',
    name: '兵庫県立いえしま自然体験センター',
    address: '兵庫県姫路市家島町西島3836-6',
    travelTime: '（姫路港まで約2時間＋フェリー）',
    mealProvision: 'あり（三食、屋外調理可）',
    url: 'https://www.shizen-ieshima.com/'
  },
  {
    id: 'nara-outdoor-center',
    name: '奈良市青少年野外活動センター',
    address: '奈良県奈良市中ノ川町332',
    travelTime: '約42分',
    mealProvision: 'なし（自炊のみ）',
    url: 'https://www.yac-nara.org/'
  },
  {
    id: 'kihoku-youth-house',
    name: '和歌山県立紀北青少年の家',
    address: '和歌山県伊都郡かつらぎ町新城1020-5',
    travelTime: '約54分',
    mealProvision: 'あり（三食、ロッジは自炊可）',
    url: 'http://www.kihokuseisyounen.com/'
  },
  {
    id: 'shirasaki-youth-house',
    name: '和歌山県立白崎青少年の家',
    address: '和歌山県日高郡由良町大引960-1',
    travelTime: '約1時間45分',
    mealProvision: 'あり（三食、予約制）',
    url: 'https://pya-shirasaki.ssl-lolipop.jp/'
  },
  {
    id: 'wapparu-toyonaka',
    name: '豊中市立青少年自然の家 わっぱる',
    address: '大阪府豊能郡能勢町宿野436-1',
    travelTime: '約1時間21分',
    mealProvision: 'あり（給食 or 自炊）',
    url: 'https://toyonaka-camp.com/'
  },
  {
    id: 'sankikan',
    name: '三季館',
    address: '奈良県宇陀郡御杖村桃俣745',
    travelTime: '約57分',
    mealProvision: 'あり（夕・朝食、昼食予約制）',
    url: 'http://www.okuina.com/'
  },
  {
    id: 'okuina-health',
    name: '兵庫県立奥猪名健康の郷',
    address: '兵庫県川辺郡猪名川町杉生字奥山1-22',
    travelTime: '約1時間24分',
    mealProvision: 'あり（三食、予約制）',
    url: 'https://okuina.com/'
  }
];
document.addEventListener('DOMContentLoaded', renderTable);

function renderTable() {
  const tableBody = document.getElementById('facility-table-body');
  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = '';

  facilities.forEach((facility) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = facility.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = facility.name;
    const strong = document.createElement('strong');
    strong.appendChild(link);
    nameCell.appendChild(strong);

    const addressCell = document.createElement('td');
    addressCell.textContent = facility.address;

    const travelTimeCell = document.createElement('td');
    travelTimeCell.textContent = facility.travelTime;

    const mealCell = document.createElement('td');
    mealCell.textContent = facility.mealProvision;

    row.appendChild(nameCell);
    row.appendChild(addressCell);
    row.appendChild(travelTimeCell);
    row.appendChild(mealCell);

    tableBody.appendChild(row);
  });
}
