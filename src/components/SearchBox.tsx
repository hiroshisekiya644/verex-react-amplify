'use client'

import React, { useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

const SearchBox = () => {
    const [search, setSearch] = useState<string>('');
    return (
        <div className="search-container mb-10">
            <div className="search-title">
                <span>verex signal</span>
                <span className="text-[#fff]"> search</span>
                <span id="company-ticker" className="info-icon">
                    <FaInfo />
                </span>

                <Tooltip anchorSelect="#company-ticker" place="top">
                    Enter a company ticker or name whose <br />stock you are considering purchasing <br />and tap ‘SEE SIGNAL’ tp see the VEREX Signal <br />confidence of an investment reaching the <br />VEREX Signal Investment Goal.
                </Tooltip>
            </div>

            <div className="search-box grid grid-cols-12 gap-3">
                <div className="col-span-9">
                    <textarea className="search-box-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="col-span-3 flex flex-col justify-end">
                    <div className="hint-w-button space-y-4">
                        <div className="hint-title" id="important-read">
                            important please read
                        </div>

                        <Tooltip anchorSelect="#important-read" place="top">
                            The VEREX Signal represents the<br />
                            confidence of the ticker you searched<br />
                            reaching the VEREX Signal Goal.<br />
                            By clicking ‘See Signal’ you are agreeing<br />
                            to our terms of use and confirm that<br />
                            you have read our disclaimers.
                        </Tooltip>

                        <p className="text-center">By tapping 'SEE SIGNAL' you confirm to have read this message</p>

                        <button className="submit-button w-full" type="submit">See signal</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
