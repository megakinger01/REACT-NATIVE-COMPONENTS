import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderItem } from '../components/HeaderItem'
import { ItemSeparator } from '../components/ItemSeparator'


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
  }
]


export const CustomSectionListScreen = () => {
  return (
    <View>

      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}

        ListHeaderComponent={<HeaderItem title="Section List " />}

        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <HeaderItem title={'Total de casas:  ' + casas.length} />
          </View>
        )}


        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled


        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderItem title={section.casa} />
          </View>
        )}

        renderSectionFooter={({ section }) => (
          <HeaderItem title={'Total:  ' + section.data.length} />
        )}

        // SectionSeparatorComponent={() =>  <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  )
}
