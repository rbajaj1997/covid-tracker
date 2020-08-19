import React, { useEffect, useState } from 'react';
import numeral from "numeral"

export default function Stats(props) {
    const { countryData, selectedCountry, globalData } = props;
    const [info, setInfo] = useState({});
    //console.log(info);

    const modifyNum = (num) => {
        return numeral(num).format('0.0a');
    }

    const diffTime = (timeStamp) => {
        const present = new Date();
        const updateTime = new Date(timeStamp);
        if (isNaN(updateTime.getTime())) {
            return '-'
        }
        const minutes = parseInt(Math.abs(updateTime.getTime() - present.getTime()) / (1000 * 60) % 60);
        return minutes;
    }

    useEffect(() => {
        if (Number(selectedCountry) === -1) {
            setInfo(globalData);
        } else {
            for (let i = 0; i < countryData.length; i++) {
                if (countryData[i].countryInfo._id === Number(selectedCountry)) {
                    setInfo(countryData[i]);
                    break;
                }
            }
        }
    }, [countryData, selectedCountry, globalData])

    return (
        <div className="stats-boxes">
            <div className="stats-boxes--boxes">
                <div tabIndex="-1" className="box box--1">
                    <div className="box__title">New Cases</div>
                    <div className="box__new">{modifyNum(info.todayCases)}</div>
                    <div className="box__total">{modifyNum(info.cases)}</div>
                </div>

                <div tabIndex="-1" className="box box--2">
                    <div className="box__title">Recovered</div>
                    <div className="box__new">{modifyNum(info.todayRecovered)}</div>
                    <div className="box__total">{modifyNum(info.recovered)}</div>
                </div>

                <div tabIndex="-1" className="box box--3">
                    <div className="box__title">Deaths</div>
                    <div className="box__new">{modifyNum(info.todayDeaths)}</div>
                    <div className="box__total">{modifyNum(info.deaths)}</div>
                </div>
            </div>
            <div className="stats-boxes--time">
                <i>Last Updated: <strong>{diffTime(info.updated)} mins</strong> ago</i>
            </div>
        </div>
    );
}