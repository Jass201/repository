import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import "./JobCards.css";
import gasleiding from "../../assets/Gasleiding.svg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { dynamo } from "../../../declarations";

interface Job {
  id: number;
  name: string;
  distance: number;
  title: string;
  description: string;
  location: string;
  availability: string;
  // img: string;
}

interface JobCardsProps {
  jobs?: Job[];
}

const JobCards: React.FC<JobCardsProps> = ({ jobs = [] }) => {
  const [specialists, setSpecialists] = useState<Job[]>([]);

  useEffect(() => {
    const hashTag = window.location.hash.replace("#", "");
    
    dynamo.query({
      TableName: "clients",
      IndexName: "plaats",
      KeyConditionExpression: "plaats = :plaats",
      ExpressionAttributeValues: {
        ":plaats": hashTag,
      },
    }).promise()
      .then(data => {
        if (data.Items && data.Items.length > 0) {
          console.log(data.Items);
        } else {
          console.log('No items found');
        }
      })
      .catch(err => {
        console.log(err);
      });

  }, [window.location.hash]);

  if (!specialists || specialists.length === 0) {
    return <div>No jobs available.</div>;
  }

  const jobCardsRender = jobs.map((job) => (
    <div key={job.id} className="job-item">
      <div className="user-detail">
        <h2>{job.name}</h2>
        <p>
          <LocationOnIcon />
          {job.distance}KM
        </p>
      </div>
      <div className="job-info">
        <h2 className="job-title">{job.title}</h2>
        <p className="job-desc">{job.description}</p>
      </div>
      <div className="jobInfo-extra-con">
        <div className="jobInfo-extra">
          <LocationOnIcon />
          <p>Locatie: {job.location}</p>
        </div>
        <div className="jobInfo-extra">
          <CalendarMonthIcon />
          <p>Binnen {job.availability}</p>
        </div>
      </div>
      <a className="mail_btn" href="mailto:teammostpros@gmail.com">
        Contact opnemen
      </a>
    </div>
  ));
  return <>{jobCardsRender}</>;
};
export default JobCards;
