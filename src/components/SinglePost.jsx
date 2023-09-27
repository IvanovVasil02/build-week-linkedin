import { Card, Col, Image, Row } from "react-bootstrap";
import { PlusLg, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const SinglePost = ({ elem, cancella, profile }) => {
  const calcolaData = () => {
    const createdate = new Date(elem.createdAt);
    const createMin = createdate.getMinutes();
    const createOre = createdate.getHours();
    const createGiorni = createdate.getDay();
    const createMesi = createdate.getMonth();
    const createAnno = createdate.getFullYear();
    const actualedate = new Date();
    const actualeMin = actualedate.getMinutes();
    const actualeOre = actualedate.getHours();
    const actualeGiorni = actualedate.getDay();
    const actualeMesi = actualedate.getMonth();
    const actualeAnno = actualedate.getFullYear();

    if (actualeAnno === createAnno) {
      if (actualeMesi === createMesi) {
        if (actualeGiorni === createGiorni) {
          if (actualeOre === createOre) {
            if (actualeMin === createMin) {
              return "adesso";
            } else return `${actualeMin - createMin} ${actualeMin - createMin === 1 ? "minuto fa" : "minuti fa"}`;
          } else return `${actualeOre - createOre} ${actualeOre - createOre === 1 ? "ora fa" : "ore fa"}`;
        } else
          return `${actualeGiorni - createGiorni} ${actualeGiorni - createGiorni === 1 ? "giorno fa" : "giorni fa"}`;
      } else return `${actualeMesi - createMesi} ${actualeMesi - createMesi === 1 ? "mese fa" : "mesi fa"}`;
    } else return `${actualeAnno - createAnno} ${actualeAnno - createAnno === 1 ? "anno fa" : "anni fa"}`;
  };
  return (
    elem &&
    profile && (
      <div className="border border-1 rounded-3 shadow my-3 p-3">
        <Row className=" justify-content-between mb-2">
          <Col xs="auto">
            <Image
              src={elem ? elem.user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
              alt="profileImg"
              width="60px"
              height="60px"
              roundedCircle
            />
          </Col>
          <Col sm={5} lg={7} className=" order-5 order-sm-0">
            <div className="d-flex flex-column">
              <h6>
                {elem.user.name} {elem.user.surname}
              </h6>
              <p
                className="w-100 mb-0"
                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", fontSize: "14px" }}
              >
                {elem.user.bio}
              </p>
              <p style={{ fontWeight: "300", fontSize: "12px" }}> {calcolaData()}</p>
            </div>
          </Col>
          <Col xs={12} sm={3} className="text-primary text-end ">
            {profile._id !== elem.user._id && (
              <>
                <PlusLg className="me-2" />
                <span className="d-none d-sm-inline-block">SEGUI</span>
              </>
            )}
            {profile._id === elem.user._id && (
              <Trash
                className="text-danger ms-2"
                onClick={() => {
                  cancella(elem._id);
                }}
              />
            )}
          </Col>
        </Row>
        <p className="">{elem.text}</p>
      </div>
    )
  );
};
export default SinglePost;
