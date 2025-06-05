layui.define(function (exports) {
  
  function splitRiverSummaryData(data) {
    var USIF = []; // upstream inflow rate volume (ft^3/year)
    var LUIF = []; // land inflow rate volume (ft^3/year)
    var PSIF = []; // pointsource inflow rate volume (ft^3/year)
    var PSWD = []; // pointsource withdrawal rate volume (ft^3/year)
    var PSDT = []; // diverted target pointsource withdrawal rate volume (ft^3/year)
    var IVOL = []; // total inflow rate volume (ft^3/year)
    var RO = []; // outflow volume for each outlet (ft^3/year)

    var USTEMP = []; // upstream heat inflow volume (degree C * ft3/year)
    var LUTEMP = []; // land heat inflow volume (degree C * ft3/year)
    var PSTEMP = []; // pointsource heat inflow volume (degree C * ft3/year)
    var PSWDTEMP = []; // pointsource heat withdrawal volume (degree C * ft3/year)
    var PSDTTEMP = []; // diverted pointsource heat withdrawal volume (degree C * ft3/year)
    var ITEMP = []; // total heat inflow volume (degree C * ft3/year)
    var ROTEMP = []; // heat outflow for each outlet (degree C * ft3/year)

    var USQUAL_CBODu = []; // upstream inflow load of QUAL CBODu (lb/year) 
    var LUQUAL_CBODu = []; // land inflow load of QUAL CBODu (lb/year) 
    var PSQUAL_CBODu = []; // pointsource inflow load of QUAL CBODu (lb/year) 
    var PSWDQUAL_CBODu = []; // pointsource withdrawal load of QUAL CBODu (lb/year) 
    var PSDTQUAL_CBODu = []; // diverted pointsource withdrawal load of QUAL CBODu (lb/year) 
    var IQUAL_CBODu = []; // total inflow load of QUAL CBODu (lb/year) 
    var QUAL_CBODu = []; // load of QUAL CBODu (lb/year) for each outlet

    var USQUAL_ORG_N = []; // "USQUAL_ORG-N"   upstream inflow load of QUAL ORG-N (lb/year) 
    var LUQUAL_ORG_N = []; // "LUQUAL_ORG-N"   land inflow load of QUAL ORG-N (lb/year) 
    var PSQUAL_ORG_N = []; // "PSQUAL_ORG-N"   pointsource inflow load of QUAL ORG-N (lb/year) 
    var PSWDQUAL_ORG_N = []; // "PSWDQUAL_ORG-N" pointsource withdrawal load of QUAL ORG-N (lb/year) 
    var PSDTQUAL_ORG_N = []; // "PSDTQUAL_ORG-N" diverted pointsource withdrawal load of QUAL ORG-N (lb/year) 
    var IQUAL_ORG_N = []; // "IQUAL_ORG-N"    total inflow load of QUAL ORG-N (lb/year) 
    var QUAL_ORG_N = []; // "QUAL_ORG-N"     load of QUAL ORG-N (lb/year) for each outlet

    var USQUAL_NH4 = []; // upstream inflow load of QUAL NH4 (lb/year) 
    var LUQUAL_NH4 = []; // land inflow load of QUAL NH4 (lb/year) 
    var PSQUAL_NH4 = []; // pointsource inflow load of QUAL NH4 (lb/year) 
    var PSWDQUAL_NH4 = []; // pointsource withdrawal load of QUAL NH4 (lb/year) 
    var PSDTQUAL_NH4 = []; // diverted pointsource withdrawal load of QUAL NH4 (lb/year) 
    var IQUAL_NH4 = []; // total inflow load of QUAL NH4 (lb/year) 
    var QUAL_NH4 = []; // load of QUAL NH4 (lb/year) for each outlet

    var USQUAL_NOx = []; // upstream inflow load of QUAL NOx (lb/year) 
    var LUQUAL_NOx = []; // land inflow load of QUAL NOx (lb/year) 
    var PSQUAL_NOx = []; // pointsource inflow load of QUAL NOx (lb/year) 
    var PSWDQUAL_NOx = []; // pointsource withdrawal load of QUAL NOx (lb/year) 
    var PSDTQUAL_NOx = []; // diverted pointsource withdrawal load of QUAL NOx (lb/year) 
    var IQUAL_NOx = []; // total inflow load of QUAL NOx (lb/year) 
    var QUAL_NOx = []; // load of QUAL NOx (lb/year) for each outlet

    var USQUAL_ORG_P = []; // "USQUAL_ORG-P"   upstream inflow load of QUAL ORG-P (lb/year) 
    var LUQUAL_ORG_P = []; // "LUQUAL_ORG-P"   land inflow load of QUAL ORG-P (lb/year) 
    var PSQUAL_ORG_P = []; // "PSQUAL_ORG-P"   pointsource inflow load of QUAL ORG-P (lb/year) 
    var PSWDQUAL_ORG_P = []; // "PSWDQUAL_ORG-P" pointsource withdrawal load of QUAL ORG-P (lb/year) 
    var PSDTQUAL_ORG_P = []; // "PSDTQUAL_ORG-P" diverted pointsource withdrawal load of QUAL ORG-P (lb/year) 
    var IQUAL_ORG_P = []; // "IQUAL_ORG-P"    total inflow load of QUAL ORG-P (lb/year) 
    var QUAL_ORG_P = []; // "QUAL_ORG-P"     load of QUAL ORG-P (lb/year) for each outlet

    var USQUAL_SRP = []; // upstream inflow load of QUAL SRP (lb/year) 
    var LUQUAL_SRP = []; // land inflow load of QUAL SRP (lb/year) 
    var PSQUAL_SRP = []; // pointsource inflow load of QUAL SRP (lb/year) 
    var PSWDQUAL_SRP = []; // pointsource withdrawal load of QUAL SRP (lb/year) 
    var PSDTQUAL_SRP = []; // diverted pointsource withdrawal load of QUAL SRP (lb/year) 
    var IQUAL_SRP = []; // total inflow load of QUAL SRP (lb/year) 
    var QUAL_SRP = []; // load of QUAL SRP (lb/year) for each outlet

    var USRQUAL_DO = []; // upstream inflow load of RQUAL DO (lb/year) 
    var LURQUAL_DO = []; // land inflow load of RQUAL DO (lb/year) 
    var PSRQUAL_DO = []; // pointsource inflow load of RQUAL DO (lb/year) 
    var PSWDRQUAL_DO = []; // pointsource withdrawal load of RQUAL DO (lb/year) 
    var PSDTRQUAL_DO = []; // diverted pointsource withdrawal load of RQUAL DO (lb/year) 
    var IRQUAL_DO = []; // total inflow load of RQUAL DO (lb/year) 
    var RQUAL_DO = []; // load of RQUAL DO (lb/year) for each outlet 

    var USRQUAL_BOD = []; // upstream inflow load of RQUAL BOD (lb/year) 
    var LURQUAL_BOD = []; // land inflow load of RQUAL BOD (lb/year) 
    var PSRQUAL_BOD = []; // pointsource inflow load of RQUAL BOD (lb/year) 
    var PSWDRQUAL_BOD = []; // pointsource withdrawal load of RQUAL BOD (lb/year) 
    var PSDTRQUAL_BOD = []; // diverted pointsource withdrawal load of RQUAL BOD (lb/year) 
    var IRQUAL_BOD = []; // total inflow load of RQUAL BOD (lb/year) 
    var RQUAL_BOD = []; // load of RQUAL BOD (lb/year) for each outlet 

    var USRQUAL_NO3 = []; // upstream inflow load of RQUAL NO3 (lb/year) 
    var LURQUAL_NO3 = []; // land inflow load of RQUAL NO3 (lb/year) 
    var PSRQUAL_NO3 = []; // pointsource inflow load of RQUAL NO3 (lb/year) 
    var PSWDRQUAL_NO3 = []; // pointsource withdrawal load of RQUAL NO3 (lb/year) 
    var PSDTRQUAL_NO3 = []; // diverted pointsource withdrawal load of RQUAL NO3 (lb/year) 
    var IRQUAL_NO3 = []; // total inflow load of RQUAL NO3 (lb/year) 
    var RQUAL_NO3 = []; // load of RQUAL NO3 (lb/year) for each outlet

    var USRQUAL_TAM = []; // upstream inflow load of RQUAL TAM (lb/year) 
    var LURQUAL_TAM = []; // land inflow load of RQUAL TAM (lb/year) 
    var PSRQUAL_TAM = []; // pointsource inflow load of RQUAL TAM (lb/year) 
    var PSWDRQUAL_TAM = []; // pointsource withdrawal load of RQUAL TAM (lb/year) 
    var PSDTRQUAL_TAM = []; // diverted pointsource withdrawal load of RQUAL TAM (lb/year) 
    var IRQUAL_TAM = []; // total inflow load of RQUAL TAM (lb/year) 
    var RQUAL_TAM = []; // load of RQUAL TAM (lb/year) for each outlet

    var USRQUAL_NO2 = []; // upstream inflow load of RQUAL NO2 (lb/year) 
    var LURQUAL_NO2 = []; // land inflow load of RQUAL NO2 (lb/year) 
    var PSRQUAL_NO2 = []; // pointsource inflow load of RQUAL NO2 (lb/year) 
    var PSWDRQUAL_NO2 = []; // pointsource withdrawal load of RQUAL NO2 (lb/year) 
    var PSDTRQUAL_NO2 = []; // diverted pointsource withdrawal load of RQUAL NO2 (lb/year) 
    var IRQUAL_NO2 = []; // total inflow load of RQUAL NO2 (lb/year) 
    var RQUAL_NO2 = []; // load of RQUAL NO2 (lb/year) for each outlet

    var USRQUAL_PO4 = []; // upstream inflow load of RQUAL PO4 (lb/year) 
    var LURQUAL_PO4 = []; // land inflow load of RQUAL PO4 (lb/year) 
    var PSRQUAL_PO4 = []; // pointsource inflow load of RQUAL PO4 (lb/year) 
    var PSWDRQUAL_PO4 = []; // pointsource withdrawal load of RQUAL PO4 (lb/year) 
    var PSDTRQUAL_PO4 = []; // diverted pointsource withdrawal load of RQUAL PO4 (lb/year) 
    var IRQUAL_PO4 = []; // total inflow load of RQUAL PO4 (lb/year) 
    var RQUAL_PO4 = []; // load of RQUAL PO4 (lb/year) for each outlet

    var USRQUAL_ORN = []; // upstream inflow load of RQUAL ORN (lb/year) 
    var LURQUAL_ORN = []; // land inflow load of RQUAL ORN (lb/year) 
    var PSRQUAL_ORN = []; // pointsource inflow load of RQUAL ORN (lb/year) 
    var PSWDRQUAL_ORN = []; // pointsource withdrawal load of RQUAL ORN (lb/year) 
    var PSDTRQUAL_ORN = []; // diverted pointsource withdrawal load of RQUAL ORN (lb/year) 
    var IRQUAL_ORN = []; // total inflow load of RQUAL ORN (lb/year) 
    var RQUAL_ORN = []; // load of RQUAL ORN (lb/year) for each outlet

    var USRQUAL_ORP = []; // upstream inflow load of RQUAL ORP (lb/year) 
    var LURQUAL_ORP = []; // land inflow load of RQUAL ORP (lb/year) 
    var PSRQUAL_ORP = []; // pointsource inflow load of RQUAL ORP (lb/year) 
    var PSWDRQUAL_ORP = []; // pointsource withdrawal load of RQUAL ORP (lb/year) 
    var PSDTRQUAL_ORP = []; // diverted pointsource withdrawal load of RQUAL ORP (lb/year) 
    var IRQUAL_ORP = []; // total inflow load of RQUAL ORP (lb/year) 
    var RQUAL_ORP = []; // load of RQUAL ORP (lb/year) for each outlet

    var USRQUAL_ORC = []; // upstream inflow load of RQUAL ORC (lb/year) 
    var LURQUAL_ORC = []; // land inflow load of RQUAL ORC (lb/year) 
    var PSRQUAL_ORC = []; // pointsource inflow load of RQUAL ORC (lb/year) 
    var PSWDRQUAL_ORC = []; // pointsource withdrawal load of RQUAL ORC (lb/year) 
    var PSDTRQUAL_ORC = []; // diverted pointsource withdrawal load of RQUAL ORC (lb/year) 
    var IRQUAL_ORC = []; // total inflow load of RQUAL ORC (lb/year) 
    var RQUAL_ORC = []; // load of RQUAL ORC (lb/year) for each outlet

    var USRQUAL_COD = [];
    var LURQUAL_COD = [];
    var PSRQUAL_COD = [];
    var PSWDRQUAL_COD = [];
    var PSDTRQUAL_COD = [];
    var IRQUAL_COD = [];
    var RQUAL_COD = [];

    var USRQUAL_TN = [];
    var LURQUAL_TN = [];
    var PSRQUAL_TN = [];
    var PSWDRQUAL_TN = [];
    var PSDTRQUAL_TN = [];
    var IRQUAL_TN = [];
    var RQUAL_TN = [];

    var USRQUAL_TP = [];
    var LURQUAL_TP = [];
    var PSRQUAL_TP = [];
    var PSWDRQUAL_TP = [];
    var PSDTRQUAL_TP = [];
    var IRQUAL_TP = [];
    var RQUAL_TP = [];
    // var RiverS = new Array();

    for (i = 0; i < data.values.length; i++) {
        if (data.values[i][2] === "USIF") {
            USIF[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "LUIF") {
            LUIF[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "PSIF") {
            PSIF[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "PSWD") {
            PSWD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "PSDT") {
            PSDT[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "IVOL") {
            IVOL[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "RO") {
            RO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.028317;
        } else if (data.values[i][2] === "USQUAL_CBODu") {
            USQUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LUQUAL_CBODu") {
            LUQUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSQUAL_CBODu") {
            PSQUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDQUAL_CBODu") {
            PSWDQUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTQUAL_CBODu") {
            PSDTQUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IQUAL_CBODu") {
            IQUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "QUAL_CBODu") {
            QUAL_CBODu[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USQUAL_ORG-N") {
            USQUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LUQUAL_ORG-N") {
            LUQUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSQUAL_ORG-N") {
            PSQUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDQUAL_ORG-N") {
            PSWDQUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTQUAL_ORG-N") {
            PSDTQUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IQUAL_ORG-N") {
            IQUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "QUAL_ORG-N") {
            QUAL_ORG_N[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USQUAL_NH4") {
            USQUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LUQUAL_NH4") {
            LUQUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSQUAL_NH4") {
            PSQUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDQUAL_NH4") {
            PSWDQUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTQUAL_NH4") {
            PSDTQUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IQUAL_NH4") {
            IQUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "QUAL_NH4") {
            QUAL_NH4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USQUAL_NOx") {
            USQUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LUQUAL_NOx") {
            LUQUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSQUAL_NOx") {
            PSQUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDQUAL_NOx") {
            PSWDQUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTQUAL_NOx") {
            PSDTQUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IQUAL_NOx") {
            IQUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "QUAL_NOx") {
            QUAL_NOx[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USQUAL_ORG-P") {
            USQUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LUQUAL_ORG-P") {
            LUQUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSQUAL_ORG-P") {
            PSQUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDQUAL_ORG-P") {
            PSWDQUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTQUAL_ORG-P") {
            PSDTQUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IQUAL_ORG-P") {
            IQUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "QUAL_ORG-P") {
            QUAL_ORG_P[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USQUAL_SRP") {
            USQUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LUQUAL_SRP") {
            LUQUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSQUAL_SRP") {
            PSQUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDQUAL_SRP") {
            PSWDQUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTQUAL_SRP") {
            PSDTQUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IQUAL_SRP") {
            IQUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "QUAL_SRP") {
            QUAL_SRP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_DO") {
            USRQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_DO") {
            LURQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_DO") {
            PSRQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_DO") {
            PSWDRQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_DO") {
            PSDTRQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_DO") {
            IRQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_DO") {
            RQUAL_DO[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_BOD") {
            USRQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_BOD") {
            LURQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_BOD") {
            PSRQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_BOD") {
            PSWDRQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_BOD") {
            PSDTRQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_BOD") {
            IRQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_BOD") {
            RQUAL_BOD[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_NO3") {
            USRQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_NO3") {
            LURQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_NO3") {
            PSRQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_NO3") {
            PSWDRQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_NO3") {
            PSDTRQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_NO3") {
            IRQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_NO3") {
            RQUAL_NO3[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_TAM") {
            USRQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_TAM") {
            LURQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_TAM") {
            PSRQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_TAM") {
            PSWDRQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_TAM") {
            PSDTRQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_TAM") {
            IRQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_TAM") {
            RQUAL_TAM[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_NO2") {
            USRQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_NO2") {
            LURQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_NO2") {
            PSRQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_NO2") {
            PSWDRQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_NO2") {
            PSDTRQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_NO2") {
            IRQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_NO2") {
            RQUAL_NO2[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_PO4") {
            USRQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_PO4") {
            LURQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_PO4") {
            PSRQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_PO4") {
            PSWDRQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_PO4") {
            PSDTRQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_PO4") {
            IRQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_PO4") {
            RQUAL_PO4[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_ORN") {
            USRQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_ORN") {
            LURQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_ORN") {
            PSRQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_ORN") {
            PSWDRQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_ORN") {
            PSDTRQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_ORN") {
            IRQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_ORN") {
            RQUAL_ORN[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_ORP") {
            USRQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_ORP") {
            LURQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_ORP") {
            PSRQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_ORP") {
            PSWDRQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_ORP") {
            PSDTRQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_ORP") {
            IRQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_ORP") {
            RQUAL_ORP[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "USRQUAL_ORC") {
            USRQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "LURQUAL_ORC") {
            LURQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSRQUAL_ORC") {
            PSRQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSWDRQUAL_ORC") {
            PSWDRQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "PSDTRQUAL_ORC") {
            PSDTRQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "IRQUAL_ORC") {
            IRQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        } else if (data.values[i][2] === "RQUAL_ORC") {
            RQUAL_ORC[Number(data.values[i][0]) - 1] = data.values[i][3] * 0.453592;
        }
    };

    for (k = 0; k < 81; k++) {
        USRQUAL_COD[k] = USRQUAL_BOD[k] + USQUAL_CBODu[k];
        LURQUAL_COD[k] = LURQUAL_BOD[k] + LUQUAL_CBODu[k];
        PSRQUAL_COD[k] = PSRQUAL_BOD[k] + PSQUAL_CBODu[k];
        PSWDRQUAL_COD[k] = PSWDRQUAL_BOD[k] + PSWDQUAL_CBODu[k];
        PSDTRQUAL_COD[k] = PSDTRQUAL_BOD[k] + PSDTQUAL_CBODu[k];
        IRQUAL_COD[k] = IRQUAL_BOD[k] + IQUAL_CBODu[k];
        RQUAL_COD[k] = RQUAL_BOD[k] + QUAL_CBODu[k];

        USRQUAL_TN[k] = USRQUAL_ORN[k] + Number(USRQUAL_TAM[k]) + USRQUAL_NO2[k] + USRQUAL_NO3[k];
        LURQUAL_TN[k] = LURQUAL_ORN[k] + Number(LURQUAL_TAM[k]) + LURQUAL_NO2[k] + LURQUAL_NO3[k];
        PSRQUAL_TN[k] = PSRQUAL_ORN[k] + Number(PSRQUAL_TAM[k]) + PSRQUAL_NO2[k] + PSRQUAL_NO3[k];
        PSWDRQUAL_TN[k] = PSWDRQUAL_ORN[k] + Number(PSWDRQUAL_TAM[k]) + PSRQUAL_NO2[k] + PSRQUAL_NO3[k];
        PSDTRQUAL_TN[k] = PSDTRQUAL_ORN[k] + Number(PSDTRQUAL_TAM[k]) + PSRQUAL_NO2[k] + PSRQUAL_NO3[k];
        IRQUAL_TN[k] = IRQUAL_ORN[k] + Number(IRQUAL_TAM[k]) + IRQUAL_NO2[k] + IRQUAL_NO3[k];
        RQUAL_TN[k] = RQUAL_ORN[k] + Number(RQUAL_TAM[k]) + RQUAL_NO2[k] + RQUAL_NO3[k];

        USRQUAL_TP[k] = USRQUAL_ORP[k] + USRQUAL_PO4[k];
        LURQUAL_TP[k] = LURQUAL_ORP[k] + LURQUAL_PO4[k];
        PSRQUAL_TP[k] = PSRQUAL_ORP[k] + PSRQUAL_PO4[k];
        PSWDRQUAL_TP[k] = PSWDRQUAL_ORP[k] + PSWDRQUAL_PO4[k];
        PSDTRQUAL_TP[k] = PSDTRQUAL_ORP[k] + PSDTRQUAL_PO4[k];
        IRQUAL_TP[k] = IRQUAL_ORP[k] + IRQUAL_PO4[k];
        RQUAL_TP[k] = RQUAL_ORP[k] + RQUAL_PO4[k];
    }

    return {
      USIF,
      LUIF,
      PSIF,
      PSWD,
      PSDT,
      IVOL,
      RO,
      // USTEMP,
      // LUTEMP, PSTEMP,
      // PSWDTEMP,
      // PSDTTEMP,
      // ITEMP,
      // ROTEMP,
      USQUAL_CBODu,
      LUQUAL_CBODu,
      PSQUAL_CBODu,
      PSWDQUAL_CBODu,
      PSDTQUAL_CBODu,
      IQUAL_CBODu,
      QUAL_CBODu,
      USQUAL_ORG_N,
      LUQUAL_ORG_N,
      PSQUAL_ORG_N,
      PSWDQUAL_ORG_N,
      PSDTQUAL_ORG_N,
      IQUAL_ORG_N,
      QUAL_ORG_N,
      USQUAL_NH4,
      LUQUAL_NH4,
      PSQUAL_NH4,
      PSWDQUAL_NH4,
      PSDTQUAL_NH4,
      IQUAL_NH4,
      QUAL_NH4,
      USQUAL_NOx,
      LUQUAL_NOx,
      PSQUAL_NOx,
      PSWDQUAL_NOx,
      PSDTQUAL_NOx,
      IQUAL_NOx,
      QUAL_NOx,
      USQUAL_ORG_P,
      LUQUAL_ORG_P,
      PSQUAL_ORG_P,
      PSWDQUAL_ORG_P,
      PSDTQUAL_ORG_P,
      IQUAL_ORG_P,
      QUAL_ORG_P,
      USQUAL_SRP,
      LUQUAL_SRP,
      PSQUAL_SRP,
      PSWDQUAL_SRP,
      PSDTQUAL_SRP,
      IQUAL_SRP,
      QUAL_SRP,
      USRQUAL_DO,
      LURQUAL_DO,
      PSRQUAL_DO,
      PSWDRQUAL_DO,
      PSDTRQUAL_DO,
      IRQUAL_DO,
      RQUAL_DO,
      USRQUAL_BOD,
      LURQUAL_BOD,
      PSRQUAL_BOD,
      PSWDRQUAL_BOD,
      PSDTRQUAL_BOD,
      IRQUAL_BOD,
      RQUAL_BOD,
      USRQUAL_NO3,
      LURQUAL_NO3,
      PSRQUAL_NO3,
      PSWDRQUAL_NO3,
      PSDTRQUAL_NO3,
      IRQUAL_NO3,
      RQUAL_NO3,
      USRQUAL_TAM,
      LURQUAL_TAM,
      PSRQUAL_TAM,
      PSWDRQUAL_TAM,
      PSDTRQUAL_TAM,
      IRQUAL_TAM,
      RQUAL_TAM,
      USRQUAL_NO2,
      LURQUAL_NO2,
      PSRQUAL_NO2,
      PSWDRQUAL_NO2,
      PSDTRQUAL_NO2,
      IRQUAL_NO2,
      RQUAL_NO2,
      USRQUAL_PO4,
      LURQUAL_PO4,
      PSRQUAL_PO4,
      PSWDRQUAL_PO4,
      PSDTRQUAL_PO4,
      IRQUAL_PO4,
      RQUAL_PO4,
      USRQUAL_ORN,
      LURQUAL_ORN,
      PSRQUAL_ORN,
      PSWDRQUAL_ORN,
      PSDTRQUAL_ORN,
      IRQUAL_ORN,
      RQUAL_ORN,
      USRQUAL_ORP,
      LURQUAL_ORP,
      PSRQUAL_ORP,
      PSWDRQUAL_ORP,
      PSDTRQUAL_ORP,
      IRQUAL_ORP,
      RQUAL_ORP,
      USRQUAL_ORC,
      LURQUAL_ORC,
      PSRQUAL_ORC,
      PSWDRQUAL_ORC,
      PSDTRQUAL_ORC,
      IRQUAL_ORC,
      RQUAL_ORC,
      USRQUAL_COD,
      LURQUAL_COD,
      PSRQUAL_COD,
      PSWDRQUAL_COD,
      PSDTRQUAL_COD,
      IRQUAL_COD,
      RQUAL_COD,
      USRQUAL_TN,
      LURQUAL_TN,
      PSRQUAL_TN,
      PSWDRQUAL_TN,
      PSDTRQUAL_TN,
      IRQUAL_TN,
      RQUAL_TN,
      USRQUAL_TP,
      LURQUAL_TP,
      PSRQUAL_TP,
      PSWDRQUAL_TP,
      PSDTRQUAL_TP,
      IRQUAL_TP,
      RQUAL_TP
    }
  }

  exports('splitRiverSummaryData', {splitRiverSummaryData})
})
