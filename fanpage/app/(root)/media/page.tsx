'use server'
import ButtonTest from "@/components/MediaCom/ButtonTest";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { IdPage } from "./[...id]/_page/IdPage";


interface Props {

}

const MediaPage = () => {

  return (
    <div className=" ">
      media page
      <ButtonTest  path="user_2f9EC351AyOw5H0FYNsbxwOmBRg" idPage={IdPage.customer} />
      <ButtonTest  path="123" idPage={IdPage.profile} />
      <ButtonTest  path="123" idPage={IdPage.examination} />

    </div>
  )
};
  
export default MediaPage;