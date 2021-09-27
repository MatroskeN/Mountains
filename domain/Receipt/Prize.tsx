export class Prize {
  id: string;
  name: string;
  need_passport: boolean;
  need_delivery: boolean;
}

export class ReceiptPrize {
  id: string;
  prize: Prize;
  passport: object;

  get isNeedAdditionalData() {
    if (this.passport) {
      return false;
    }

    if (this.prize.need_passport) {
      return true;
    }

    if (this.prize.need_delivery) {
      return true;
    }

    return false;
  }
}
