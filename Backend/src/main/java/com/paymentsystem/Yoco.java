package com.paymentsystem;

public class Yoco implements PaymentService {

    public Yoco() {
        System.out.println("YOCO YOCO YOCO YOCO");
    }

    @Override
    public boolean Payment(double amount) {
        System.out.println("YOCO Payment: " + amount);
        return true;
    }
}
