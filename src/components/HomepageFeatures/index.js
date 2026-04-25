import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '香港醫療導航',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // 暫時保留原圖，之後可換
    description: (
      <>
        香港公立與私家醫院的治療流程、輪候時間及收費對比，助你作出最合適的醫療決策。
      </>
    ),
  },
  {
    title: '生活護理建議',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        針對化療、電療副作用提供專業護理知識，包括飲食營養建議與心理調適，陪伴患者度過治療期。
      </>
    ),
  },
  {
    title: '社群資源整合',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        匯集香港各大 NGO、癌症支援中心及社福團體資訊，提供經濟援助、交通接送及同路人支援等資源。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
