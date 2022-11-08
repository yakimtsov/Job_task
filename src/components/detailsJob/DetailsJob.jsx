import React from 'react'
import './detailsJob.css'
import {Share , TurnedInNot, LocationOn, ArrowBackIos} from '@mui/icons-material';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

// eslint-disable-next-line no-use-before-define
DetailsJob.propTypes = {
    setJobList: PropTypes.array,
};
// eslint-disable-next-line no-use-before-define
DetailsJob.defaultProps = {
    setJobList: [],
}

function DetailsJob(props){
    const {setJobList} = props;
    console.log(setJobList)
    const salary = setJobList.salary.replace(/k/g, ' 000');
    const spaceIndex = setJobList.description.indexOf('Responsopilities');
    const responceIndex = setJobList.description.indexOf('Compensation');
    const lastIndex = setJobList.description.lastIndexOf(`${setJobList.description.length}`);

    const mainText = setJobList.description.slice(0, spaceIndex);
    const responceText = setJobList.description.slice(spaceIndex[15], responceIndex);
    const benefitsText = setJobList.description.slice(responceIndex + 24, lastIndex);
    const doArrayFrom = benefitsText.split('.');

  return (
    <div className='details'>
        <div className="details__main">
            <div className="details__main-header">
                <h2 className='details__main-header-title'>Job Details</h2>
                <div className="details__main-header-right">
                    <TurnedInNot/> <h6 className='details__main-header-right-text'>Save to my list</h6>
                    <Share /> <h6 className='details__main-header-right-text'>Share</h6>
                </div>
            </div>
            <div className="details__main-wrapper">
                <button className="details__main-wrapper-button">apply now</button>
                <div className="details__main-wrapper-block">
                    <h3 className="details__main-wrapper-block-title">{setJobList.title}</h3>
                    <div className="details__main-wrapper-block-price">
                        <h4 className="details__main-wrapper-block-price-value">€ {salary}</h4>
                        <p className="details__main-wrapper-block-price-per">Brutto, per year</p>
                    </div>
                </div>
                <p className="details__main-wrapper-posted">Posted <Moment fromNow>{setJobList.updatedAt}</Moment></p>
                <p className="details__main-wrapper-text">{mainText}</p>
                <div className="details__main-wrapper-responce">
                    <h4 className="details__main-wrapper-pretitle">Responsobilities</h4>
                    <p className="details__main-wrapper-text">{responceText}</p>
                </div>
                <div className="details__main-wrapper-benefits">
                    <h4 className="details__main-wrapper-pretitle">Compensation & Benefits:</h4>
                    <p className="details__main-wrapper-text">Our physicians enjoy a wide range of benefits, including:</p>
                    <p className="details__main-wrapper-text circle">{doArrayFrom[0]}</p>
                    <p className="details__main-wrapper-text circle">{doArrayFrom[1]}</p>
                    <p className="details__main-wrapper-text circle">{doArrayFrom[2]}</p>
                </div>
                <button className="details__main-wrapper-button">Apply Now</button>
            </div>
            <div className="details__main-additional">
                <h2 className="details__main-additional-title">Additional info</h2>
                <p className="details__main-additional-pretitle">Employment type</p>
                <div className="details__main-additional-employment">
                    {setJobList.employment_type.map(type => (
                    <p className="details__main-additional-employment-p">{type}</p>))}
                </div>
                <p className="details__main-additional-pretitle">Benefits</p>
                <div className="details__main-additional-employment">
                    {setJobList.benefits.map(benefits => (
                    <p className="details__main-additional-employment-p yellow">{benefits}</p>))}
                </div>
                <h2 className="details__main-additional-title">Attached images</h2>
                    {setJobList.pictures.map(picture => (
                        <img className="details__main-additional-img" src={picture} alt="" />))}
            </div>
            <Link className='link' to='/'>
                <button className='button-back'><ArrowBackIos/> RETURN TO JOB BOARD</button>
            </Link>
        </div>
        <div className="details__location">
            <h2 className="details__location-name">{setJobList.name}</h2>
            <div className="details__location-loc">
                <LocationOn />{setJobList.address}
            </div>
            <p className="details__location-phone">{setJobList.phone}</p>
            <p className="details__location-email">{setJobList.email}</p>
        </div>
    </div>
  )
}

export default DetailsJob