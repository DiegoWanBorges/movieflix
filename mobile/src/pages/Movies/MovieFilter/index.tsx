import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from "react-native"
import { movieFilter } from '../../../styles';
import { Genre } from '../../../utils/types';
import { makePrivateRequest } from '../../../utils/request';
import { Picker } from '@react-native-picker/picker'

type Props = {
    setIdGenre: Function;
}

const MovieFilter: React.FC<Props> = ({ setIdGenre }: Props) => {
    const [genres, setGenres] = useState<Genre[]>([{
        id: 0,
        name: "Selecione"
    }]);
    const [selected, setSelect] = useState(0);
    useEffect(() => {
        makePrivateRequest({ url: `/genres/` })
            .then(response => {
                setGenres(response.data)
            })
            .finally(() => {
            })
    }, [])

    useEffect(() => {
        setIdGenre(selected)

    }, [selected])

    return (
        <View style={movieFilter.main}>
            <View style={movieFilter.pickerContainer}>
                <Picker
                    selectedValue={""}
                    style={movieFilter.picker}
                    onValueChange={(itemValue) => setIdGenre(itemValue)}
                >
                    <Picker.Item key={0} label={"Selecione"} value={0} />
                    {
                        genres.map(genre => (

                            <Picker.Item key={genre.id} label={genre.name} value={genre.id} />
                        ))
                    }
                </Picker>
            </View>
        </View>
    )
}

export default MovieFilter