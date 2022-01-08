import Link from 'next/link';
import SecondSeparator from '../Separator/second';
import styles from './NewsPopuler.module.css'

const NewsPopuler = ({id}) => {
  const elements = [1,2,3,4];
  return (
    <div>

      <SecondSeparator first={'News Populer'} />
      <div className={styles['popular-news-container']}>
        {elements.map((value, index) => {
          return (
            <div key={index} className={styles['card-popular-news']}>
              <Link href={`/news/${id}`}>
                <a>
                  <div className={styles['img-card-popular-news-container']}>
                    <div className={styles['img-card-popular-news']} style={{ backgroundImage: `url('https://www.mobilku.net/hot/str/News/5276.1638927269-1.c.jpeg')` }}></div>
                  </div>
                  <div className={styles['content-popular-news']}>
                    <p className={styles['title-content-popular-news']}>MUAT RATUSAN MOBIL, RUMAH MEWAH INI PUNYA GARASI DUA LANTAI 7 December 2021 Mobilku.com - Punya rumah besar dan luas sepertinya merupakan mimpi semua orang. Namun, pernahkah kalian membayangk</p>
                    <p className={styles['date-content-popular-news']}>Thu, 09 Dec 2021</p>
                  </div>
                </a>
              </Link>
          </div>
          )
        })}
      </div>

    </div>
  );
}

export default NewsPopuler;
