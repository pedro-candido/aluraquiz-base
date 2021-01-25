import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="475" viewBox="0 0.001 1096.002 208.205"><path d="M1066.244 4.214v4.994c-5.571-1.394-7.8 7.115-5.425 25.29l6.734 51.576 6.093-50.96c.685-5.79.989-10.26 1.206-12.74.695-7.918-1.068-12.313-5.25-13.167V4.213h26.4v5.423c-4.466.28-6.236 2.28-6.716 5.848l-15.15 112.444v61.904c-.288 6.95 1.824 10.737 6.287 11.268v5.453h-30.147v-5.873c3.889-.25 5.851-3.898 5.851-10.848v-69.43L1045.18 28.14c-1.261-10.64-5.665-17.833-9.475-19.324l-.435-4.6h30.975zM952.766 134.646l22.606-11.705c-2.78 43.48-2.032 66.312 2.292 68.557 4.324 2.226 6.785 1.12 7.325-3.339 2.531-16.738 2.531-33.581 0-50.602-.827-8.634-2.5-14.757-5.003-18.406-15.646-24.224-24.574-42.343-26.79-54.334l-.427-41.381c3.068-14.516 11.43-21.76 25.104-21.76 15.366.282 23.438 10.057 24.296 29.288l1.246 26.758-20.929 13.377c.28-16.732.28-32.358 0-46.84 0-6.958-1.614-10.522-4.823-10.67-3.221-.14-4.784 3.144-4.784 9.85l.387 41.812c14.252 22.83 23.86 40.372 28.903 52.656 4.992 12.28 6.818 29.827 5.424 52.69-1.386 25.371-10.464 37.883-27.216 37.604-16.178-.825-25.364-11.984-27.608-33.535l-.003-40.02zm-63.553 72.73v-2.928c3.356-3.352 4.466-15.337 3.356-35.956h-10.464c-1.684 20.618-.716 32.602 2.93 35.956v2.929H857.81v-2.93c2.252-.282 4.114-1.17 5.65-2.698 1.533-1.543 6.21-68.353 14.032-200.464h21.755c10.327 132.113 16.044 198.921 17.182 200.464 1.107 1.527 2.79 2.415 5.003 2.699v2.929h-32.22zm-6.507-56.864h8.18l-4.176-67.707-4.004 67.707zM767.906.002h58.58v74.024h-7.107c-1.404-29.822-5.291-47.521-11.72-53.12v171.417c0 6.718 3.07 10.894 9.22 12.56v2.93H777.94v-2.93c6.677-1.667 9.747-6 9.211-12.982V20.907c-6.996 5.315-11.47 23.011-13.393 53.12h-5.85L767.905.001zm-91.168 15.482c.817-5.03-1.426-8.06-6.718-9.202V.86h29.718l16.334 116.628V13.809c0-4.171-1.685-6.529-5.042-7.097V.859h25.543v5.422c-3.608.854-5.292 6.71-5.003 17.553v183.123h-19.682L691.773 75.705V193.18c-.825 6.11 1.288 9.022 6.291 8.772v5.003h-28.471l.426-4.614c4.754-.53 6.968-3.74 6.718-9.583l.001-177.274zm-70.695 191.893v-2.93c3.36-3.35 4.462-15.336 3.36-35.955h-10.465c-1.68 20.618-.719 32.602 2.924 35.956v2.929h-27.218v-2.93c2.248-.282 4.108-1.17 5.642-2.698 1.536-1.543 6.219-68.353 14.04-200.464h21.754c10.325 132.113 16.044 198.921 17.182 200.464 1.11 1.527 2.789 2.415 5.002 2.699v2.929h-32.221zm-6.498-56.865h8.177l-4.183-67.707-3.994 67.707zM486.804 13.38c0-4.457-2.502-6.67-7.536-6.67V1.287h64.042v68.568h-5.855c-1.962-21.765-5.037-36.604-9.211-44.556-4.187-7.924-10.474-12.022-18.831-12.307v71.06c7.539 2.497 11.431-7.952 11.72-31.36l5.86.432v85.696h-5.86c0-22.58-3.897-34.718-11.72-36.356v89.034c0 8.07 1.932 11.142 5.86 9.18l.43 6.279h-35.188l-.427-6.28c4.749 1.666 7.001-1.246 6.717-8.775V13.381h-.001zm-130.842 5.031c-.288-7.24-3.07-10.989-8.36-11.276V.859h38.08v5.852c-5.571.568-8.358 4.46-8.358 11.699l.106 175.797c10.54-.7 18.716-24.467 24.58-71.268h5.463v84.435h-60.301v-5.844c5.576-.578 8.502-3.88 8.79-10.035V18.412zm-70.978 188.965v-2.93c3.36-3.35 4.467-15.336 3.36-35.955h-10.467c-1.684 20.618-.716 32.602 2.93 35.956v2.929h-27.223v-2.93c2.248-.282 4.11-1.17 5.643-2.698 1.54-1.543 6.214-68.353 14.042-200.464h21.755c10.32 132.113 16.038 198.921 17.183 200.464 1.107 1.527 2.79 2.415 5.002 2.699v2.929h-32.225zm-6.5-56.865h8.18l-4.182-67.707-3.998 67.707zM163.78 15.484c.823-5.03-1.43-8.06-6.716-9.202V.86h29.724l16.324 116.628V13.809c0-4.171-1.679-6.529-5.038-7.097V.859h25.544v5.422c-3.607.854-5.286 6.71-5.002 17.553v183.123h-19.683L178.825 75.705V193.18c-.826 6.11 1.285 9.022 6.284 8.772v5.003H156.64l.425-4.614c4.754-.53 6.967-3.74 6.719-9.583V15.485l-.006-.001zM94.02 6.712V.859h32.218l-.388 5.852c-3.929.568-5.862 3.349-5.862 8.346V189.83c.11 8.212 2.359 12.124 6.679 11.705v5.845H94.019v-5.845c3.894.576 5.856-3.351 5.856-11.705V15.057c.004-4.996-1.962-7.777-5.856-8.345zM7.54 13.38c0-4.457-2.503-6.67-7.538-6.67V1.287h64.047v68.568h-5.86c-1.963-21.765-5.04-36.604-9.216-44.556-4.181-7.924-10.468-12.022-18.826-12.307v71.06c7.538 2.497 11.432-7.952 11.72-31.36l5.858.432v85.696h-5.858c0-22.58-3.892-34.718-11.72-36.356v89.034c0 8.07 1.932 11.142 5.86 9.18l.43 6.279H1.251l-.429-6.28c4.75 1.666 6.997-1.246 6.718-8.775L7.54 13.381z"/></svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;