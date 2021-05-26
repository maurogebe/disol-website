import React                from "react";
import {Nav}                from "react-bootstrap";
import Link                 from "next/link";

import EmailIcon            from '@material-ui/icons/Email';
import FacebookIcon         from '@material-ui/icons/Facebook';
import YouTubeIcon          from '@material-ui/icons/YouTube';
import LinkedInIcon         from '@material-ui/icons/LinkedIn';
import ImportContactsIcon   from '@material-ui/icons/ImportContacts';
import VerifiedUserIcon     from '@material-ui/icons/VerifiedUser';


export default function Footer() {
  return(
    <div>
      <div className="footer">
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-sm-1"> </div>
            <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <h3>Disol</h3>
                  <div style={{display: 'inline-block'}}>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/">
                          <a className='footer' >
                            <Nav.Item> Inicio </Nav.Item>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/nosotros">
                          <a className='footer' >
                            <Nav.Item> Nosotros </Nav.Item>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/nuestrostutores#quierosertutordedisol" scroll={false}>
                          <a className='footer' >
                            <Nav.Item> Convertirme en Tutor </Nav.Item>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacidad">
                          <a className='footer' >
                            <Nav.Item> Política de Privacidad </Nav.Item>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-4 text-center">
                  <h3>Estudiantes</h3>
                  <div style={{display: 'inline-block'}}>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/disolapp">
                          <a className='footer' >
                            <Nav.Item> Disol App</Nav.Item>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/nuestrostutores">
                          <a className='footer' >
                            <Nav.Item> Nuestros Tutores </Nav.Item>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/#clasesgrupales">
                          <a className='footer' >
                            <Nav.Item> Clases grupales </Nav.Item>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/disolapp#faq">
                          <a className='footer' >
                            <Nav.Item> Preguntas frecuentes </Nav.Item>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-4 text-center">
                  <h3>Contacto</h3>
                  <div style={{display: 'inline-block'}}>
                    <ul className="list-unstyled text-left">
                      <li>
                        <a href="mailto:lopez.teresa@disol.mx?subject=Entrar en contacto" className="footer">
                          <EmailIcon htmlColor={'lightgrey'} style ={{marginRight:'20px'}}/>Email
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/disol.consulting/" target="_blank" className="footer">
                          <FacebookIcon htmlColor={'lightgrey'} style = {{ marginRight: '20px'}}/>Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UC7BRBoIqPjJouO_716jUyPA/featured" target="_blank"
                           className="footer">
                          <YouTubeIcon htmlColor={'lightgrey'} style={{marginRight:'20px'}}/>Youtube
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/dsl-diversity-solutions-consulting/" target="_blank" className="footer">
                          <LinkedInIcon htmlColor={'lightgrey'} style={{marginRight:'20px'}}/>Linkedin
                        </a>
                      </li>
                      <li>
                        <a href="/presskit" className="footer">
                          <ImportContactsIcon htmlColor={'lightgrey'} style={{marginRight:'20px'}}/>Presskit
                        </a>
                      </li>
                      <li>
                        <a href="/privacidad" className="footer">
                          <VerifiedUserIcon htmlColor={'lightgrey'} style={{marginRight:'20px'}}/>Privacidad
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-1"> </div>
          </div>
          <div className="row" style={{marginTop: 20}}>
            <div className="col-sm-12 text-center colofon">
              <div className="accent">DISOL CONSULTING, S.C.</div>
              <p> León, Gto, México</p>
              <p style={{marginTop: '30px', marginBottom: '30px'}}>
                Consulta nuestra política de privacidad de Disol App dando click
                <Link href="/privacidad">
                  <a style={{textDecoration: 'none', fontWeight: 500}}>
                    {' ' + 'aquí'}
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}