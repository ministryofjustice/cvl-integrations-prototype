//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter


// Add your filters here



const moment = require('moment')

module.exports = function () {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  let filters = {}

  /* ------------------------------------------------------------------
    date filter for use in Nunjucks
    example: {{ params.date | date("DD/MM/YYYY") }}
    outputs: 01/01/1970
  ------------------------------------------------------------------ */
  filters.date = function (timestamp, format) {
    return moment(timestamp).format(format)
  }

  /* ------------------------------------------------------------------
    utility functions for use in mojDate function/filter
  ------------------------------------------------------------------ */
  function govDate(timestamp) {
    return moment(timestamp).format('D MMMM YYYY')
  }

  function govShortDate(timestamp) {
    return moment(timestamp).format('D MMM YYYY')
  }

  function govTime(timestamp) {
    let t = moment(timestamp)
    if (t.minutes() > 0) {
      return t.format('h:mma')
    } else {
      return t.format('ha')
    }
  }

  /* ------------------------------------------------------------------
    standard dates for use in Nunjucks,
    example: {{ params.date | mojDate("datetime") }}
    outputs: 1 Jan 1970 at 1:32pm
  ------------------------------------------------------------------ */
  filters.mojDate = function (timestamp, type) {
    switch (type) {
      case 'datetime':
        return govDate(timestamp) + ' at ' + govTime(timestamp)
      case 'shortdatetime':
        return govShortDate(timestamp) + ' at ' + govTime(timestamp)
      case 'date':
        return govDate(timestamp)
      case 'shortdate':
        return govShortDate(timestamp)
      case 'time':
        return govTime(timestamp)
      default:
        return timestamp
    }
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}

addFilter ('formatDateString', function(dateString, inputFormat, outputFormat){
    return moment(dateString, inputFormat).format(outputFormat)
  })




  addFilter('formatTime', function(data, hourPlaceholder = '1', minutePlaceholder = '', ampmPlaceholder = 'pm') {
    let hour = data['time-hour'] || hourPlaceholder;
    let minute = data['time-minute'];
    if (minute && !['0', '00', ''].includes(minute)) {
      minute = ':' + minute;
    } else {
      minute = '';
    }
    let ampm = data['time-ampm'] || ampmPlaceholder;
    return `${hour}${minute}${ampm}`;
  });
  
  // Render the template with the data and filter
  const data = {
    'time-hour': '3',
    'time-minute': '45',
    'time-ampm': 'pm'
  };
  
  // Example template using the custom filter
  const template = '{{ data | formatTime("1", "", "pm") }}';


  