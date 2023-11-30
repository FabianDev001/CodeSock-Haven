export default function Loading() {
    const toolTipArray = ["Schildkröten hassen diesen Trick","Did you know that you are loved by at least 1 person?", "Funfact: You are awesome!", "You are a wonderful person!"];
    
    let toolTip = toolTipArray[Math.floor(Math.random() * toolTipArray.length)];

    return <><p>Loading...</p><br/><p>{toolTip}</p></>
  }

