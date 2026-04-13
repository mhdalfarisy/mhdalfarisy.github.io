import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <div className="po_img_wrap">
                <img src={data.img} alt={data.title || ""} />
              </div>
              <div className="po_card_body">
                {data.title && <h6 className="po_title">{data.title}</h6>}
                <hr className="po_divider" />
                {data.description && <p className="po_desc">{data.description}</p>}
                {data.tech_stack && (
                  <div className="po_tech_wrap">
                    {data.tech_stack.map((tech, j) => (
                      <span key={j} className="po_badge">{tech}</span>
                    ))}
                  </div>
                )}
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="po_btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
