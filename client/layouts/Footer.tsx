import React from 'react';

import SubscribeForm from './SubscribeForm';

const Footer: React.FC<{}> = () => {
    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                display: 'flex',
            }}
        >
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flex: 1,
                    fontSize: '16px',
                    lineHeight: 1.5,
                    padding: '24px',
                }}
            >
                <ul
                    style={{
                        fontWeight: 500,
                        lineHeight: 1.5,
                        listStyleType: 'none',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <li style={{ alignItems: 'center', display: 'flex' }}>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                margin: 0,
                                padding: '0 8px 0 0',
                            }}
                        >
                            .my-products
                        </h3>
                        &#123;
                    </li>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: '0 24px' }}>
                        <li>
                            css-layout,
                            <span style={{ color: 'rgba(0, 0, 0, 0.3)', marginLeft: '16px' }}>
                                /&#42; You are here &#42;/
                            </span>
                        </li>
                        <li>
                            <a
                                href="https://formvalidation.io"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="FormValidation ~ best validation library for JavaScript"
                            >
                                form-validation,
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://blur.page"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="BlurPage ~ a browser extension to hide sensitive element on page"
                            >
                                blur-page,
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://react-pdf-viewer.dev"
                                style={{ textDecoration: 'none' }}
                                target="_blank"
                                title="React PDF Viewer ~ a PDF viewer made for React"
                            >
                                react-pdf-viewer,
                            </a>
                        </li>
                    </ul>
                    <li>&#125;</li>
                </ul>
            </div>
            <div
                style={{
                    flex: 1,
                    fontSize: '16px',
                    lineHeight: 1.5,
                    padding: '24px',
                }}
            >
                <ul
                    style={{
                        fontWeight: 500,
                        lineHeight: 1.5,
                        listStyleType: 'none',
                        margin: '0 0 16px 0',
                        padding: 0,
                        width: '100%',
                    }}
                >
                    <li style={{ alignItems: 'center', display: 'flex' }}>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: 700,
                                margin: 0,
                                padding: '0 8px 0 0',
                            }}
                        >
                            .about
                        </h3>
                        &#123;
                    </li>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: '0 24px' }}>
                        <li style={{ alignItems: 'center', display: 'flex' }}>
                            <div>twitter:</div>
                            <a
                                href="https://twitter.com/nghuuphuoc"
                                style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                target="_blank"
                            >
                                @nghuuphuoc
                            </a>
                            <div>;</div>
                        </li>
                        <li style={{ alignItems: 'center', display: 'flex' }}>
                            <div>email:</div>
                            <a
                                href="mailto: me@phuoc.ng"
                                style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                target="_blank"
                            >
                                me@phuoc.ng
                            </a>
                            <div>;</div>
                        </li>
                        <li style={{ alignItems: 'center', display: 'flex' }}>
                            <div>github:</div>
                            <a
                                href="https://github.com/phuoc-ng/csslayout"
                                style={{ marginLeft: 'auto', textDecoration: 'none' }}
                                target="_blank"
                            >
                                github.com/phuoc-ng/csslayout
                            </a>
                            <div>;</div>
                        </li>
                    </ul>
                    <li>&#125;</li>
                </ul>
                <div>
                    <div style={{ lineHeight: 1.5, marginBottom: '12px' }}>
                        Subscribe to the newsletter for the latest layouts or patterns. No spam. Ever!
                    </div>
                    <SubscribeForm />
                </div>
            </div>
        </div>
    );
};

export default Footer;
