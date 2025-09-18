'use client'

import React from 'react'
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

const SearchHistory = () => {
    return (
        <div className="signal-metrics search-history">
            <div className="signal-metrics-title mb-3">
                <span>Signal Search History</span>
                <span id="search-history-info" className="info-icon color-primary">
                    <FaInfo />
                </span>
            </div>

            <Tooltip anchorSelect="#search-history-info" place="top">
                Use your signal search history to identify<br />
                signal confidence improvements or declines.
            </Tooltip>

            <div className="signal-metrics-content search-history-content">
                <table>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Signal Confidence</th>
                            <th>Gain Since Search</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apple</td>
                            <td>90%</td>
                            <td className="color-secondary">2.5%</td>
                        </tr>

                        <tr>
                            <td>TSLA</td>
                            <td>80%</td>
                            <td className="text-red-500">-4.8%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchHistory