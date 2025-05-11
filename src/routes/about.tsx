import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'About page of brian.staruk.net.',
      },
      {
        title: 'About | brian.staruk.net',
      },
    ],
  }),
});

function About() {
  return (
    <div className="flex flex-col gap-5">
      <h1>About Page</h1>
      <p>
        Integer a neque urna. Morbi nec urna id magna facilisis ullamcorper sit
        amet ac lectus. Cras imperdiet turpis turpis, ac vehicula sem pharetra
        ut. Proin semper nisi neque, eget interdum tellus pretium et. Duis justo
        enim, facilisis id pulvinar et, faucibus quis turpis. Nam molestie nec
        risus sed pharetra. Etiam consequat augue a nibh auctor blandit. Cras
        gravida nunc eu aliquet fermentum. Pellentesque quis elit tincidunt,
        sagittis tellus luctus, commodo magna. Mauris sit amet metus et mi
        gravida eleifend finibus a odio. Integer gravida ex ac justo rhoncus
        condimentum. Fusce convallis vel nisi molestie tincidunt. Vestibulum sed
        lorem sed diam condimentum dignissim eu in turpis. Nullam in sapien
        magna. Suspendisse turpis quam, finibus eget nisl sit amet, euismod
        faucibus metus.
      </p>
      <p>
        Cras vulputate urna massa, et consequat erat efficitur nec. Pellentesque
        fermentum, dolor sit amet dapibus eleifend, ante elit fermentum metus,
        ac vehicula arcu metus luctus metus. Curabitur consectetur viverra
        sapien, non varius est molestie vel. Mauris auctor placerat ligula, ac
        vestibulum nunc facilisis eu. Quisque et turpis justo. Suspendisse
        laoreet libero sed lorem posuere, eu tempus dui feugiat. Nulla velit
        massa, euismod et ultricies id, malesuada id velit. Nunc eu metus nunc.
        Vestibulum sodales, dui at ullamcorper tempus, mauris nunc scelerisque
        arcu, non gravida nibh diam eu leo. Sed congue fermentum enim a dapibus.
        Donec maximus, ante non lobortis fermentum, ligula arcu consectetur sem,
        sit amet tincidunt purus leo a metus. In purus velit, gravida ac arcu
        in, eleifend tristique dolor. Nullam vulputate dolor ac bibendum
        ultrices.
      </p>
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
