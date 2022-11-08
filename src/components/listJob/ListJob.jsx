import React, {useState} from 'react';
import './listjob.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import Pagination from '../pagination/Pagination';
import { Link } from "react-router-dom";

ListJob.propTypes = {
    setJobList: PropTypes.array,
};
ListJob.defaultProps = {
    setJobList: [],
}

function ListJob(props){
    
    const {setJobList} = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = setJobList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='wrapper'>
        {currentPosts.map((job, key) => (
        <div  key={job.id} className="job__container">
            <div className='job__container__wrapper'>
                <div className="job__container-left">
                    <img className='job__container-left-img' src={job.pictures[0]} alt="" />
                </div>
                <div className="job__container-center">
                    <Link className="job__container-center-title" key={job.id} to={`/job/${job.id}`}><h2 >{job.title}</h2></Link>
                    {job.benefits.map(benefit => (
                    <h4  className="job__container-center-text">{benefit}</h4>))}
                    <div className="job__container-center-location">
                       <LocationOnIcon className='icon'/><p className="job__container-center-location-text">{job.address}</p> 
                    </div>
                    
                </div>
            </div>
            <div className="job__container-right">
                <TurnedInNotIcon className='icon'/>
                <p className="job__container-right-posted">Posted <Moment fromNow>{job.updatedAt}</Moment></p>
            </div>
        </div>
        ))}
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={setJobList.length}
        paginate={paginate}
      />
    </div>
  )
}

export default ListJob