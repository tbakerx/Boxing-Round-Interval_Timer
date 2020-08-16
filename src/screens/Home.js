import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'
import { observer } from 'mobx-react'
import { useStores } from '../hooks/useStores'
import { SafeAreaView } from 'react-native-safe-area-context'
import { timerProfiles } from '../profiles/timerProfiles'

const Home = () => {
  const { settingsStore, timerStore } = useStores()
  const profiles = timerProfiles

  return (
    <SafeAreaView>
      <Text>{timerStore.currTimerVal}</Text>
      <Button
        title="Start Timer"
        onPress={() => {
          timerStore.startTimer()
        }}
      />
      <Button
        title="Stop Timer"
        onPress={() => {
          timerStore.stopTimer()
        }}
      />
      <Button
        title="Reset Timer"
        onPress={() => {
          timerStore.resetTimer()
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default observer(Home)
