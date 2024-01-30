import React, { useEffect, useState } from 'react';
import cx from 'classnames';

interface Props {
    headings: {
        text: string,
        slug: string
    }[]
}

const BlogLinks: React.FC<Props> = ({ headings }) => {
    const [link, setLink] = useState('')
    useEffect(() => {
        setLink(window.location.hash)
    }, [])
    return (
        <div className='flex flex-col gap-6 max-w-[250px]'>
            <h2 className='text-lightGrey font-bold'>On this page</h2>
            <div className='flex flex-col border-l-2 border-[#9EA2A633] gap-4'>
                {headings.map(({ text, slug }, index) => <a href={`#${slug}`} onClick={() => setLink(slug)} key={slug} className={cx('text-white font-secondary text-xs pl-4 border-l-2 py-1', link === slug || link === '' && index === 0 ? 'border-neon' : 'border-transparent')}>{text}</a>)}
            </div>
        </div>
    )
}

export default BlogLinks;
