import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Home page of brian.staruk.net.',
      },
      {
        title: 'Home | brian.staruk.net',
      },
    ],
  }),
});

function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit
        sapien, tempus at sollicitudin sed, suscipit sed nunc. Sed sed elit sed
        velit gravida sodales quis vitae justo. Nulla vitae felis sit amet mi
        tincidunt tincidunt ut in sapien. Etiam eu pellentesque ex, vitae tempor
        nibh. Integer sollicitudin id mi vel varius. Nullam vel mi eget turpis
        euismod gravida non ac urna. Nam mauris erat, lacinia eu euismod sit
        amet, accumsan id eros. Praesent eu ante consectetur, hendrerit velit
        ut, porta nibh. Pellentesque finibus purus tellus, sed dictum diam
        placerat a. Sed pretium erat augue, id euismod mi lobortis ut.
      </p>
      <p>
        Cras vel volutpat erat. Aliquam vestibulum odio ut iaculis porttitor.
        Donec sed nulla ornare, porttitor quam eu, dictum orci. Suspendisse
        vulputate sapien leo, et hendrerit lorem imperdiet tempus. Vestibulum
        eget blandit lacus. Vestibulum dignissim maximus ex. Curabitur
        vestibulum metus in ex vulputate, at sagittis mauris mattis. Integer in
        venenatis erat, sit amet congue ante.
      </p>
    </div>
  );
}
