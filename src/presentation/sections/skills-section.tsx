export default function Skills() {
  return (
    <div id="skills" className="py-20">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-20">
        What I do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-muted-foreground text-sm">
        <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
          <h3 className="text-lg text-foreground font-semibold mb-2">
            Frontend Development
          </h3>
          <p>
            Building responsive and accessible interfaces using React, Next.js
            and Tailwind CSS — with attention to UX and detail.
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
          <h3 className="text-lg text-foreground font-semibold mb-2">
            Backend Architecture
          </h3>
          <p>
            Creating clean, scalable APIs with Node.js, Express and NestJS.
            Experienced in database design (PostgreSQL, MongoDB).
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
          <h3 className="text-lg text-foreground font-semibold mb-2">
            Full-Stack Integration
          </h3>
          <p>
            Delivering end-to-end features — from data models to UI — with
            attention to performance, reusability, and clean structure.
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-2xl shadow-sm">
          <h3 className="text-lg text-foreground font-semibold mb-2">
            Tech Stack & Tooling
          </h3>
          <p>
            Comfortable with TypeScript, REST, Git, Cloudinary, CI/CD workflows.
            Emphasis on DX, maintainability, and developer happiness.
          </p>
        </div>
      </div>
      <div className="max-w-4xl px-4 mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-16 ">
          The tools I&apos;m using
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Visual Studio Code
            </h3>
            <p>
              Потужне середовище розробки з широким набором розширень для
              ефективної роботи з кодом.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Postman
            </h3>
            <p>
              Інструмент для тестування та налагодження API, що спрощує процес
              інтеграції та перевірки серверних запитів.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Git & GitHub
            </h3>
            <p>
              Системи контролю версій для спільної роботи над кодом та
              управління проєктами.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Figma
            </h3>
            <p>
              Використовую для співпраці з дизайнерами та створення
              інтерактивних прототипів інтерфейсів.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
