import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  ChangeEvent,
} from "react";

// Import Components
import Form from "./Components/Form";
import Input from "./Components/Input";
import Header from "./Components/Header";
import DynamicBg from "./Components/DynamicBg";
import SubmitButton from "./Components/SubmitButton";
import Card from "./Components/Card";

// CSS Framework
import "react-skeleton-css/styles/skeleton.2.0.4.css";
import "react-skeleton-css/styles/normalize.3.0.2.css";

// Contexts
import MainContext from "./Context/MainContext";

const App = () => {
  const mainContext: any = useContext(MainContext);
  const { headerBg } = mainContext;

  const [img, setImg] = useState("");
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [historyList, setHistoryList] = useState([] as any);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue("");

    setHistoryList([...historyList, ...character]);
  };

  const apiKey = "adeaff6ee796190310c414fecb099cf3";
  const timeStamp = "thesoer";
  const limit = "100";
  const name = inputValue.replace(" ", "%20");
  const hash = "05ee4cb8cb9d52bf2db6a2e6e18906fb";
  const baseUrl = "https://gateway.marvel.com:443/v1/public/characters?";

  const url = `${baseUrl}name=${name}&limit=${limit}&ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`;

  const fetchData = useCallback(async (urlProp: string) => {
    setLoading(true);
    try {
      const res = await fetch(urlProp);
      const json = await res.json();

      setCharacter(json.data.results);
      setLoading(false);
    } catch (err) {
      if (err.message) {
        setIsError(true);
      }
    }
  }, []);

  const imageCallback = useCallback(() => {
    setImg(headerBg[Math.floor(Math.random() * headerBg.length)]);
  }, [headerBg]);

  useEffect(() => {
    if (name !== "") fetchData(url);

    if (img === "") imageCallback();
  }, [fetchData, name, imageCallback, img, url]);

  return (
    <div className="App">
      <Header title="Marvel Character Search" />
      <DynamicBg background={img}>
        <Form onSubmit={(e?: any) => handleSubmit(e)}>
          <Input
            onChange={(e?: any) => handleChange(e)}
            value={inputValue}
            placeholder=" "
          />

          <SubmitButton
            placeholder="Enter username"
            className="button-primary"
            value={loading ? "Loading..." : "Submit"}
            disabled={loading ? true : false}
          />
        </Form>
      </DynamicBg>

      <section>
        {isError && (
          <div className="row">
            <p>Something went wrong ...</p>
          </div>
        )}
      </section>
      <section className="cardWrapper">
        {historyList.length > 0 && (
          <div className="flex flex-wrap -mx-4">
            {historyList.map((item: any) => (
              <Card
                key={item.id}
                name={item.name}
                img={`${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`}
                alt={item.name + "alt"}
                description={item.description}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
