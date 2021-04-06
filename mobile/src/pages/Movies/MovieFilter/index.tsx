import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import { movieFilter } from '../../../styles';
import { Genre } from '../../../utils/types';
import { makePrivateRequest } from '../../../utils/request';
import ModalDropdown from 'react-native-modal-dropdown';



type Props = {
    setIdGenre: Function;
}

const MovieFilter: React.FC<Props> = ({ setIdGenre }: Props) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [genre, setGenre] = useState<Genre>();
    const [selected, setSelectd] = useState("");
    const ref = useRef(null);
    
    useEffect(() => {
        makePrivateRequest({ url: `/genres/` })
            .then(response => {
                setGenres(response.data)
            })
            .finally(() => {
            })
    }, [])

    useEffect(() => {
        try {
            if (genres.length > 0){
                const   g = genres.filter(g => (g.name===selected));
                g[0].id ===undefined ? null : setIdGenre(g[0].id)
            }    
        } catch (error) {
            
        }
        
    }, [selected])
    function change(){
        ref.current.select(-1);
        setIdGenre(0);
        
    }
    return (
        <View style={movieFilter.main}>
            <View style={movieFilter.pickerContainer}>
                <ModalDropdown
                    defaultValue="Selecione um gênero"
                    defaultIndex={-1}
                    options={genres.map(g => (
                        g.name
                    ))}
                    style={movieFilter.picker}
                    textStyle={movieFilter.pickerText}
                    dropdownStyle={movieFilter.pickerDrop}
                    dropdownTextHighlightStyle={movieFilter.pickerTextDropDownSelect}
                    dropdownTextStyle={movieFilter.pickerTextDropDownText}
                    onSelect={(index,option) =>setSelectd(option)}
                    ref={ref}
                >
                </ModalDropdown>
                
            </View>
            <TouchableOpacity 
                style={movieFilter.pickerClean}
                onPress={ change }
            
            > 
                        <Text style={movieFilter.pickerCleanText}>
                            X
                        </Text>
                </TouchableOpacity>
        </View>
    )
}

export default MovieFilter