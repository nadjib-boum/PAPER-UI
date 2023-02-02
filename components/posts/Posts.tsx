import Image from 'next/image';
import { ForwardedRef, forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { SVGPath1 } from '../svgPaths/SVGPaths';
import type { RenderClippinngOptions } from '../svgPaths/SVGPaths.types';
import type { MainPostProps, PostItemProps } from './Posts.types';
import styles from './Posts.module.scss';
import { breakText } from '../../utils/breakText.util'


function PostCircle () {
  return (
    <div className={`${styles.postCircle} flex-center`}>
      <svg style={{ height: '100%', width: '100%' }}>
        <circle 
          className={styles.ringCircle}
          stroke="#000"
          stroke-width="1"
          fill="none"
          r="48%"
          cx="50%"
          cy="50%" />
      </svg>
      <Image src={'/images/avatar.jpg'} height={58} width={58} alt='avatar' className={styles.postCircleImg} />
    </div>
  );
}

function PostsCategory ({text}: { text: string }) {
  return (
    <div className={styles.postsCategory}>
      <span>● {text}</span>
    </div>
  );
}

const PostTitle = forwardRef (({ text }: { text: string[] }, ref: ForwardedRef<HTMLSpanElement>) => {
  return (
    <div className={styles.postTitle}>
      {
      text.map((l, i) => (
        <div className={styles.titleLine} key={i}>
          <span ref={ref}>{l}</span>
        </div>
      ))
      }
    </div>
  );
})

const PostExcerpt = forwardRef (({ text }: { text: string[] }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.postExcerpt} ref={ref}>
      <p>
        { text.map ((l, i) => (<span key={i}>{l}</span>)) }
      </p>
      <a href="#">Learn More</a>
    </div>
  );
})

function MainPostItem ({ mainPostData, id }: MainPostProps) {

  const { title, excerpt, author, date } = mainPostData;

  const [ clippingOptions, setClippingOptions ] = useState<RenderClippinngOptions>({
    upper: [20, 10],
    lower: [300, 300],
    lineHeight: 54 - (15 * 2) + 4,
    radius: 15,
    height: 588,
    width: 693
  });

  const titleLines = breakText (title);
  const excerptLines = breakText (excerpt, 4, [37, 37, 37, 37]);
  const titleLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const imgRef = useRef <HTMLDivElement>(null);
  const excerptRef = useRef<HTMLDivElement>(null);

  let isRendered = false;

  useLayoutEffect (() => {

    if (!isRendered) {

      const items = (titleLineRefs.current.splice(1).filter (l => l).map((l: (HTMLSpanElement | null)) => (l?.offsetWidth || 10) + (15 * 2) + 25))
      const imgRefHeight = imgRef.current?.clientHeight || clippingOptions.height;
      const imgRefWidth = imgRef.current?.clientWidth || clippingOptions.width;
      const excerptHeight = excerptRef.current?.clientHeight

      setClippingOptions ((state) => {
        return ({
          upper: items,
          lower: [imgRefWidth * .48, imgRefHeight - (excerptHeight || state.lower[1]) + 50],
          lineHeight:  (titleLineRefs.current[0]?.offsetHeight || state.lineHeight) - 10,
          radius: 15,
          height: imgRefHeight || state.height,
          width: imgRefWidth  || state.width
        })
      });

      isRendered = true;

    }
  }, []);

  return (
    <div className={`${styles.postItem} ${styles.mainPostItem}`}>
      <PostTitle ref={(ele) => { titleLineRefs.current = [...new Set([...titleLineRefs.current, ele])]}} text={titleLines} />
      <div className={styles.postInfo}>
        <div>
          <Image src='/images/avatar.jpg' height={32} width={32} alt='avatar' />
          <div>
            <span>By <b>{author}</b></span> 
          </div>
        </div>
      </div>
      <div className={styles.postInfo + ' ' + styles.postDate}>
        <div>
          <div>
            <span><b>{date}</b></span> 
          </div>
        </div>
      </div>
      <div className={styles.postImg} ref={imgRef} style={{ clipPath: `url(#svg_id_${id})` }}>
        <SVGPath1 options={clippingOptions} id={id} />
      </div>
      <PostExcerpt ref={excerptRef}  text={excerptLines} />
    </div>
  );
}

function PostItem ({ image, category, title }: PostItemProps) {
  return (
    <div className={`${styles.postItem } ${styles.sidePost}`}>
      <div className={styles.postImg}>
        <img src={image} alt='post' />
      </div>
      <PostsCategory text={category} />
      <div className={styles.postTitle}>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default function Posts () {
  return (
    <div className={styles.posts}>
      <div className={styles.postsTimeline}>
        <PostCircle />
        <PostCircle />
        <PostCircle />
      </div>
      <div className={styles.postsGrid}>
        <PostsCategory text='Lifestyle' />
        <div className={styles.postsGridItems}>
          <MainPostItem mainPostData={{
            title: '8 Places to enjoy drinks outdoor in Brighton',
            excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            author: 'Kerry Shaw',
            date: 'Oct 28, 2022'
            }} id='1' />
          <PostItem title='8 Places to enjoy drinks outdoor in Brighton' category='Lifestyle' image='/images/case-2.jpg' />
          <PostItem title='8 Places to enjoy drinks outdoor in Brighton' category='Lifestyle' image='/images/case-2.jpg' />
        </div>
      </div>
    </div>
  );
}