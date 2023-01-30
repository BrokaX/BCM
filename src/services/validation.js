import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string(),
  name: Yup.string(),
  email: Yup.string().email(),
  phone: Yup.number().integer().positive(),
  website: Yup.string().url(),
  youtube: Yup.string().url(),
  facebook: Yup.string().url(),
  instagram: Yup.string().url(),
  twitter: Yup.string().url(),
  whatsapp: Yup.number().integer().positive(),
});

export default validationSchema;
