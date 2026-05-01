import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const links = [
  {
    title: '腫瘤科吳教恩醫師',
    description: '以影片形式分享腫瘤科、癌症治療與病友衛教資訊。',
    href: 'https://www.youtube.com/@peterwu4845',
    source: 'YouTube',
  },
];

export default function UsefulLinks() {
  return (
    <Layout
      title="Useful Links"
      description="癌症患者與照顧者可參考的實用連結">
      <main className="container margin-vert--lg">
        <Heading as="h1">Useful Links</Heading>
        <p>
          這裡整理癌症患者、家屬與照顧者可能會用得上的外部資源。外部內容未必代表本網站立場，醫療決定仍應以主診醫生建議為準。
        </p>
        <div className="row">
          {links.map((link) => (
            <div className="col col--6 margin-bottom--lg" key={link.href}>
              <article className="card">
                <div className="card__header">
                  <Heading as="h2">{link.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{link.description}</p>
                  <p>
                    <strong>來源：</strong>
                    {link.source}
                  </p>
                </div>
                <div className="card__footer">
                  <a
                    className="button button--primary"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer">
                    前往連結
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
