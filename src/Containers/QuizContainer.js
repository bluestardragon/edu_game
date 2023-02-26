import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { AnswerCandidate } from '@/Components'

const STORIES = [
  'Three friends want to share four. If each friend gets one apple, how many will be left over? We start with 4 apples, but lose 3. How many are left?',
  'There are 5 ducks swimming in a pond. 3 more ducks join them. How many ducks are there now? We start with 5 ducks and then add three more ducks. How many ducks are there total?',
  'Emily has 2 pencils and her sister gives her 1 more pencil. How many pencils does Emily have now? She started with 2 pencils and got 1 more. How many does she have now?'
]
const QuizContainer = (props) => {
  const { Layout, Gutters, Fonts, Images } = useTheme()
  const { t } = useTranslation()
  const storyIndex = props.route.params?.storyIndex;
  const [ candidateIndex, setCandidateIndex] = useState(-1)

  useEffect(() => {
   
  },[])

  const renderHeader = () =>(
    <View style={{backgroundColor:'#AB6DD0', height:56, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{ }}>
        <Image source={Images.grape} />
      </TouchableOpacity>
      <TouchableOpacity >
        <Image source={Images.cat} />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={[Layout.fill]}>
      { renderHeader() }
      <View style={[Layout.fill, Gutters.smallHPadding, Gutters.smallTPadding]}>
          <View style={styles.storyWrapper}>
            <Text style={[Fonts.textRegular]}>{ STORIES[storyIndex] }</Text>
          </View>
          <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
              <AnswerCandidate img={Images.duck1} selected={candidateIndex==0} onSelected={()=>{ setCandidateIndex(0) }}/>
              <AnswerCandidate img={Images.duck2} selected={candidateIndex==1} onSelected={()=>{ setCandidateIndex(1) }}/>
            </View>
            <View>
              <TouchableOpacity style={{ alignSelf:'flex-end', marginTop:20}} 
                onPress={()=>{ 
                    console.log(storyIndex);
                    if(storyIndex<2){
                      props.navigation.push('Quiz',{storyIndex:storyIndex+1})
                    }else{
                      
                    }
                }}>
                <Image source={Images.nextTick} style={{ width:45, height:45 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1}}/>
      </View>      
    </View>
  )
}

export default QuizContainer

const styles = {
  storyWrapper:{
    flex:1
  }
}