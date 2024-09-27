import { Code, Facebook, GitHub, Instagram, LinkedIn,Twitter, YouTube } from "@mui/icons-material";
import styled from "styled-components";

import Codegreeper from "./assets/codegreeper.png";
import Freelancer from "./assets/freelancer.png";
import Fuzu from './assets/fuzu.png'
import Latium from './assets/latium.png'
import Upwork from './assets/upwork.png'
import Microverse from "./assets/microverse.png";
import Openbase from "./assets/openbase.png";
import Hackerrank from "./assets/hackerrank.png";
import Pluralsight from "./assets/pluralsight.png";
import Morioh from "./assets/morioh.png";
import Turing from "./assets/turing.png";
import Careerkarma from "./assets/careerkarma.png";
import W3schools from "./assets/w3schools.png";
import Fiverr from "./assets/fiverr.png";
import Geeksforgeeks from './assets/geeksforgeeks.png';
import Discord from './assets/discord.png'
import Truelancer from './assets/truelancer.png';
import Jobstreet from './assets/jobstreet.png';
import Glassdoor from './assets/glassdoor.png' 
import Crossover from './assets/crossover.png';
import Toptal from './assets/toptal.png';
import Jobcase from './assets/jobcase.png';
import Guru from './assets/guru.png';
import Xteam from './assets/x-team.png';

function App() {

  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
  `

  const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    margin: 10px 0px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid green;
    *{
      color: #36454F;
      width: 40px;
      height: 40px;
    }
  `

  const Image = styled.img`
    width: 30px;
    height: 30px;
    object-fit: fill;
    object-position: center;
  `
  const Link = styled.a`
    text-decoration: none;
  `
  return (
    <Container>

      <Wrapper>
        <Link href='https://www.facebook.com/kibetkorirc/' target='_blank' >
          <Facebook />
        </Link>
        <Link href='https://twitter.com/ancientpupy' target='_blank'>
          <Twitter />
        </Link>
        <Link href='https://www.instagram.com/ancientpupy/' target='_blank'>
          <Instagram />
        </Link>
        <Link href='https://www.linkedin.com/in/kibetkorir/' target='_blank'>
          <LinkedIn />
        </Link>
        <Link href='https://github.com/K-kibet' target='_blank'>
          <GitHub />
        </Link>
        <Link href='https://www.youtube.com/channel/UCGuHbwfZ2JHMDBpDLGtQhjQ' target='_blank'><YouTube /></Link>
      </Wrapper>

      <Wrapper>
        <Link href='https://www.pinterest.com/charleykibet254/' target='_blank'><i class='fab fa-pinterest'></i></Link>
        <Link href='https://www.reddit.com/user/kibetkorir' target='_blank'><i class='fab fa-reddit-alien'></i></Link>
        <Link href='https://www.tumblr.com/blog/z-code' target='_blank'><i class='fab fa-tumblr'></i></Link>
        <Link href='https://dribbble.com/ancientpupy' target='_blank'><i class='fab fa-dribbble'></i></Link>
        <Link href='https://scifi.stackexchange.com/users/153986/k-kibet' target='_blank'><i class='fab fa-stack-exchange'></i></Link>
        <Link href='https://vimeo.com/user158865859' target='_blank'><i class='fab fa-vimeo-v'></i></Link>
        <Link href='https://discord.com/channels/@me' target='_blank'> <Image src={Discord}/></Link>
      </Wrapper>

      <Wrapper>
        <Link href='https://codepen.io/KKibet' target='_blank'><i class='fab fa-codepen'></i></Link>
        <Link href='https://stackoverflow.com/users/17550461/k-kibet' target='_blank'><i class='fab fa-stack-overflow'></i></Link>
        <Link href='https://www.hackerrank.com/KibetKorir' target='_blank'><Image src={Hackerrank}/></Link>
        <Link href='https://www.codegrepper.com/profile/kibet-korir' target='_blank'><Image src={Codegreeper}/></Link>
        <Link href='https://g.dev/korirkibet' target='_blank'><Code /></Link>
        <Link href='https://www.npmjs.com/~kkibet' target='_blank'><i class='fab fa-npm'></i></Link>
      </Wrapper>

      <Wrapper>
        <Link href='https://my-learning.w3schools.com/' target='_blank'><Image src={W3schools}/></Link>
        <Link href='https://app.pluralsight.com/profile/charles-kibet' target='_blank'><Image src={Pluralsight}/></Link>
        <Link href='https://apply.microverse.org/application/coding-challenges/complete-coding-challenges' target='_blank'><Image src={Microverse}/> </Link>
        <Link href='https://www.freecodecamp.org/fccbfaf92b8-c6cc-4449-bb2b-aa21402bb2f5' target='_blank'><i class="fa fa-free-code-camp"></i> </Link>
        <Link href='https://developers.turing.com/' target='_blank'><Image src={Turing} /> </Link>
        <Link href='https://careerkarma.com/profile/ckr3ackra100555761pmxpqszej8/' target='_blank'><Image src={Careerkarma}/> </Link>
        <Link href="https://auth.geeksforgeeks.org/user/x54hpa5rr37kglcugeh0i912uyu1eoqgx9qi4lz1" target='_blank'><Image src={Geeksforgeeks}/></Link>
      </Wrapper>

      <Wrapper>
        
        <Link href='https://www.fiverr.com/clawn45?up_rollout=true' target='_blank'><Image src={Fiverr}/></Link>
        <Link href='https://www.upwork.com/freelancers/~01d59fc71a1e549e64'><Image src={Upwork}/></Link>
        <Link href='https://www.freelancer.com/u/KibetK' target='_blank'><Image src={Freelancer}/></Link>
        <Link href='https://www.truelancer.com/freelancer/charleskibet' target='_blank'><Image src={Truelancer}/></Link>
        <Link href='https://latium.org/profile' target='_blank'><Image src={Latium}/></Link>
        <Link href='https://www.fuzu.com/profile' target='_blank'><Image src={Fuzu}/></Link>
      </Wrapper>

      <Wrapper>
        <Link href='https://www.blogger.com/blog/posts/3036173244757267766?hl=en&tab=jj' target='_blank'><i class='fab fa-blogger'></i></Link>
        <Link href='https://kkibet.quora.com/' target='_blank'><i class='fab fa-quora'></i></Link>
        <Link href='https://dev.to/kkibet' target='_blank'><i class='fab fa-dev'></i></Link>
        <Link href='https://medium.com/@charleykibet254' target='_blank'><i class='fab fa-medium'></i></Link>
        <Link href='https://morioh.com/@61f5a35c35f9335efc6462cb' target='_blank'><Image src={Morioh}/></Link>
        <Link href='https://openbase.com/user/K-kibet' target='_blank'> <Image src={Openbase}/></Link>
      </Wrapper>
      <Wrapper>
        <Link href='https://www.toptal.com/platform/talent/application_info/edit' target='_blank'> <Image src={Toptal}/></Link>
        <Link href='https://www.guru.com/freelancers/charles-kibet' target='_blank'> <Image src={Guru}/></Link>
        <Link href='https://jobs.x-team.com/profile/' target='_blank'> <Image src={Xteam}/></Link>
        <Link href='https://www.jobcase.com/profile/IwXKxps5JjEm6PDvAlaC2V-j' target='_blank'> <Image src={Jobcase}/></Link>
        <Link href='https://myjobstreet.jobstreet.com.sg/resume/preview-resume.php' target='_blank'><Image src={Jobstreet}/></Link>
        <Link href='https://www.glassdoor.com/member/profile/stepWelcome.htm' target='_blank'> <Image src={Glassdoor}/></Link>
        <Link href='https://www.crossover.com/my-profile' target='_blank'> <Image src={Crossover}/></Link>
      </Wrapper>
    </Container>
  );
}

export default App;
