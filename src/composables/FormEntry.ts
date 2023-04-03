import { ErrorObject, useVuelidate, ValidationArgs } from '@vuelidate/core'

const _DEFAULT_SCOPE_KEY = "page";
const _symbolMapRoot = new Map<string, Symbol>();
const _getFormRootKey = (scope: string) => {
  if (!_symbolMapRoot.has(scope)) {
    _symbolMapRoot.set(scope, Symbol(scope));
  }
  return _symbolMapRoot.get(scope) as InjectionKey<Ref<IFormValidator[]>>;
}
const _symbolMapSubmit = new Map<string, Symbol>();
const _getFormSubmitKey = (scope: string) => {
  if (!_symbolMapSubmit.has(scope)) {
    _symbolMapSubmit.set(scope, Symbol(scope));
  }
  return _symbolMapSubmit.get(scope) as InjectionKey<Ref<boolean>>;
}

export interface IFormValidator extends IVuelidateValidator { }

function getSubmit(scope: string) {
  const _formSubmitKey = _getFormSubmitKey(scope);
  const _submit = inject(_formSubmitKey, ref(false));
  provide(_formSubmitKey, _submit);

  return _submit;
}

export function useFormEntry<T extends Object>(initData: T, rules: ValidationArgs<T>, options: { scope?: string } = {}) {
  const {
    scope = _DEFAULT_SCOPE_KEY
  } = options;

  const data = ref({ ...initData }) as Ref<T>;
  const entry = useVuelidate<T, ValidationArgs<T>>(rules, data);

  const _formRootKey = _getFormRootKey(scope);
  const _validators = inject(_formRootKey, ref([]));
  _validators?.value?.push(entry);
  provide(_formRootKey, _validators);

  const { hasSubmit, getErrors } = getFormEntryStatus(entry, scope);

  return { data, entry, hasSubmit, getErrors }
}

export function getFormEntryStatus<T extends Object>(entry: Ref<T>, scope: string = _DEFAULT_SCOPE_KEY) {
  const _submit = getSubmit(scope)!;
  const hasSubmit = readonly(_submit);

  const getErrors = (m: IFormEntryModel) => {
    const errors = m.$errors;
    return errors && hasSubmit.value ? errors : [];
  }

  return { hasSubmit, getErrors }
}

export function _setupFormRoot(options: { scope?: string } = {}) {
  const {
    scope = _DEFAULT_SCOPE_KEY
  } = options;

  const _formRootKey = _getFormRootKey(scope);
  const _validators = inject(_formRootKey, ref([]));
  provide(_formRootKey, _validators);

  const _submit = getSubmit(scope);
  const setHasSubmit = () => { _submit!.value = true; }

  return { validators: reactive(_validators.value), setHasSubmit }
}

interface IVuelidateValidator {
  value: {
    $validate(): Promise<boolean>
  }
}

interface IFormEntryModel {
  $model: Object;
  $errors: ErrorObject[];
}