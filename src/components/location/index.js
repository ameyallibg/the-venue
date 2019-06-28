import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.5465856967362!2d-96.79943766738629!3d32.78012567023374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1sen!2smy!4v1538285021570https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.02355457028!2d-99.17731138509227!3d19.497622386847386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8892e12ff41%3A0x1b87a619305eb9fc!2sArena+Ciudad+de+M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1561705600302!5m2!1ses-419!2smx"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;