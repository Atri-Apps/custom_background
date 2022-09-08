import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Upload } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { useFlex1Cb, useTextBox1Cb, useFlex2Cb, useFlex3Cb, useFlex4Cb, useFlex6Cb, useBackgroundCb, useImage2Cb, useFlex10Cb, useTextBox4Cb, useFlex11Cb, useFlex15Cb, useImage3Cb, useImage4Cb, useImage5Cb, useImage6Cb, useFlex16Cb, useDiv1Cb, useImage10Cb, useButton2Cb, useButton3Cb, useFlex20Cb, useImage12Cb, useFlex21Cb, useImage13Cb, useImage14Cb, useImage15Cb, useImage16Cb, useFlex22Cb, useFlex23Cb, useImage17Cb, useImage18Cb, useFlex24Cb, useTextBox5Cb, useFlex25Cb, useDiv4Cb, useFlex26Cb, useImageCb, useImage19Cb, useImage20Cb, useImage21Cb, useImage22Cb, useFlex28Cb, useFlex29Cb, useImage23Cb, useImage24Cb, useFlex30Cb, useTextBox6Cb, useUpload1Cb, useUpload2Cb, useFlex34Cb, useFlex35Cb, useImage25Cb, useImage26Cb, useFlex36Cb, useImage27Cb, useFlex37Cb, useImage28Cb } from "../page-cbs/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const BackgroundProps = useStore((state)=>state["Home"]["Background"]);
const BackgroundIoProps = useIoStore((state)=>state["Home"]["Background"]);
const BackgroundCb = useBackgroundCb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div1Props = useStore((state)=>state["Home"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["Home"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div4Props = useStore((state)=>state["Home"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Home"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Upload1Props = useStore((state)=>state["Home"]["Upload1"]);
const Upload1IoProps = useIoStore((state)=>state["Home"]["Upload1"]);
const Upload1Cb = useUpload1Cb()
const Upload2Props = useStore((state)=>state["Home"]["Upload2"]);
const Upload2IoProps = useIoStore((state)=>state["Home"]["Upload2"]);
const Upload2Cb = useUpload2Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()

  return (<>
  <Flex {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<TextBox {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
</Flex>
<Flex {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Flex {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<Flex {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Flex {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Button {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
<Flex {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Flex {...BackgroundProps} {...BackgroundCb} {...BackgroundIoProps}>
<Div {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Div>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
<Flex {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Upload {...Upload1Props} {...Upload1Cb} {...Upload1IoProps}/>
</Flex>
<Flex {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Flex>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
<Image {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
<Flex {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex {...ImageProps} {...ImageCb} {...ImageIoProps}>
<Div {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Image {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Div>
<Flex {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<Flex {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Image {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Upload {...Upload2Props} {...Upload2Cb} {...Upload2IoProps}/>
</Flex>
<Flex {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Flex {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Image {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Flex>
<Flex {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Flex {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Image {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
<Flex {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<Image {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
