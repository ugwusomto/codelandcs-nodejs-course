const replacePlaceHolder = (template, user) => {
  let result = template.replace(/{% PROFILE_ID %}/g, user.id);
  result = result.replace(/{% PROFILE_IMAGE %}/g, user.picture);
  result = result.replace(/{% PROFILE_NAME %}/g, user.name);
  result = result.replace(/{% PROFILE_OCCUPATION %}/g, user.occupation);
  result = result.replace(/{% PROFILE_EMAIL %}/g, user.email);
  result = result.replace(/{% PROFILE_BIO %}/g, user.bio);
  return result;
};


module.exports = replacePlaceHolder