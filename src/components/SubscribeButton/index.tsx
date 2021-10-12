import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const router = useRouter();
    const [session] = useSession();

    async function handleSubscribe(){

        if(session?.activeSubscription){
            router.push('/posts');
            return;
        }
        
        if(!session){
            signIn('github')
            return;
        }
        try{
            const response = await api.post('/subscribe');

            const { sessionId } = response.data;

            const stripe = await getStripeJS();

            await stripe.redirectToCheckout({sessionId});
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <button
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}