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
  const { headerBg, errorMsg, title } = mainContext;

  const [img, setImg] = useState("");
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [historyList, setHistoryList] = useState([] as any);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [secondData, setSecondData] = useState([]);

  // const apiKey = "adeaff6ee796190310c414fecb099cf3";

  const a = "001ac6c73378bbfff488a36141458af2";
  // const timeStamp = "thesoer";
  const limit = "100";
  const name = inputValue.replace(" ", "%20");
  // const hash = "05ee4cb8cb9d52bf2db6a2e6e18906fb";
  // const firstBaseUrl = "https://gateway.marvel.com:443/v1/public/characters?";

  // const firstUrl = `${firstBaseUrl}name=${name}&limit=${limit}&ts=${timeStamp}&apikey=${a}&hash=${hash}`;
  const firstUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&limit=${limit}&ts=thesoer&apikey=${a}&hash=72e5ed53d1398abb831c3ceec263f18b`;
  const secondUrl = `http://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10158405947604808/search/${name}`;

  console.log(secondData);

  const fetchData = useCallback(
    async (firstUrlProp: string, secondUrlProp: string) => {
      setLoading(true);
      try {
        const res = await fetch(firstUrlProp);
        const json = await res.json();

        console.log(json);

        if (json.data.count === 0) {
          try {
            const secondRes = await fetch(secondUrlProp);
            const secondsJson = await secondRes.json();

            // console.log(secondsJson);

            secondsJson.results.forEach((publisher: any) => {
              if (publisher.biography.publisher === "Marvel Comics") {
                secondsJson.results.forEach((found: any) => {
                  if (found.name.toLowerCase() === name.toLowerCase()) {
                    // console.log(found);
                    setSecondData([found] as any);
                  }
                });
              }
            });
          } catch (err) {
            if (err) setIsError(true);
          }
        } else {
          setCharacter(json.data.results);
          setLoading(false);
        }
      } catch (err) {
        if (err.message) {
          setIsError(true);
        }
      }
    },
    [name]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    const checkItemInArr = (item: string, arr: Array<string>) =>
      arr.find(
        (arrItem: any) => arrItem.name.toLowerCase() === item.toLowerCase()
      );

    checkItemInArr(value, historyList)
      ? setErrMsg(errorMsg.duplicate)
      : setErrMsg("");
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue("");
    if (errMsg === "") {
      setHistoryList([...historyList, ...character]);
    }
  };

  const imageCallback = useCallback(() => {
    setImg(headerBg[Math.floor(Math.random() * headerBg.length)]);
  }, [headerBg]);

  useEffect(() => {
    if (name !== "") fetchData(firstUrl, secondUrl);

    if (img === "") imageCallback();
  }, [fetchData, name, imageCallback, img, firstUrl, secondUrl]);

  return (
    <div className="App">
      <Header title={title} />
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
          <p className="text-red-500 italic">{errMsg}</p>
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
