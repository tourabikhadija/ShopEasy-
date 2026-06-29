export default function AboutPage() {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to our store 👋 We are dedicated to providing high-quality
          products and a smooth shopping experience.
        </p>
      </section>

      <section className="about-content">
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the best products at affordable prices
            while ensuring customer satisfaction.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Vision</h2>
          <p>
            We aim to become a trusted online store recognized for quality,
            reliability, and great service.
          </p>
        </div>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ High quality products</li>
            <li>✔ Fast delivery</li>
            <li>✔ Secure payment</li>
            <li>✔ 24/7 support</li>
          </ul>
        </div>
      </section>
    </main>
  );
}