const facilities = [
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
    id: 'wapparu-toyonaka',
    name: '豊中市立青少年自然の家 わっぱる',
    address: '大阪府豊能郡能勢町宿野436-1',
    travelTime: '約1時間21分',
    mealProvision: 'あり（給食 or 自炊）',
    url: 'https://toyonaka-camp.com/'
  },
  {
    id: 'okuina-health',
    name: '兵庫県立奥猪名健康の郷',
    address: '兵庫県川辺郡猪名川町杉生字奥山1-22',
    travelTime: '約1時間24分',
    mealProvision: 'あり（三食、予約制）',
    url: 'https://okuina.com/'
  } ,
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
    id: 'sankikan',
    name: '三季館',
    address: '奈良県宇陀郡御杖村桃俣745',
    travelTime: '約57分',
    mealProvision: 'あり（夕・朝食、昼食予約制）',
    url: 'https://share.google/oDxWcq17dzQX4CQit'
  },
 
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



