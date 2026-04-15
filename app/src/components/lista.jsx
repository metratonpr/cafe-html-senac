import { Oleo_Script } from "next/font/google";

export default function Lista() {
    return (
        <section>
            <div>
                <h2>Nosso Cardápio</h2>
                {/* ul marcador ol numeral */}
                <ul>
                    <li>Expresso</li>
                    <li>Cappuccino</li>
                    <li>Latte</li>
                    <li>Mocha</li>
                </ul>
            </div>
            <div>
                <h2>Nosso Cardápio</h2>
                {/* ul marcador ol numeral */}
                <ol>
                    <li>Expresso</li>
                    <li>Cappuccino</li>
                    <li>Latte</li>
                    <li>Mocha</li>
                </ol>
            </div>
            
        </section>
    );
}