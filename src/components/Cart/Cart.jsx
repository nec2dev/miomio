import NavBar from '../NavBar/NavBar'
import CartList from '../Cart/CartList'
import CheckoutButton from '../Buttons/ButtonCheckout'
import ContinueButton from '../Buttons/ButtonContinue'

export default function Cart() {
  return (
    <>
      <NavBar isCart={true} />
      <main className="bg-slate-800">
        <CartList />
        <div>
          <ContinueButton />
          <CheckoutButton />
        </div>
      </main>
    </>
  );
}
