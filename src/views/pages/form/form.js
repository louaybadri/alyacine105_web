import React from 'react'
import {
  CForm,
  CFormLabel,
  CFormInput,
  CCol,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CButton,
  CCardBody,
  CCard,
  CRow,
} from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const Form = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
      <CCol sm={12}>
        <CCard className="mb-5 pt-5">
          <CCol>
            <CRow>
              <CCol sm={10} className="m-auto h-75">
                <CCard className="mb-5">
                  <CCardBody>
                    <CCol sm={12} className="m-auto h-75">
                      <h2>Assign Schedule to Professor</h2>
                      <CForm>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Professor Id</CFormLabel>
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Professor"
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="formFile">Enter schedule here</CFormLabel>
                          <CFormInput type="file" id="formFile" />
                        </div>
                        <div className="row gx-3 gy-2 align-items-center">
                          <CCol sm={6}>
                            <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
                              Name
                            </CFormLabel>
                            <CFormInput id="specificSizeInputName" placeholder="Class" />
                          </CCol>
                          <CCol sm={6}>
                            <CFormLabel
                              className="visually-hidden"
                              htmlFor="specificSizeInputGroupUsername"
                            >
                              Class
                            </CFormLabel>
                            <CInputGroup>
                              <CInputGroupText>Department</CInputGroupText>
                              <CFormInput
                                id="specificSizeInputGroupUsername"
                                placeholder="Department"
                              />
                            </CInputGroup>
                          </CCol>
                          <CCol sm={12} xs="auto">
                            <CButton type="submit">Submit</CButton>
                          </CCol>
                        </div>
                      </CForm>
                    </CCol>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol sm={10} className="m-auto h-75">
                <CCard className="mb-5">
                  <CCardBody>
                    <CCol sm={12} className="m-auto h-75">
                      <h2>Assign Schedule to Student</h2>
                      <CForm>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Student Id</CFormLabel>
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Student"
                          />
                        </div>
                        <div className="mb-3">
                          <CFormLabel htmlFor="formFile">Enter schedule here</CFormLabel>
                          <CFormInput type="file" id="formFile" />
                        </div>
                        <div className="row gx-3 gy-2 align-items-center">
                          <CCol sm={6}>
                            <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
                              Name
                            </CFormLabel>
                            <CFormInput id="specificSizeInputName" placeholder="Class" />
                          </CCol>
                          <CCol sm={6}>
                            <CFormLabel
                              className="visually-hidden"
                              htmlFor="specificSizeInputGroupUsername"
                            >
                              Class
                            </CFormLabel>

                            <CFormSelect id="specificSizeSelect">
                              <option>Field ...</option>
                              <option value="1">A1</option>
                              <option value="2">A2</option>
                              <option value="3">A3</option>
                              <option value="4">A4</option>
                            </CFormSelect>
                          </CCol>
                          <CCol sm={12} xs="auto">
                            <CButton type="submit">Submit</CButton>
                          </CCol>
                        </div>
                      </CForm>
                    </CCol>
                  </CCardBody>
                </CCard>
              </CCol>
              {/*sec sec*/}
              <CCol sm={10} className="m-auto">
                <CCard className="mb-5">
                  <CCardBody>
                    <CCol sm={12} className="m-auto h-75">
                      <h2>Assign Student to Class</h2>
                      <CForm>
                        <div className="mb-3">
                          <CFormLabel htmlFor="exampleFormControlInput1">Student Id</CFormLabel>
                          <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Student"
                          />
                        </div>
                        <div className="row gx-3 gy-2 align-items-center">
                          <CCol sm={6}>
                            <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
                              Name
                            </CFormLabel>
                            <CFormInput id="specificSizeInputName" placeholder="Class" />
                          </CCol>
                          <CCol sm={6}>
                            <CFormLabel
                              className="visually-hidden"
                              htmlFor="specificSizeInputGroupUsername"
                            >
                              Class
                            </CFormLabel>
                            <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">
                              Preference
                            </CFormLabel>
                            <CFormSelect id="specificSizeSelect">
                              <option>Field ...</option>
                              <option value="1">A1</option>
                              <option value="2">A2</option>
                              <option value="3">A3</option>
                              <option value="4">A4</option>
                            </CFormSelect>
                          </CCol>
                          <CCol sm={12} xs="auto">
                            <CButton type="submit">Submit</CButton>
                          </CCol>
                        </div>
                      </CForm>
                    </CCol>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <CChartBar
              className="p-5"
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                    borderColor: getStyle('--cui-info'),
                    pointHoverBackgroundColor: getStyle('--cui-info'),
                    borderWidth: 2,
                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                    fill: true,
                  },
                  {
                    label: 'My Second dataset',
                    backgroundColor: 'transparent',
                    borderColor: getStyle('--cui-success'),
                    pointHoverBackgroundColor: getStyle('--cui-success'),
                    borderWidth: 2,
                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                  },
                  {
                    label: 'My Third dataset',
                    backgroundColor: 'transparent',
                    borderColor: getStyle('--cui-danger'),
                    pointHoverBackgroundColor: getStyle('--cui-danger'),
                    borderWidth: 1,
                    borderDash: [8, 5],
                    data: [65, 65, 65, 65, 165, 65, 65],
                  },
                ],
              }}
            ></CChartBar>
          </CCol>
        </CCard>
      </CCol>
    </>
  )
}

export default Form
