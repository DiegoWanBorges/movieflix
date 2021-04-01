import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity, View, Text, Image } from "react-native"
import { movieReviewList } from '../../../styles';
import { Review } from '../../../utils/types';
import Star from '../../../assets/images/star.png'

type Props = {
    review: Review;
}

const MovieReviewList: React.FC<Props> = ({ review }: Props) => {
    return (
        <View>
            <View style={movieReviewList.userInfo}>
                <Image style={movieReviewList.image} source={Star} />
                <Text style={movieReviewList.userName}>{review.user.name}</Text>
            </View>
            
            <View style={movieReviewList.sinopsyContent}>
                <Text style={movieReviewList.sinopsyText}>
                    {review.text}
                </Text>
            </View>

        </View>

    )
}

export default MovieReviewList;