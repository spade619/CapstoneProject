const Footer = () => {





    return (
        <section className="footer">
          <hr className="footer-seperator" />
          <section className="footer-social-media">
            <a href="" target="_blank" rel="noopener noreferrer">Nel Infinity</a>
          </section>
          <section className="footer-info">
            <section className="footer-info-left">
              <section className="footer-info__name">
                  Alnil Tanudtanud
              </section>
              <section className="footer-info__returns">
                Returns Policy
                <br />
                Auto Dialer
              </section>        
            </section>
            <section className="footer-info-center">
              <section className="footer-info__email">
                alniltanudtanud@gmail.com
              </section>
              <section className="footer-info__terms">
                Terms and Conditions
                <br />
                <p>Copyright &copy;</p>
              </section>
            </section>
            <section className="footer-info-right">
              <section className="footer-info__number">
                0916-8894-452
              </section>
              <section className="footer-info__contact">
                My Story
                <br />
                Contact Us
              </section>
            </section>
          </section>
          <hr className="footer-seperator" />
        </section>
      )
}

export default Footer