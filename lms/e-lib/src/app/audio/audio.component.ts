import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  podcastList: any[] = [
    {
      title: 'The Clever Parrot and the Laid-Back Cat',
      description:" ",
      imageUrl: 'https://www.storynory.com/wp-content/uploads/2023/09/cat-parrot-cover-art-600x600.jpg?ezimgfmt=ng%3Awebp%2Fngcb6%2Frs%3Adevice%2Frscb6-1',
      audioSrc: 'assets/cat-and-parrot-st3.mp3',
      author:' by Winifred Finlay',
      isPlaying: false
    },
    {
      title: 'Damsel The Elephant',
      description: 'The Lion and the Mouse is a classic Aesop fable. A lion generously spares a mouse it was about to kill. The mouse promise to repay the lion some day.',
      imageUrl: 'https://www.storynory.com/wp-content/uploads/2023/08/damsel-coverart-600x600.jpg?ezimgfmt=rs:599x599/rscb6/ng:webp/ngcb6',
      audioSrc: 'assets/damsel-the-elephant-st.mp3',
      author:' by Aesop',
      isPlaying: false
    },
    {
      title:'Tea Kettle',
      description:"The story of a tea kettle that comes alive and do magic tricks",
      imageUrl: 'https://www.storynory.com/wp-content/uploads/2023/08/enchanted-kettle-runs-away-600x450.jpg?ezimgfmt=rs:470x353/rscb6/ngcb6/notWebP',
      audioSrc: 'assets/chile.mp3',
      isPlaying: false
    },
    {
      title: 'Childe Rowland',
      description: 'This story is quite dark and mysterious and it features a very old English game, which we call Football, and in America, known as Soccer.',
      imageUrl: 'https://www.storynory.com/wp-content/uploads/2023/03/dark-tower-videoart-600x390.jpg?ezimgfmt=rs:471x306/rscb6/ng:webp/ngcb6',
      audioSrc: 'assets/chile.mp3',
      author:' by Aesop',
      isPlaying: false
    }
  ];

  selectedPodcast: any = null;

  constructor() {}

  playPodcast(podcast: any) {
    this.podcastList.forEach((p: any) => {
      p.isPlaying = false;
    });
    podcast.isPlaying = true;
    this.selectedPodcast = podcast;

    console.log('Playing podcast:', podcast.title);
    console.log('Audio source:', podcast.audioSrc);
  }
}

