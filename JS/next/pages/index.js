import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = (props) => {
    return <div>
        <h1>this is indexPage page</h1>
        <p>go to <Link href="/auth"><a>auth</a></Link>.</p>
        <button onClick={() => Router.push('/auth')}>open auth</button>
        </div>
};

export default indexPage;