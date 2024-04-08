import { View, Text } from 'react-native'
import React, { RefObject, useCallback } from 'react'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { BottomSheetView } from '@gorhom/bottom-sheet'
// import SelectMajor from './SelectMajor'


interface Props {
    snapPoint : string[],
    bottomSheetRef : RefObject<BottomSheetMethods>,
    handleOpenPress : () => void,
    children : React.ReactElement
}

const BottomUnder = ({snapPoint, bottomSheetRef, handleOpenPress, children} : Props) => {
  const renderBackdrop = useCallback(
		(props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
		[]
	);
  return (
    <>
    <BottomSheet 
        index={-1}
        snapPoints={snapPoint}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
    >
    <BottomSheetView >
        {children}
    </BottomSheetView>
    </BottomSheet>
    </>
  )
}

export default BottomUnder