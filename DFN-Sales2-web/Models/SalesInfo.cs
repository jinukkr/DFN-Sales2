namespace DFN_Sales2_web.Models;

public class SalesInfo
{
    public string product_id { get; set; }
    public string product_name { get; set; }
    public string customer_type { get; set; }
    public string order_id { get; set; }
    public double priceinfo { get; set; }
    public double web_analytics_price { get; set; }
    public double growth_action_price { get; set; }
    public double fraud_kill_chain_price { get; set; }
    public double advanced_analytics_price { get; set; }
    public double ncpi_package_price { get; set; }
    public double data_house_price { get; set; }

    public SalesInfo(string productId, string productName, string customerType, string orderId, double price,
        double webAnalyticsPrice, double growthActionPrice, double fraudKillChainPrice, double advancedAnalyticsPrice,
        double ncpiPackagePrice, double dataHousePrice)
    {

        product_id = productId;
        product_name = productName;
        customer_type = customerType;
        order_id = orderId;
        priceinfo = price;
        web_analytics_price = webAnalyticsPrice;
        growth_action_price = growthActionPrice;
        fraud_kill_chain_price = fraudKillChainPrice;
        advanced_analytics_price = advancedAnalyticsPrice;
        ncpi_package_price = ncpiPackagePrice;
        data_house_price = dataHousePrice;

    }
}