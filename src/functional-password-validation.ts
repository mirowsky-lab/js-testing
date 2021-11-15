import { Either, left, right } from 'fp-ts/lib/Either';

export class MinLengthValidationError extends Error {
  public _tag: 'PasswordMinLengthValidationError';
  public minLength: number;

  private constructor(minLength: number) {
    super(`Password fails to meet minimum length requirements: ${minLength}`);
    this._tag = 'PasswordMinLengthValidationError';
    this.minLength = minLength;
  }

  public static of(minLength: number): MinLengthValidationError {
    return new MinLengthValidationError(minLength);
  }
}

export class CapitalLetterMissingValidationError extends Error {
  public _tag: 'PasswordCapitalLetterMissingValidationError';

  private constructor() {
    super(`Password is missing a capital letter`);
    this._tag = 'PasswordCapitalLetterMissingValidationError';
  }

  public static of(): CapitalLetterMissingValidationError {
    return new CapitalLetterMissingValidationError();
  }
}

export type PasswordValidationError =
  | MinLengthValidationError
  | CapitalLetterMissingValidationError;

export interface Password {
  _tag: 'Password';
  value: string;
  isHashed: boolean;
}

export function of(value: string): Password {
  return { _tag: 'Password', value: value, isHashed: false };
}

export function fromHashed(value: string): Password {
  return { _tag: 'Password', value: value, isHashed: true };
}

export type PasswordSpecification = {
  minLength?: number;
  capitalLetterRequired?: boolean;
};

export function validate({
  capitalLetterRequired = false,
  minLength = 0,
}: PasswordSpecification = {}) {
  return (password: Password): Either<PasswordValidationError, Password> => {
    if (password.value.length < minLength) {
      return left(MinLengthValidationError.of(minLength));
    }

    if (capitalLetterRequired && !/[A-Z]/.test(password.value)) {
      return left(CapitalLetterMissingValidationError.of());
    }

    return right({ ...password, isValidated: true });
  };
}
