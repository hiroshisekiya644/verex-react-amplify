'use client'

import React, { useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

const ContactPlain = () => {
    const [message, setMessage] = useState<string>('');
    return (
        <div className="signal-metrics contact-plain">
            <div className="signal-metrics-title mb-3">
                <span>thoughts & opinions</span>
                <span id="contact-us" className="info-icon color-primary">
                    <FaInfo />
                </span>

                <Tooltip anchorSelect="#contact-us" place="top">
                    Use this space to be critical, tell us how <br />
                    you think we should improve our platform<br />
                    for the full launch in early 2026. We wil <br />
                    consider every suggestion made. We <br />
                    want VEREX to be your platform.
                </Tooltip>
            </div>

            <div className="search-box grid grid-cols-12 gap-3">
                <div className="col-span-9">
                    <textarea className="search-box-input" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="col-span-3 flex flex-col justify-end">
                    <div className="hint-w-button space-y-4">
                        <button className="submit-button w-full" type="submit">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPlain
