export const subString = (str, start, end) => {
    const string = str?.slice(0, start) + "..." + str?.slice(str?.length - end);
    return string;
  };
  