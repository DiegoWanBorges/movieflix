import './styles.scss'
import { useForm } from 'react-hook-form';
import { makePrivateRequest } from '../../../../core/utils/request';
import { toast } from 'react-toastify';
type Props ={
    movieId?: number;
}
type FormState = {
    text: string;
    movieId:number;
    
}
const MovieReviewCard = ({ movieId }:Props) => {
    const { register, handleSubmit, errors,setValue } = useForm<FormState>();
    
    const onSubmit = (data: FormState) => {
        const payload ={
            ...data,
            movieId: movieId
        }
        console.log(payload);
        
        makePrivateRequest({
            url: `/reviews/`,
            method: 'POST',
            data: payload
        })
            .then(() => {
                toast.success("Review salvo com sucesso!");
                setValue("text","");
            })
            .catch(() => {
                toast.error("Erro ao salvar o review!");
            })
    }
    return (
        <div className="movie-review-card-main">
            <textarea
                name="text"
                ref={register({ 
                    required: "Campo obrigatório",
                    minLength: { value: 5, message: "O campo deve ter minímo 5 caracteres" },
                })}
                className={`movie-review-input ${errors.text ? 'is-isvalid' : ''}`} 
                placeholder="Deixe sua avaliação aqui"
            />
            {errors.text && (
                                <div className="invalid-feedback d-block">
                                    {errors.text.message}
                                </div>
            )}
            <button
                className="movie-review-btn"
                onClick={handleSubmit(onSubmit)}
            >
                SALVAR AVALIAÇÃO
            </button>  
            
        </div>
    )
}
export default MovieReviewCard;