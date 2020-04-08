// GET /v1/subscriptions/:id
module.exports = {
    "subscription" : {
        "id": "sub_H2h7hNu78jgOx8",
        "object": "subscription",
        "application_fee_percent": null,
        "billing_cycle_anchor": 1586105648,
        "billing_thresholds": null,
        "cancel_at": null,
        "cancel_at_period_end": false,
        "canceled_at": 1586108036,
        "collection_method": "charge_automatically",
        "created": 1586105648,
        "current_period_end": 1588697648,
        "current_period_start": 1586105648,
        "customer": "cus_H2h7jl3P28cpji",
        "days_until_due": null,
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "discount": null,
        "ended_at": 1586108036,
        "items": {
            "object": "list",
            "data": [
                {
                    "id": "si_H2h78nbTVVuJtc",
                    "object": "subscription_item",
                    "billing_thresholds": null,
                    "created": 1586105649,
                    "metadata": {},
                    "plan": {
                        "id": "PRO-PLAN",
                        "object": "plan",
                        "active": true,
                        "aggregate_usage": null,
                        "amount": 19900,
                        "amount_decimal": "19900",
                        "billing_scheme": "per_unit",
                        "created": 1586014674,
                        "currency": "eur",
                        "interval": "month",
                        "interval_count": 1,
                        "livemode": false,
                        "metadata": {},
                        "nickname": "Professional Plan",
                        "product": "prod_H2Ie6DrdT3TLoa",
                        "tiers": null,
                        "tiers_mode": null,
                        "transform_usage": null,
                        "trial_period_days": 14,
                        "usage_type": "licensed"
                    },
                    "quantity": 1,
                    "subscription": "sub_H2h7hNu78jgOx8",
                    "tax_rates": []
                }
            ],
            "has_more": false,
            "url": "/v1/subscription_items?subscription=sub_H2h7hNu78jgOx8"
        },
        "latest_invoice": "in_1GUbjYF8JKqNqV06keeF6bDm",
        "livemode": false,
        "metadata": {},
        "next_pending_invoice_item_invoice": null,
        "pause_collection": null,
        "pending_invoice_item_interval": null,
        "pending_setup_intent": null,
        "pending_update": null,
        "plan": {
            "id": "PRO-PLAN",
            "object": "plan",
            "active": true,
            "aggregate_usage": null,
            "amount": 19900,
            "amount_decimal": "19900",
            "billing_scheme": "per_unit",
            "created": 1586014674,
            "currency": "eur",
            "interval": "month",
            "interval_count": 1,
            "livemode": false,
            "metadata": {},
            "nickname": "Professional Plan",
            "product": "prod_H2Ie6DrdT3TLoa",
            "tiers": null,
            "tiers_mode": null,
            "transform_usage": null,
            "trial_period_days": 14,
            "usage_type": "licensed"
        },
        "quantity": 1,
        "schedule": null,
        "start_date": 1586105648,
        "status": "canceled",
        "tax_percent": null,
        "trial_end": null,
        "trial_start": null
    }
}