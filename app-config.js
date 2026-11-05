window.APP_CONFIG = {
  brand: { name: '福岡銀行', short: 'ふくぎん', accent: '#00A7EA', secondary: '#7D6B55', logo: 'fukuoka-bank-logo.svg' },
  member: { name: '山田 花子', account: '普通預金  1234567', balance: 1286540, accountMasked: '天神支店 · 123****' },
  loan: { name: 'カードローン', borrowed: 420000, limit: 1000000, dueDate: '2026年11月27日', dueAmount: 12000 },
  services: [
    { id: 'account', icon: '◫', title: '口座開設', desc: 'スマートフォンでお申し込み', category: '口座・カード', time: '約5分', lead: '毎日の銀行取引を、もっと身近に。', note: 'お申し込み後、本人確認のご案内に進みます。' },
    { id: 'reservation', icon: '▦', title: '来店予約', desc: 'ご希望の店舗・日時を選択', category: '店舗・相談', time: '約3分', lead: 'お近くの店舗で、ゆっくりご相談いただけます。', note: 'ご予約内容は画面で確認できます。' },
    { id: 'loan', icon: '¥', title: '各種ローン申込', desc: 'お使いみちに合わせて選ぶ', category: 'ローン', time: '約5分', lead: '暮らしの計画に合わせたローンをご案内します。', note: 'お申し込み後、審査のご案内に進みます。' },
    { id: 'investment', icon: '◈', title: '投資信託', desc: '資産づくりをはじめる', category: 'ためる・ふやす', time: '約5分', lead: '初めての資産づくりも、一歩ずつ。', note: '商品内容とリスクをご確認のうえお申し込みください。' },
    { id: 'consultation', icon: '◎', title: '相談', desc: 'お金のことを気軽に相談', category: '店舗・相談', time: '約3分', lead: 'お金にまつわる疑問を、ふくぎんにご相談ください。', note: '相談内容に応じて担当者をご案内します。' }
  ],
  branches: ['天神支店', '博多駅前支店', '本店営業部', '西新町支店'],
  loanTypes: ['カードローン', '住宅ローン', 'マイカーローン', '教育ローン'],
  consultationTopics: ['口座・カード', 'ローン', '資産運用', 'その他']
};
