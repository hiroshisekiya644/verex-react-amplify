'use client'

import React from "react";
import { FaInfo } from "react-icons/fa6";
import { Tooltip } from 'react-tooltip';

const SignalMetrics = () => {
    return (
        <div className="signal-metrics">
            <div className="signal-metrics-title mb-3">
                <span>Signal Metrics</span>
                <span id="signal-metrics-info" className="info-icon color-primary">
                    <FaInfo />
                </span>
            </div>

            <Tooltip anchorSelect="#signal-metrics-info">
                Stay up to date with the VEREX Signal <br />
                here you will see: <br />
                -Updates to the VERES Signal Goal <br />
                -Live VEREX Signal Confidence <br />
                -VEREX Signal 2024 YTD performance
            </Tooltip>

            <div className="signal-metrics-content">
                <div className="signal-metrics-item px-4 py-2 mb-2">
                    <div className="heading">
                        <span className="text-white">Verex Signal</span>
                        <span className="color-primary ml-2">Goal</span>
                    </div>
                    <div className="outcome color-secondary">Realise 2% - 10% in 1 - 3 months</div>
                </div>

                <div className="signal-metrics-item px-4 py-2 mb-2">
                    <div className="heading">
                        <span className="text-white">Verex Signal</span>
                        <span className="color-primary ml-2">Confidence</span>
                    </div>
                    <div className="outcome color-secondary">90%</div>
                </div>

                <div className="signal-metrics-item px-4 py-2">
                    <div className="heading">
                        <span className="text-white">Verex Signal</span>
                        <span className="color-primary ml-2">portfolio return 2024</span>
                    </div>
                    <div className="outcome color-secondary">36%</div>
                </div>
            </div>
        </div>
    );
};

export default SignalMetrics;