import React, { FC } from 'react'
import { Box, Modal, Input, Typography, Button } from '@mui/material'
import styles from './addContactModal.module.scss'
import { Formik, FormikErrors, FormikHelpers } from 'formik'
import { isEmail } from '../../helpers/validators'
import { useActions } from '../../hooks/useActions'

interface IProps {
  open: boolean,
  onClose: () => void
}

interface IFormValues {
  firstname: string,
  lastname: string,
  middlename: string,
  email: string,
  phone: string
}

export const AddContactModal: FC<IProps> = ({open, onClose}) => {
  const { addContact } = useActions()

  const submitHandler = async (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
    await addContact(values)
    actions.setSubmitting(false)
    onClose()
  }
  const validate = (values: IFormValues) => {
    const errors: FormikErrors<IFormValues> = {}
    if (!values.firstname) {
      errors.firstname = 'Required'
    }
    if (!values.phone) {
      errors.phone = 'Required'
    }
    if (values.email && !isEmail(values.email)) {
      errors.email = 'Invalid email'
    }
    return errors
  }
  const initialValues: IFormValues = {
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    phone: '',
  }

  return (
    <Modal open={open}
           onClose={onClose}>
      <Box className={styles.wrapper}>
        <Typography sx={{textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
          Add new Contact
        </Typography>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={submitHandler}>
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputBox}>
                <Input
                  type='text'
                  name='firstname'
                  placeholder='First name'
                  error={!!errors.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
                {errors.firstname && touched.firstname && errors.firstname}
              </div>
              <div className={styles.inputBox}>
                <Input
                  type='text'
                  name='lastname'
                  placeholder='Last name'
                  error={!!errors.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
                {errors.lastname && touched.lastname && errors.lastname}
              </div>
              <div className={styles.inputBox}>
                <Input
                  type='text'
                  name='middlename'
                  placeholder='Middle name'
                  error={!!errors.middlename}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.middlename}
                />
                {errors.middlename && touched.middlename && errors.middlename}
              </div>
              <div className={styles.inputBox}>
                <Input
                  type='number'
                  name='phone'
                  placeholder='Phone'
                  error={!!errors.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && errors.phone}
              </div>
              <div className={styles.inputBox}>
                <Input
                  type='email'
                  name='email'
                  placeholder='Email'
                  error={!!errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <Button type="submit" disabled={isSubmitting} variant="outlined">
                Submit
              </Button>
              {isSubmitting && <span>Saving...</span>}
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  )
}