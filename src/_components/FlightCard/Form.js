'use client';
import styled from 'styled-components';
import { formatDate } from '../../_utils/formatDate';
import { useHandleForm } from './useHandleForm';
import PrimaryButton from '../PrimaryButton';
import Error from '../Error';
import Input from '../FormElements/Input';
import Label from '../FormElements/Label';
import SelectDate from '../FormElements/SelectDate';
import SelectTitle from '../FormElements/SelectTitle';
import TextArea from '../FormElements/TextArea';
import Email from '../FormElements/Email';
import PhoneNumber from '../FormElements/PhoneNumber';

const StyledForm = styled.form`
  margin-top: 10px;
  padding: 35px 35px;
  border-radius: 20px;
  background-color: var(--grey-color-100);
  @media screen and (max-width: 991px) {
    padding: 20px 20px;
  }
`;

const SubmitButtonDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const FormItem = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default function Form({ flight }) {
  const {
    email,
    setEmail,
    handleEmailChange,
    phoneNumber,
    setPhoneNumber,
    ticketValidity,
    handleValidityChange,
    receiveNow,
    setReceiveNow,
    receiptDate,
    setReceiptDate,
    passengers,
    handleUpdatePassenger,
    message,
    setMessage,
    passengerErrors,
    errorMessage,
    flightError,
    handleSubmit,
  } = useHandleForm(flight);

  return (
    <StyledForm>
      <PassengerData
        passengers={passengers}
        handleUpdatePassenger={handleUpdatePassenger}
        passengerErrors={passengerErrors}
      />
      <ContactDetails
        email={email}
        setEmail={setEmail}
        handleEmailChange={handleEmailChange}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <TicketValidityOptions
        ticketValidity={ticketValidity}
        handleValidityChange={handleValidityChange}
      />
      <ReceiptOptions
        receiveNow={receiveNow}
        setReceiveNow={setReceiveNow}
        receiptDate={receiptDate}
        setReceiptDate={setReceiptDate}
      />
      <Message message={message} setMessage={setMessage} />
      {errorMessage && <Error>{errorMessage}</Error>}
      {flightError && <Error>{flightError}</Error>}
      <SubmitButtonDiv>
        <PrimaryButton type="button" onClick={handleSubmit}>
          Select Flight and Review
        </PrimaryButton>
      </SubmitButtonDiv>
    </StyledForm>
  );
}

const PassengerFields = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  margin-top: 8px;
  @media screen and (max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
  }
`;

const Title = styled(SelectTitle)`
  width: 20%;
  box-shadow: var(--input-box-shadow-sm);
  -webkit-box-shadow: var(--input-box-shadow-sm);
  -moz-box-shadow: var(--input-box-shadow-sm);
  @media screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const FirstName = styled(Input)`
  width: 100%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const LastName = styled(Input)`
  width: 100%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

function PassengerData({ passengers, handleUpdatePassenger, passengerErrors }) {
  let adultCount = 0;
  let childCount = 0;
  let infantCount = 0;

  return (
    <FormRow>
      {passengers.map((passenger, index) => {
        let label = '';
        if (passenger.type === 'Adult') {
          label = `Adult ${++adultCount}`;
        } else if (passenger.type === 'Child') {
          label = `Child ${++childCount}`;
        } else if (passenger.type === 'Infant') {
          label = `Infant ${++infantCount}`;
        }
        return (
          <FormItem>
            <Label>{label}</Label>
            <PassengerFields>
              <Title
                value={passenger.title}
                onChange={(e) =>
                  handleUpdatePassenger(index, 'title', e.target.value)
                }
              />
              <FirstName
                type="text"
                required
                name={`firstName${index}`}
                id={`firstName${index}`}
                placeholder="First Name"
                value={passenger.firstName}
                onChange={(e) =>
                  handleUpdatePassenger(index, 'firstName', e.target.value)
                }
              />
              <LastName
                type="text"
                required
                name={`lastName${index}`}
                id={`lastName${index}`}
                placeholder="Last Name"
                value={passenger.lastName}
                onChange={(e) =>
                  handleUpdatePassenger(index, 'lastName', e.target.value)
                }
              />
            </PassengerFields>
            {passengerErrors && (
              <>
                {passengerErrors.firstName && (
                  <Error>{passengerErrors.firstName}</Error>
                )}
                {passengerErrors.lastName && (
                  <Error>{passengerErrors.lastName}</Error>
                )}
              </>
            )}
          </FormItem>
        );
      })}
    </FormRow>
  );
}

function ContactDetails({
  email,
  handleEmailChange,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <FormRow>
      <FormItem>
        <Email email={email} handleEmailChange={handleEmailChange} />
      </FormItem>
      <FormItem>
        <PhoneNumber
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </FormItem>
    </FormRow>
  );
}

const TicketValidityWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const TicketValidityBox = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--input-box-shadow-sm);
  -webkit-box-shadow: var(--input-box-shadow-sm);
  -moz-box-shadow: var(--input-box-shadow-sm);
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  position: relative;
  flex: 1;
  & input[type='radio'] {
    position: absolute;
    opacity: 0;
  }
  & input[type='radio']:checked + div {
    background-color: var(--primary-color-500);
    color: #fff;
    border: 1px solid var(--primary-color-500);
  }
  & input[type='radio']:checked + div span {
    color: var(--primary-color-100);
  }
  &:active {
    background-color: #dee2e6;
  }
  &:hover {
    background-color: #e9ecef;
  }
`;

const TicketValidityInnerBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  border: 2px solid transparent;
  border-radius: 4px;
  @media screen and (max-width: 991px) {
    padding: 12.5px;
  }
`;

const Price = styled.span`
  color: var(--grey-color-600);
  font-weight: 500;
  margin-left: 3px;
`;

function TicketValidityOptions({ ticketValidity, handleValidityChange }) {
  const options = [
    { value: '48 Hours', label: '48 Hours', price: 12 },
    { value: '7 Days', label: '7 Days', price: 19 },
    { value: '14 Days', label: '14 Days', price: 22 },
  ];

  return (
    <TicketValidityWrapper>
      <Label htmlFor="ticketValidity">Choose Ticket Validity</Label>
      <TicketValidityBox>
        {options.map((option) => (
          <Option>
            <input
              type="radio"
              name="ticketValidity"
              value={option.value}
              checked={ticketValidity === option.value}
              onChange={handleValidityChange}
            />
            <TicketValidityInnerBox>
              {option.label} - <Price>${option?.price} / person</Price>
            </TicketValidityInnerBox>
          </Option>
        ))}
      </TicketValidityBox>
    </TicketValidityWrapper>
  );
}

const ReceiptWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const RadioGroup = styled.div`
  display: block;
`;

const RadioLabel = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 15px;
  margin-bottom: 5px;
`;

function ReceiptOptions({
  receiveNow,
  receiptDate,
  setReceiveNow,
  setReceiptDate,
}) {
  return (
    <ReceiptWrapper>
      <Label>Receive Ticket On</Label>
      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            name="receiveTicket"
            checked={receiveNow}
            onChange={() => setReceiveNow(true)}
          />
          <span>I need it now</span>
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            name="receiveTicket"
            checked={!receiveNow}
            onChange={() => setReceiveNow(false)}
          />
          <span>I need it on a later date</span>
        </RadioLabel>
      </RadioGroup>
      {!receiveNow && (
        <FormRow>
          <FormItem>
            <SelectDate
              selectedDate={receiptDate && formatDate(receiptDate)}
              onDateSelect={setReceiptDate}
              minDate={new Date()}
              placeholder="Select receipt date"
            />
          </FormItem>
        </FormRow>
      )}
    </ReceiptWrapper>
  );
}

const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
`;

function Message({ message, setMessage }) {
  return (
    <StyledTextarea>
      <Label optional>Special Requests</Label>
      <TextArea
        value={message}
        placeholder="Special requests"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </StyledTextarea>
  );
}
