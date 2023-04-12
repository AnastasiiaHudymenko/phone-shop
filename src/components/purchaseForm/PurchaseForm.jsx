import { Formik, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteBasket } from 'redux/selectors';
import { Badge, Button } from 'react-bootstrap';

import {
  InputStyled,
  SelectStyled,
  FormStyled,
  TitleGoods,
  ErrMsg,
  TotalPrice,
} from './PurchaseForm.styled';

export const PurchaseForm = () => {
  const [deliveryType, setDeliveryType] = useState('');
  const { basketProduct } = useSelector(getFavoriteBasket);

  const isDelivery = deliveryType !== 'address';

  const r = !isDelivery ? string().required('Required') : string();

  let userSchema = object({
    name: string().required('Required'),
    phone: number().required('Required').positive().integer(),
    sureName: string().required('Required'),
    addresUser: r,
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const handleDeliveryChange = event => {
    setDeliveryType(event.target.value);
  };

  const totalPrice = () => {
    return basketProduct.reduce((acc, el) => {
      acc += el.price;
      return acc;
    }, 0);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        sureName: '',
        phone: '',
        addresUser: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormStyled>
        <TitleGoods>
          {' '}
          <Badge bg="dark">Choose a shipping method:</Badge>
        </TitleGoods>
        <div>
          <label>
            <SelectStyled
              name="delivery"
              value={deliveryType}
              onChange={handleDeliveryChange}
            >
              <option value="--Choose method--">--Choose method--</option>
              <option value="pickup">Pickup</option>
              <option value="address">Address</option>
            </SelectStyled>
          </label>
        </div>
        <InputStyled placeholder="Your name" type="text" name="name" />
        <ErrorMessage name="name">{msg => <ErrMsg>{msg}</ErrMsg>}</ErrorMessage>
        <InputStyled placeholder="Your last name" type="text" name="sureName" />
        <ErrorMessage name="sureName">
          {msg => <ErrMsg>{msg}</ErrMsg>}
        </ErrorMessage>
        <InputStyled placeholder="Your phone" type="tel" name="phone" />
        <ErrorMessage name="phone">
          {msg => <ErrMsg>{msg}</ErrMsg>}
        </ErrorMessage>
        <InputStyled
          placeholder="Your addres"
          name="addresUser"
          disabled={isDelivery}
        />
        <ErrorMessage name="addresUser">
          {msg => <ErrMsg>{msg}</ErrMsg>}
        </ErrorMessage>
        <TitleGoods>
          <Badge bg="success">To pay: {totalPrice()}$</Badge>{' '}
          <Badge bg="success">delivery: {!isDelivery ? 50 : 0}$</Badge>
        </TitleGoods>
        <h2>
          Total:
          <TotalPrice
            name="totalPrice"
            type="text"
            readOnly
            value={`${totalPrice() + (!isDelivery ? 50 : 0)}$`}
          />
          <Badge bg="dark"></Badge>
        </h2>
        <Button type="submit" variant="outline-dark">
          Send
        </Button>
      </FormStyled>
    </Formik>
  );
};
