import * as yup from 'yup';
export const schema = yup.object().shape({
  name: yup.string().required(),
  slogan:yup.string(),
  email: yup.string().email(),
  phone: yup.number().required().positive().integer(),
  youtube:yup.string().url(),
  instagram:yup.string().url(),
  twitter:yup.string().url(),
  whatsapp:yup.number().positive().integer(),
  website:yup.string().url().required(),
  facebook:yup.string().url().required()
});
