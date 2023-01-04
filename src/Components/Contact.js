
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function Contact() {
  return (
    <div className="contactdetail">
      <div className="row">
        <div className="col-md-4">
          <div className="cntcinfosec">
            <div className="sectitle txtlft">
              <h3>Informations de contact</h3>
            </div>
            <div className="cntcinfo-itm">
              <span className="cntcicon"><FontAwesomeIcon icon={faLocationDot} /> </span>
              E-commerce basé sur Nouméa.
              Livraison OPT offerte sur toute la NC à partir de 6 000 XPF d'achat.
              Livraison OPT offerte dans toute l'Océanie à partir de 14 000 XPF d'achat.
            </div>
            <div className="cntcinfo-itm">
              <span className="cntcicon">  <FontAwesomeIcon icon={faEnvelope} /> </span>
              
              <a href="mailto:contact@shana.nc">contact@shana.nc</a>
            </div>
          </div>

        </div>

        <div className="col-md-8">
          <div className="contactform">
            <form>
              <dv className="row">
                <div className="col-md-6">
                  <div className="formgroup mb-3">
                    <input className="form-control" type="text" id="name" required placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="formgroup mb-3">
                    <input className="form-control" type="text" id="name" required placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="formgroup mb-3">
                    <input className="form-control" type="email" id="email" required placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="formgroup mb-3">
                    <input className="form-control" type="number" id="number" required placeholder="Phone" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="formgroup mb-3">
                    <textarea className="form-control" type="text" required placeholder="Comment" />
                  </div>
                </div>
              </dv>
              <div className="submitbtn">
               <input class="form-control" type="submit" value="Envoyer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
