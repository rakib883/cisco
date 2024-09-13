import { Accordion, } from 'rsuite';

const According = ({header,des}) => {
  return (
    <>
     
      <Accordion >
        <Accordion.Panel  header={header}>
          <p>{des}</p>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default According