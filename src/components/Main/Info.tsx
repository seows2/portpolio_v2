import styled from "styled-components";
import { theme } from "../../styles/theme";

const links = [
  { id: "github", link: "https://github.com/seows2" },
  { id: "blog", link: "https://blog.naver.com/seows2" },
];

const Info = () => {
  return (
    <Wrapper>
      <div className="links">
        {links.map(({ id, link }) => (
          <a
            className="link"
            key={id}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {id}
          </a>
        ))}
      </div>

      <div className="info">
        <div>Front-end Developer</div>
        info
      </div>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  .links {
    display: flex;
    .link {
      color: ${theme.color.blue};
      &:hover {
        color: ${theme.color.red};
        border-bottom: 0.1rem solid ${theme.color.red};
      }
    }
  }
`;
