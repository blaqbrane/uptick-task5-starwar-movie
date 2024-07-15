import moment from 'moment'

export const getReleasedDate = (val: string | number) => {
    return moment(val).format('MMMM D YYYY');
   };