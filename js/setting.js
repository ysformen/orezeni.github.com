/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.1; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'yaizubudget24';
OpenSpending.year = '2012';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* yaizu cofog */
  //議会費
  '1': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#935B3B' },
  '1-1': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#935B3B' },
  //総務費
  '2': { icon: 'icons/ekonomija.svg', color: '#C75746', bcolor: '#0AB971' },
  //総務監理費
  '2-1': { icon: 'icons/ekonomija.svg', color: '#C75746', bcolor: '#0AB971' },
  //徴税費
  '2-2': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#0AB971' },
  //戸籍住民基本台帳費
  '2-3': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  //選挙費
  '2-4': { icon: 'icons/vote.svg', color: '#C75746', bcolor: '#0AB971' },
  //統計調査費
  '2-5': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#0AB971' },
  //監査委員費
  '2-6': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0AB971' },
  //民生費
  '3': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#4E6D00' },
  //社会福祉費
  '3-1': { icon: 'icons/school-art-disabilities.svg', color: '#C75746', bcolor: '#4E6D00' },
  //児童福祉費
  '3-2': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#4E6D00' },
  //生活保護費
  '3-3': { icon: 'icons/culture.svg', color: '#C75746', bcolor: '#4E6D00' },
  //老人福祉費
  '3-4': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' },
    //災害救助費
  '3-5': { icon: 'icons/restoration.svg', color: '#C75746', bcolor: '#4E6D00' },

  //衛生費
  '4': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  //保険衛生費
  '4-1': { icon: 'icons/admin-health.svg', color: '#C75746', bcolor: '#D33673' },
  //清掃費
  '4-2': { icon: 'icons/waste.svg', color: '#C75746', bcolor: '#D33673' },
  //労働費
  '5': { icon: 'icons/environment.svg', color: '#C75746', bcolor: '#2A3A03' },
  //労働諸費
  '5-1': { icon: 'icons/tree.svg', color: '#C75746', bcolor: '#2A3A03'  },
  //農林水産業費
  '6': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  //農業費
  '6-1': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#EC2406' },
  //水産業費
  '6-2': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#938626' },
  //商工費
  '7': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#938626' },
  //商工費
  '7-1': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#C75746' },
  //土木費
  '8': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  //土木監理費
  '8-1': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  //道路橋梁費
  '8-2': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#C75746' },
  //河川費
  '8-3': { icon: 'icons/machi.svg', color: '#C75746', bcolor: '#C75746' },
  //都市計画費
  '8-4': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  //住宅費
  '8-5': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  //港湾費
  '8-6': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#C75746' },
  //消防費
  '9': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#D33673' },
  //消防費
  '9-1': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#D33673' },
  //教育費
  '10': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  //教育総務費
  '10-1': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  //小学校費
  '10-2': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  //中学校費
  '10-3': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#790586' },
  //幼稚園費
  '10-4': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  //社会教育費
  '10-5': { icon: 'icons/order-safety.svg', color: '#C75746', bcolor: '#790586' },
  //社会教育費
  '10-6': { icon: 'icons/community.svg', color: '#C75746', bcolor: '#790586' },
  //保健体育費
  '10-6': { icon: 'icons/c_kenkou_fukushi.svg', color: '#C75746', bcolor: '#790586' },
  //公債費
  '11': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  //公債費
  '11-1': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },
  //諸支出金
  '12': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  //公営企業支出金
  '12-1': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },
  //予備費
  '13': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#790586' },
  //人事課
  '13-1': { icon: 'icons/human-resources.svg', color: '#C75746', bcolor: '#790586' },
  //特別会計
  '14': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#790586' },
  //し尿処理
  '14-1': { icon: 'icons/toilet.svg', color: '#C75746', bcolor: '#790586' },
  //土地取得
  '14-2': { icon: 'icons/island.svg', color: '#C75746', bcolor: '#790586' },
  //国民健康保険
  '14-3': { icon: 'icons/other-medical.svg', color: '#C75746', bcolor: '#790586' },
  //公共下水道
  '14-4': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#790586' },
  //温泉
  '14-5': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#790586' },
  //駐車場
  '14-6': { icon: 'icons/car.svg', color: '#C75746', bcolor: '#790586' },
  //介護保険
  '14-7': { icon: 'icons/hospital.svg', color: '#C75746', bcolor: '#790586' },
  //後期高齢者
  '14-8': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#790586' },
  //港湾
  '14-9': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#790586' }
};


