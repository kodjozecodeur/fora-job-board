import React from "react";
import { Briefcase, Calendar } from "lucide-react";
const JobCard = () => {
  return (
    <div className="border border-gray-300 rounded-3xl p-4 hover:shadow-lg transition-shadow duration-300 mt-3 mb-3">
      <div className="flex justify-between items-end">
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 rounded-full p-4">
            {/* Icon goes here */}
            <Briefcase size={18} />
          </div>
          <div>
            {/* job details goes here */}
            <h2 className="text-xl font-bold">Product Manager</h2>
            <div className="text-gray-500 flex items-center gap-2 mt-2 mb-2">
              <span className="text-gray-900">New York, NY</span>
              <span>/</span>
              <span>Remote</span>
              <span>/</span>
              <span>Avg Salary.</span>
              <span className="text-gray-900">$165,000</span>
            </div>
            <div className="flex gap-4">
              {/* tags */}
              <span className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                Product
              </span>
              <span className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                Product
              </span>
              <span className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                Product
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          {/* published date */}
          <Calendar size={20} />
          <span>Aug 17, 2020</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
