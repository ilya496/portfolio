import Card from "@/components/Card";

function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="section__header">
          <span className="section__subtitle">Home Server Services</span>
          <h2 className="section__title">Hosted Tools for Everyone</h2>
          <p className="section__text">
            I run a home server that hosts reliable services for people to use.
            These tools are tuned for privacy, performance, and easy access.
          </p>
        </header>
        <div className="section__content">
          <ul className="services-grid">
            <li className="services-grid__item">
              <Card
                name="Jellyfin"
                category="Media"
                description="Personal media server hosting 4K movies, TV series, and music."
                status="online"
                url="http://192.168.1.100:8096"
                localIpOrDomain="192.168.1.100"
                imageUrl="/images/jellyfin-banner.png"
                metrics={[
                  { label: "Port", value: "8096" },
                  { label: "Streams", value: "2 Direct" },
                  { label: "Storage", value: "8.2 TB" },
                ]}
              />
            </li>

            <li className="services-grid__item">
              <Card
                name="TrueNAS CORE"
                category="Storage"
                description="Primary ZFS storage array for backups and network file shares."
                status="online"
                url="https://truenas.lab.home"
                localIpOrDomain="truenas.lab.home"
                imageUrl="/images/truenas-banner.webp"
                metrics={[
                  { label: "Pool Health", value: "HEALTHY" },
                  { label: "Capacity", value: "14.2 / 24 TB" },
                ]}
              />
            </li>

            <li className="services-grid__item">
              <Card
                name="Survival SMP"
                category="Gaming"
                description="Lorem ipsum dolor sit amet."
                status="online"
                url="http://192.168.1.105:25565"
                localIpOrDomain="mc.lab.home"
                imageUrl="/images/minecraft-banner.png"
                metrics={[
                  { label: "Port", value: "25565" },
                  { label: "Players", value: "5 / 20" },
                  { label: "RAM", value: "4.2 / 8 GB" },
                ]}
              />
            </li>

            <li className="services-grid__item">
              <Card
                name="Dev Portfolio"
                category="Web"
                description="Staging build of custom React web application running in Docker."
                status="updating"
                url="http://192.168.1.120:3000"
                localIpOrDomain="192.168.1.120"
                imageUrl="/images/nginx-banner.png"
                metrics={[
                  { label: "Container", value: "Docker" },
                  { label: "Port", value: "3000" },
                ]}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
